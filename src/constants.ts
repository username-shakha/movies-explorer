export type T_API_KEY = '228eed8bfab76fd9911f57f25d621279'
export const API_KEY: T_API_KEY = import.meta.env.VITE_API_KEY
export const BASE_URL = import.meta.env.VITE_BASE_URL as 'https://api.themoviedb.org/3'
export const IMAGES_BASE_PATH = import.meta.env
  .VITE_IMAGES_BASE_PATH as 'https://image.tmdb.org/t/p'
export const COVER_PLACEHOLDER_URL = import.meta.env
  .VITE_COVER_PLACEHOLDER as 'https://via.placeholder.com/92x138.png?text=No+Cover'
