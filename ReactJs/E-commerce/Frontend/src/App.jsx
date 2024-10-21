import Navbar from "./Component/Navbar/Navbar"
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Product from "./Pages/Product"
import ShopCategory from "./Pages/ShopCategory"
import Shop from "./Pages/Shop"
import Cart from "./Pages/Cart"
import Login from "./Pages/Login"
import Footer from "./Component/Footer/Footer"
import banner_mens from './Component/assets/banner_mens.png'
import banner_women from './Component/assets/banner_women.png'
import banner_kids from './Component/assets/banner_kids.png'

function App() {
  return (
    <>

    
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/mens" element={<ShopCategory banner={banner_mens} category="mens"/>}></Route>
          <Route path="/women" element={<ShopCategory banner={banner_women} category="women"/>}></Route>
          <Route path="/kids" element={<ShopCategory banner={banner_kids} category="kids"/>}></Route>
          <Route path="/product/:productId" element={<Product/>}>
          {/* <Route path=":productId" element={<Product/>}></Route> */}
          </Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
  }
  export default App
  
  
  
  



