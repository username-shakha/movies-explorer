import { ImageList, ImageListItem, ImageListItemBar, useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom'
import { styled } from '@mui/system'
import { useTheme } from '@mui/material/styles'
import { IMAGES_BASE_PATH } from '@/constants'
import { mapGenres } from '@/helper'

const ImgStyled = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

const ImageListItemStyled = styled(ImageListItem)({
  overflow: 'hidden',
})

type TMoviesProps = {
  movies: TMoviesResponse['results']
  genres: TGenre[]
}

export default function Movies({ movies, genres }: TMoviesProps) {
  const theme = useTheme()
  const matchDownMd = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <ImageList cols={matchDownMd ? 1 : 5} rowHeight={365} gap={12}>
      {movies.map((movie) => (
        <ImageListItemStyled key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            {movie.poster_path && (
              <ImgStyled
                src={`${IMAGES_BASE_PATH}/w300${movie.poster_path}`}
                alt={movie.title}
              />
            )}
            <ImageListItemBar
              title={movie.title}
              subtitle={<span>{mapGenres(movie.genre_ids, genres)}</span>}
            />
          </Link>
        </ImageListItemStyled>
      ))}
    </ImageList>
  )
}
