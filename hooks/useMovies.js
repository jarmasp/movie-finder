import responseMovies from '../mock/with-results.json'
import withoutResults from '../mock/withouth-results.json'

export function useMovies() {
  const movies = responseMovies.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    img: movie.Poster
  }))

  return { movies: mappedMovies }
}