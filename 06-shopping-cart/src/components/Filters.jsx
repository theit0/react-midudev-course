import { useContext, useId, useState } from 'react'
import './Filters.css'
import { FiltersContext } from '../context/filters'
export function Filters () {
    const [minPrice,setMinPrice] = useState(0)
    const minPriceID = useId()
    const categoryID = useId()
    const {setFilters} = useContext(FiltersContext)

    const handleMinPriceChange = (event) => {
        const newMinPrice = event.target.value
        setMinPrice(newMinPrice)
        setFilters(prevState => ({
            ...prevState,
            minPrice:newMinPrice
        }))
    }

    const handleChangeCategory = (event) => {
        const newCategory = event.target.value
        setFilters(prevState => ({
            ...prevState,
            category:newCategory
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceID}>Precio a partir de:</label>
                <input onChange={handleMinPriceChange} type="range" id={minPriceID} min='0' max='1000'/>
                <output>${minPrice}</output>
           </div>

            <div>
                <label htmlFor={categoryID}>Categoría</label>
                <select id={categoryID} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Portátiles</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}