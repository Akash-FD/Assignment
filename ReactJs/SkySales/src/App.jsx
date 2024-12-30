import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar'
import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import { createContext, useState } from 'react'

export const cartContext = createContext();

function App() {

  const [cart, setCart] = useState([]);

  return (
    <>
      <div className=''>
        <BrowserRouter>
          <cartContext.Provider value={{ cart, setCart }}>
          <Navbar />
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/mobile' element={<Product category="mobile" />}></Route>
              <Route path='/tablet' element={<Product category="tablet" />}></Route>
              <Route path='/laptop' element={<Product category="laptop" />}></Route>
              <Route path='/product/:id' element={<ProductDetails />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
            </Routes>
          </cartContext.Provider>
        </BrowserRouter>
      </div>
    </>
  )
}
export default App








