import { useState } from "react"

export function useFilters() {

    const [filters,setFilters] = useState({
        category: 'all',
        minPrice: 0
    }) 

    const filterProducts = (products) => {
        return products.filter((product)=>{
            return (
                product.price >= filters.minPrice && (
                    product.category === filters.category ||
                    filters.category === 'all'
                )
            )
        })
    }

    return {filterProducts,setFilters}
}