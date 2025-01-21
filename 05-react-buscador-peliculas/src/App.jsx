
import "./App.css"
import { Movies } from "./components/Movies"
import { useMovies } from "./hooks/useMovies"
import { useSearch } from "./hooks/useSearch"

/* const SEARCH_URL = `http://www.omdbapi.com/?apikey=d6ad7582&` */

function App() {
 
  const {movies} = useMovies()
  const {search,updateSearch,error} = useSearch();

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(search)
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
  }

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input 
            style={{border:'1px solid transparent',borderColor: error ? 'red' : 'transparent' }} 
            onChange={handleChange} 
            name="query" 
            value={search} 
            type="text" 
            placeholder="Avengers, Star Wars, The matrix..."/>
          <button type="submit">Buscar</button>
        </form>
        {
          error &&
          <p style={{color:'red'}}>{error}</p>
        }
      </header>
     
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}


export default App



