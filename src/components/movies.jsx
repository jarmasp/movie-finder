const MoviesList = ({movies}) => {
  return (
    <ul>
      {
        movies.map(movie => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.img} alt={movie.Title} />
          </li>
        ))
      }
    </ul>
  )
}

 const NoResults = () => {
  return (
    <p>No movies found</p>
  )
}

export function RenderMovies ({movies}) {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
      ? <MoviesList movies={movies} />
      : <NoResults/>
      )
}