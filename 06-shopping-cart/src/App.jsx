import { useState } from "react"
import { Products } from "./components/Products"
import {products as initialProducts} from './mocks/products.json'
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import {useFilters} from './hooks/useFilters'



function App() {
  const {filterProducts,setFilters} = useFilters()
  const filteredProducts = filterProducts(initialProducts)


  return (
    <>
      <Header changeFilters={setFilters}/>
      <Products products={filteredProducts}/>
      <Footer/>
    </>
  )
}

export default App
