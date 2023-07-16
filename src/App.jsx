import './App.css'
import { Movies } from './components/movies.jsx'
import { useMovies } from './hooks/useMovies.js'
import { useSearch } from './hooks/useSearch'


function App() {
  const { query, setQuery, error } = useSearch()
  const { movies, getMovies } = useMovies({query})

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({query})
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    setQuery(newQuery)
  }

  return (
    <div className='page'>

      <header >
        <h1>Movie Search Engine</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} name='query' />
          <button  type='submit' value='query'>Search</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>
    
      <main>
        <Movies movies={movies}/>
      </main>
    </div>
  )
}

export default App
