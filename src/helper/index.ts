interface IGenresMap {
  [key: number]: string
}

export function mapGenres(genIds: number[], genres: TGenre[]) {
  if (!Array.isArray(genres)) {
    console.error('Genres is not an array:', genres)
    return ''
  }
  const genresMap: IGenresMap = genres.reduce((result, current) => {
    result[current.id] = current.name
    return result
  }, {} as IGenresMap)

  return genIds.map((id) => genresMap[id]).join(', ')
}
