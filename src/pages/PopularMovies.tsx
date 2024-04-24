import { useInfiniteQuery, useQuery } from 'react-query'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Typography } from '@mui/material'
import Movies from '../components/Movies'
import Loader from '@/components/Loader'
import TheMovieDbApi from '@/api/api'
import { API_KEY } from '@/constants'

const api = new TheMovieDbApi(API_KEY)

const PopularMovies = () => {
  const {
    data: movies,
    fetchNextPage,
    hasNextPage,
    // isLoading: moviesLoading,
  } = useInfiniteQuery(
    ['popularMovies'],
    ({ pageParam = 1 }) => api.getPopularMovies(pageParam),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.page < lastPage.total_pages ? lastPage.page + 1 : null
      },
    }
  )

  const { data } = useQuery(['genres'], () => api.getGenres())
  const genres = data?.genres

  const totalMovies = movies?.pages.reduce((acc: TMovie[], page: TMoviesResponse) => {
    return [...acc, ...page.results]
  }, [])
  const totalResults = movies?.pages.reduce((acc: number, page: TMoviesResponse) => {
    return acc + page.total_results
  }, 0)
  return (
    <>
      <Typography component="h2" variant="h3" gutterBottom={true}>
        Popular Movies
      </Typography>
      <InfiniteScroll
        dataLength={totalResults ? totalResults : 0}
        next={fetchNextPage}
        hasMore={hasNextPage ?? false}
        loader={<Loader />}
        style={{ overflow: 'hidden' }}
        endMessage={<p>Yay! You have seen it all!</p>}
      >
        {totalMovies !== undefined && genres !== undefined && (
          <Movies movies={totalMovies} genres={genres} />
        )}
      </InfiniteScroll>
    </>
  )
}

export default PopularMovies
