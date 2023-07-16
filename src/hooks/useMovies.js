import { useState } from 'react'
// import withResults from '../mock/with-results.json'
// import withoutResults from '../mock/without-results.json'
import { searchMovies } from '../services/getMovies' 

export const useMovies = ({query}) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState([])
  const [error, setError] = useState([])
  
  const getMovies = async () => {
    try { 
      setLoading(true)
      setError(null)
      const queriedMovies = await searchMovies({ query })
      setMovies(queriedMovies)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return { movies, getMovies, loading, error }
}