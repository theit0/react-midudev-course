import { useRef, useState, useMemo,useCallback } from 'react'
import { getMoviesByTitle } from '../services/getMoviesByTitle.js'

export function useMovies({search,sort}) {
    const [movies,setMovies] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    const prevSearch = useRef(search)

    
    const getMovies = useCallback (async ({search}) => {
        console.log('getMovies')

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
    },[]) // si es vacio, solo ejecuta por primera vez la funcion


    const sortedMovies = useMemo(()=>{
        // Si no cambia sort o movies, el cuerpo de esta funcion
        // no se ejecuta
        console.log('sortedMovies')
        return sort && movies
                ? [...movies].sort((a, b) => b.year - a.year)
                : movies
    },[sort,movies])

    return { movies: sortedMovies, getMovies,error,loading }
}