import { useState } from "react"
import { Products } from "./components/Products"
import {products as initialProducts} from './mocks/products.json'
import { Header } from "./components/Header"

function App() {
  const [products,setProducts] = useState(initialProducts)

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

  const filteredProducts = filterProducts(products)


  return (
    <>
      <Header changeFilters={setFilters}/>
      <Products products={filteredProducts}/>
    </>
  )
}

export default App
