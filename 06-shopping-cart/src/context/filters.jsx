import { createContext,useState } from "react";

// 1. Crear el contexto (es el que tenemos que consumir)
export const FiltersContext = createContext()

// 2. Crear el proveedor (provider)
export function FiltersProvider ({children}) {
    
    const [filters,setFilters] = useState({
        category: 'all',
        minPrice: 500
    })

    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}