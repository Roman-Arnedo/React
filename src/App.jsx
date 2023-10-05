import React from 'react'
import Navbar from './components/Navbar'
import ItemListContainer from './components/itemListContainer'

function App() {
  
  return(
    <div>
      <Navbar/>
      <ItemListContainer greeting={"Bienvenido a mi E-commerce"} />
    </div>
  )
}

export default App
