import { useEffect, useState , useRef} from "react"

export function useSearch () {
  const [search,updateSearch] = useState('')
  const [error,setError] = useState(null)
  const isFirstInput = useRef(true) // uso useRef ya que si uso
                                    // un estado se actualiza
                                    // el componente cada vez que
                                    // escribo
                                  
  useEffect(()=>{
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search.match(/^\d+$/)){
      setError('No se puede buscar una pelicula con un numero')
      return
    }

    if(search.length<3){
      setError('La busquede debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  },[search])
  
  return {search,updateSearch,error}
}