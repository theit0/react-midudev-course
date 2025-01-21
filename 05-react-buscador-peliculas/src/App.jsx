
import { useState } from "react"
import "./App.css"
import { Movies } from "./components/Movies"
import { useMovies } from "./hooks/useMovies"
import { useEffect } from "react"


/* const SEARCH_URL = `http://www.omdbapi.com/?apikey=d6ad7582&`
 */


function App() {
 
  const {movies} = useMovies()
  const [query,setQuery] = useState('')
  const [error,setError] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(query)
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if(newQuery.startsWith(' ')) return
    setQuery(newQuery)
  }

  useEffect(()=>{
    if (query === '') {
      setError('No se puede buscar una pelicula vacia')
      return
    }

    if (query.match(/^\d+$/)){
      setError('No se puede buscar una pelicula con un numero')
      return
    }

    if(query.length<3){
      setError('La busquede debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  },[query])


  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input onChange={handleChange} name="query" value={query} type="text" placeholder="Avengers, Star Wars, The matrix..."/>
          <button type="submit">Buscar</button>
        </form>
        {
          error &&
          <p>{error}</p>
        }
      </header>
     
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}


export default App



