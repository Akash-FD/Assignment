import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../App';


export default function Card(props) {

   
     
 const {cart,setCart} = useContext(cartContext);
 

    return (
        <div className='w-[260px] m-auto text-center border p-4 hover:shadow-2xl cursor-pointer'>

           <Link to={`/product/${props.id}`} ><img src={props.image} alt="" className='w-[200px] h-[150px] object-contain' /></Link> 
            <div className='flex flex-col gap-2'>
                <p className='text-center font-bold'>{props.name}</p>
                <p className='text-center'>{props.price}</p>
                <p className='text-xs text-gray-400'>{props.smallDescription}</p>
                <button className='w-full bg-blue-600 text-white p-2' onClick={()=>{
                    setCart([...cart,props]);
                    console.log(props);
                    
                }}>+Add to cart</button>
            </div>
        </div>
    )
}
