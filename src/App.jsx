// import { useState } from 'react'
import './App.css'
import { RenderMovies } from './components/movies'
import { useMovies } from '../hooks/useMovies'

function App() {
const {movies:mappedMovies} = useMovies()

  return (
    <div className='page'>
      <header className='form'>
        <form>
          <input placeholder="Avengers" />
          <button type='submit'>Search</button>
        </form>

      </header>
    

      <main>
        <RenderMovies movies={mappedMovies} />
      </main>
    </div>
  )
}

export default App
