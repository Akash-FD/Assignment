import React, { useState } from 'react'
import './Navbar.css'
// import { FaCartArrowDown } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
// import Product from '../../Pages/Product';


export default function Navbar() {

    const[menu,setMenu] = useState("shop")
    return (

        <div className='navbar'>
            <div className="logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="list">
                    <li onClick={()=>{setMenu("shop")}}><NavLink to='/' style={({isActive})=>{return{color:isActive && "red"}}}>shop</NavLink></li>
                    <li onClick={()=>{setMenu("mens")}}><NavLink to='/mens' style={({isActive})=>{return{color:isActive && "red"}}}>Mens</NavLink></li>
                    <li onClick={()=>{setMenu("women")}}><NavLink to='/women' style={({isActive})=>{return{color:isActive && "red"}}}>Women</NavLink></li>
                    <li onClick={()=>{setMenu("kids")}}><NavLink to='/kids' style={({isActive})=>{return{color:isActive && "red"}}}>Kids</NavLink></li>
            </ul>
           
            <div className="login">
                <Link to='/login'><button>Login</button></Link>  
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="item-count">0</div>
            </div>
         
        </div>
    )
}
              





