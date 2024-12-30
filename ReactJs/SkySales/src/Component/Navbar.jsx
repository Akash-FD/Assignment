import React, { useState } from 'react'
import { SiSky } from "react-icons/si";
import { FaCartShopping } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import { products_categories } from '../Component/data/data'
import { HiMenuAlt1 } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { use } from 'react';


export default function Navbar() {

  const [menu,setMenu] = useState(false)

  const handleMenu = ()=>{
    setMenu(!menu)
  }
  
  
  return (
    <div className='w-full mt-2 p-8 h-20 border shadow-lg  flex items-center justify-around gap-10 bg-slate-50 sticky top-0'>
      <div className='hidden max-md:block text-4xl cursor-pointer' onClick={handleMenu}>
      <HiMenuAlt1 />
      </div>

      <div className='flex items-center'>
        <SiSky className=' text-6xl' />
        <span className='text-2xl mt-3'>sales</span>
      </div>

      <ul className={`flex items-center gap-12 text-2xl max-md:flex max-md:flex-col max-md:p-10 max-md:gap-10 max-md:w-[60%] max-md:fixed max-md:left-0 max-md:top-0 max-md:pt-20 max-md:h-full max-md:bg-slate-100  transition duration-300 ${menu?'max-md:translate-x-0':'max-md:-translate-x-full'}`}>
        <div className='cross hidden max-md:block  cursor-pointer max-md:self-end' onClick={handleMenu}>
        <ImCross />

        </div>
        {products_categories.map((item, index) => {
          return <li key={index} className=' hover:text-red-600'><NavLink to={`${item.label}`}>{item.value}</NavLink></li>
        })
        }
      </ul>

      <div>
        <NavLink to='/cart'><FaCartShopping className='text-4xl' /></NavLink>
      </div>
    </div>
  )
}



