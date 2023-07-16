import { useState } from 'react'
// import withResults from '../mock/with-results.json'
// import withoutResults from '../mock/without-results.json'
import { searchMovies } from '../services/getMovies' 

export const useMovies = ({query}) => {
  const [movies, setMovies] = useState([])
  
  const getMovies = async () => {
    const queriedMovies = await searchMovies({ query })
    setMovies(queriedMovies)
  }

    return {movies, getMovies}
  }