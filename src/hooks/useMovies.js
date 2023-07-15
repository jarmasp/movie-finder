import { useState } from 'react'
// import withResults from '../mock/with-results.json'
import withoutResults from '../mock/without-results.json'  

export const useMovies = (query) => {
  const [ResponseMovies, setResponseMovies] = useState([])
  const movies = ResponseMovies.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    img: movie.Poster
  }))
  
  const getMovies = () => {
    if (query) {
      // setResponseMovies(withResults)
      fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=e4f75770&s=${query}`)
        .then(res => res.json())
        .then(json => {
          setResponseMovies(json)
        })
    } else {
      setResponseMovies(withoutResults)
    }
  }

    return {movies: mappedMovies, getMovies}
  }