type TMovie = {
  adult: boolean
  backdrop_path: string | null
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string | null
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

type TMovieGet = {
  adult: boolean
  backdrop_path: string | null
  belongs_to_collection?: {
    id: number
    name: string
    poster_path: string | null
    backdrop_path: string | null
  }
  budget: number
  genres: { id: number; name: string }[]
  homepage: string | null
  id: number
  imdb_id: string | null
  origin_country: string[]
  original_language: string
  original_title: string
  overview: string | null
  popularity: number
  poster_path: string | null
  production_companies: {
    id: number
    logo_path: string | null
    name: string
    origin_country: string
  }[]
  production_countries: { iso_3166_1: string; name: string }[]
  release_date: string
  revenue: number
  runtime: number | null
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[]
  status: string
  tagline: string | null
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  recommendations: {
    page: number
    results: {
      backdrop_path: string | null
      id: number
      original_title: string
      overview: string
      poster_path: string | null
      media_type: string
      adult: boolean
      title: string
      original_language: string
      genre_ids: number[]
      popularity: number
      release_date: string
      video: boolean
      vote_average: number
      vote_count: number
    }[]
  }
}

type TGenre = {
  id: number
  name: string
}

type GenreResponse = {
  genres: TGenre[]
}

type TMoviesResponse = {
  page: number
  results: TMovie[]
  total_pages: number
  total_results: number
}
