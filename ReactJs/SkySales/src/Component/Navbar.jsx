import React from 'react'
import { SiSky } from "react-icons/si";
import { FaCartShopping } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import {products_categories} from '../Component/data/data'

export default function Navbar() {
  return (
    <div className='w-full mt-2 p-10 h-20 border shadow-lg  flex items-center justify-around gap-20 bg-slate-50 sticky top-0'>

      <div className='flex items-center'>
        <SiSky className=' text-6xl'/>
        <span className='text-2xl mt-3'>sales</span>
      </div>

      <ul className='flex items-center gap-12 text-2xl max-md:hidden'>

        {
            products_categories.map((item,index)=>{
                
              return  <li key={index} ><NavLink to={`${item.label}`}>{item.value}</NavLink></li>
            })
        }
        
      </ul>

      <div>
      <NavLink to='/cart'><FaCartShopping className='text-4xl'/></NavLink> 
      </div>

    </div>
  )
}
