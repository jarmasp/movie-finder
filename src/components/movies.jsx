/* eslint-disable react/prop-types */
const MovieList = ({movies}) => {
  return (
    <ul className="movies">
      {
        movies.map(movie => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.img} alt={movie.title}/>
          </li>
        )) 
      }
    </ul>
  )
}

const NoResults = () => {
  return (
    <p>No movie found</p>
  )
}

export const Movies = ({movies}) => {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
      ? <MovieList movies={movies} />
      : <NoResults/>
  )
}