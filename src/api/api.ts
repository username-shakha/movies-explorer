import { BASE_URL, T_API_KEY } from '@/constants'

export default class TheMovieDbApi {
  apiBaseUrl = BASE_URL
  apiKey: T_API_KEY

  constructor(apiKey: T_API_KEY) {
    this.apiKey = apiKey
  }

  getPopularMovies = async (
    page: TMoviesResponse['page'] = 1
  ): Promise<TMoviesResponse> => {
    const response = await fetch(
      `${this.apiBaseUrl}/movie/popular?api_key=${this.apiKey}&page=${page}`
    )

    return response.json()
  }

  getMovie = async (id: TMovie['id']): Promise<TMovieGet> => {
    const response = await fetch(
      `${this.apiBaseUrl}/movie/${id}?api_key=${this.apiKey}&append_to_response=recommendations`
    )

    return response.json()
  }

  searchMovies = async (query: TMovie['title']) => {
    const response = await fetch(
      `${this.apiBaseUrl}/search/movie?api_key=${this.apiKey}&query=${query}`
    )

    return response.json()
  }

  getGenres = async (): Promise<GenreResponse> => {
    const response = await fetch(
      `${this.apiBaseUrl}/genre/movie/list?api_key=${this.apiKey}`
    )

    return response.json()
  }
}
