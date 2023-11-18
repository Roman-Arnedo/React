import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  
  return(
    <div>
      <BrowserRouter>
        
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/productos/:id' element={<ItemDetailContainer/>}/>
          <Route exact path='/productos/category/:category' element={<ItemDetailContainer/>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App
