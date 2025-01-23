import { useState } from "react"
import "./App.css"
import { Movies } from "./components/Movies"
import { useMovies } from "./hooks/useMovies"
import { useSearch } from "./hooks/useSearch"


function App() {
  const [sort,setSort] = useState(false)
  const {search,updateSearch} = useSearch();
  const {movies,getMovies,loading} = useMovies({search,sort})

  const handleSort = () => {
    setSort(!sort)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({search})
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
            onChange={handleChange} 
            name="query" 
            value={search} 
            type="text" 
            placeholder="Avengers, Star Wars, The matrix..."/>
            <input type="checkbox" onChange={handleSort} checked={sort}/>
          <button type="submit">Buscar</button>
        </form>
      </header>
      
      {
        loading
        ? (<p>Loading...</p>)
        : (<Movies movies={movies} /> )
      }
    </div>
  )
}


export default App



