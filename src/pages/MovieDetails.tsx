import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import Loader from '../components/Loader'
import Movie from '../components/Movie'
import { useQuery } from 'react-query'
import TheMovieDbApi from '@/api/api'
import { API_KEY } from '@/constants'

const api = new TheMovieDbApi(API_KEY)

const MovieDetails = () => {
  const id = useParams<{ id: string }>()?.id ?? '693134'

  useEffect(() => {}, [id])

  const movieQuery = useQuery(['movie', id], () => api.getMovie(Number(id)))
  const genresQuery = useQuery('genres', api.getGenres)

  return movieQuery.isLoading || genresQuery.isLoading ? (
    <h2>Loading...</h2>
  ) : movieQuery.data && genresQuery.data ? (
    <Movie movie={movieQuery.data} genres={genresQuery.data.genres} />
  ) : (
    <h1>No Data</h1>
  )
}

export default MovieDetails
