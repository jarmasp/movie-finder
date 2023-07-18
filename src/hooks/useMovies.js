import { useState, useRef, useMemo } from 'react'
// import withResults from '../mock/with-results.json'
// import withoutResults from '../mock/without-results.json'
import { searchMovies } from '../services/getMovies' 

export const useMovies = ({ query }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState([false])
  const [error, setError] = useState([null])
  const previousQuery = useRef(query)
  
  const getMovies = useMemo(() => {
    return async ({ query }) => {
      if (query === previousQuery.current)
        return
    
      try {
        setLoading(true)
        setError(null)
        previousQuery.current = query
        const queriedMovies = await searchMovies({ query })
        setMovies(queriedMovies)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
  }, [])

  return { movies, getMovies, loading, error }
}