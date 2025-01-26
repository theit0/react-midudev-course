import { useState } from 'react'
import './Filters.css'
export function Filters ({changeFilters}) {
    const [minPrice,setMinPrice] = useState(0)
   
    const handleMinPriceChange = (event) => {
        const newMinPrice = event.target.value
        setMinPrice(newMinPrice)
        changeFilters(prevState => ({
            ...prevState,
            minPrice:newMinPrice
        }))
    }

    const handleChangeCategory = (event) => {
        const newCategory = event.target.value
        changeFilters(prevState => ({
            ...prevState,
            category:newCategory
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor="price">Precio a partir de:</label>
                <input onChange={handleMinPriceChange} type="range" id="price" min='0' max='1000'/>
                <output>${minPrice}</output>
           </div>

            <div>
                <label htmlFor="category">Categoría</label>
                <select id="category" onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Portátiles</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}