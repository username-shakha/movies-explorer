import { useState } from 'react'
import { useQuery } from 'react-query'
import TheMovieDbApi from '@/api/api'
import { API_KEY } from '@/constants'
import Suggestion from '@/components/Suggestion'

const api = new TheMovieDbApi(API_KEY)

export default function SearchMoviesSuggestion() {
  const [inputValue, setInputValue] = useState('')
  const { data } = useQuery(['genres'], () => api.getGenres())
  const genres = data?.genres
  const { data: searchResponse } = useQuery(
    ['searchMovies', inputValue],
    () => (inputValue ? api.searchMovies(inputValue) : Promise.resolve(null)),
    {
      enabled: !!inputValue,
    }
  )

  return (
    <>
      {genres !== undefined && (
        <Suggestion
          movies={searchResponse}
          genres={genres}
          inputOnChange={(event) => {
            if (!event.target.value) {
              return
            }
            setInputValue(event.target.value)
            //or setTimeout best practices
            // setTimeout(() => {
            //   setInputValue(event.target.value)
            // }, 300)
          }}
        />
      )}
    </>
  )
}
