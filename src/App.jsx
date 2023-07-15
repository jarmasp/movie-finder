import { useRef } from 'react'
import './App.css'
import { Movies } from './components/movies.jsx'
import { useMovies } from './hooks/useMovies.js'

function App() {

  const query = useRef('')
  const newQuery = query.current.value
  const { movies, getMovies } = useMovies(newQuery)

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
    if (query === '') {
      return
    } 
  }

  return (
    <div className='page'>

      <header >
        <h1>Movie Search Engine</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input type='text' name='query' ref={query} />
          <button  type='submit' value='query'>Search</button>
        </form>
      </header>
    
      <main>
        <Movies movies={movies}/>
      </main>
    </div>
  )
}

export default App
