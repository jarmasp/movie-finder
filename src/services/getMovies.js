const API_KEY = 'e4f75770'

export const searchMovies = async ({ query }) => {
  if (query === '') return null

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
    const json = await response.json()

    const movies = json.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      img: movie.Poster
    }))
  } catch (e) {
    throw new Error('Error searching movies')
  }
}