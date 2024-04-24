import { Grid, Typography } from '@mui/material'
import { IMAGES_BASE_PATH, COVER_PLACEHOLDER_URL } from '@/constants'
import { styled } from '@mui/system'
import Movies from './Movies'

const GridStyled = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}))

const ImgStyled = styled('img')({
  width: '100%',
})

type TMovieProps = {
  movie: TMovieGet
  genres: TGenre[]
}

export default function Movie({ movie, genres }: TMovieProps) {
  const formatRuntime = (runtime: number): string => {
    const hours = Math.floor(runtime / 60) + 'h'
    const minutes = (runtime % 60) + 'm'

    return `${hours} ${minutes}`
  }

  return (
    <>
      <GridStyled container={true} spacing={2}>
        <Grid item={true} md={3}>
          {movie.poster_path ? (
            <ImgStyled
              src={`${IMAGES_BASE_PATH}/w300${movie.poster_path}`}
              alt={movie.title}
            />
          ) : (
            <ImgStyled src={COVER_PLACEHOLDER_URL} alt={movie.title} />
          )}
        </Grid>
        <Grid item={true} md={9}>
          <Typography component="h1" variant="h3" gutterBottom={true}>
            {movie.title}
          </Typography>
          {movie.tagline && (
            <>
              <Typography component="h3" variant="h6">
                Tagline:
              </Typography>
              <Typography variant="body1" gutterBottom={true}>
                {movie.tagline}
              </Typography>
            </>
          )}
          {movie.genres && (
            <>
              <Typography component="h3" variant="h6">
                Genres:
              </Typography>
              <Typography variant="body1" gutterBottom={true}>
                {movie.genres.map((genre) => genre.name).join(', ')}
              </Typography>
            </>
          )}
          {movie.production_countries && (
            <>
              <Typography component="h3" variant="h6">
                Country:
              </Typography>
              <Typography variant="body1" gutterBottom={true}>
                {movie.production_countries.map((country) => country.name).join(', ')}
              </Typography>
            </>
          )}
          {movie.runtime && (
            <>
              <Typography component="h3" variant="h6">
                Duration:
              </Typography>
              <Typography variant="body1" gutterBottom={true}>
                {formatRuntime(movie.runtime)}
              </Typography>
            </>
          )}
          {movie.release_date && (
            <>
              <Typography component="h3" variant="h6">
                Release Date:
              </Typography>
              <Typography variant="body1" gutterBottom={true}>
                {new Date(movie.release_date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </Typography>
            </>
          )}
          {movie.overview && (
            <>
              <Typography component="h3" variant="h6">
                Overview:
              </Typography>
              <Typography variant="body1" gutterBottom={true}>
                {movie.overview}
              </Typography>
            </>
          )}
        </Grid>
      </GridStyled>

      {movie.recommendations.results.length >= 1 && (
        <>
          <Typography component="h2" variant="h4" gutterBottom={true}>
            Recommended
          </Typography>
          <Movies movies={movie.recommendations.results} genres={genres} />
        </>
      )}
    </>
  )
}
