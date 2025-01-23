import { useRef, useState, useMemo } from 'react'
import { getMoviesByTitle } from '../services/getMoviesByTitle.js'

export function useMovies({search,sort}) {
    const [movies,setMovies] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    const prevSearch = useRef(search)

    
    const getMovies = useMemo (()=>{
       console.log('getmovies')
       return async ({search}) => {
        if (search === prevSearch.current) return 

        try {
            setLoading(true)
            setError(null)
            prevSearch.current = search
            const newMovies = await getMoviesByTitle({search})
            setMovies(newMovies)
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
       }
    },[]) // si es vacio, solo ejecuta por primera vez la funcion


    const sortedMovies = useMemo(()=>{
        // Si no cambia sort o movies, el cuerpo de esta funcion
        // no se ejecuta
        return sort
                ? [...movies].sort((a, b) => b.year - a.year)
                : movies
    },[sort,movies])

    return { movies: sortedMovies, getMovies,error,loading }
}