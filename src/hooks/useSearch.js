import { useState, useEffect, useRef } from "react"

export const useSearch = () => {
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')
  const firstInput = useRef(true)

  useEffect(() => {
    if (firstInput.current) {
      firstInput.current = query === ''
      return
    }

    if (query === '') {
        
      setError('Please write the movie title')
      return
    }

    setError(null)
  }, [query])

  return {query, setQuery, error}
}