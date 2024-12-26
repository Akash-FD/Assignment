import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { products_data } from '../Component/data/data'
import Card from './Card'
import { cartContext } from '../App'


export default function ProductDetails() {

  const { id } = useParams()
  console.log(id)

  const productDetails = products_data.find((e) => e.id === Number(id))

   const {cart,setCart} = useContext(cartContext);


  return (
    <div className='main-productDetails'>

      <div className='w-[80%] flex justify-around bg-slate-50 m-auto border p-4 hover:shadow-2xl cursor-pointer mt-4 py-20'>

        <img src={productDetails.image} alt="" className='w-[400px] h-[300px] object-contain max-md:w-[300px]' />
        <div className='flex flex-col gap-10'>
          <p className='text-start font-bold text-2xl'>{productDetails.name}</p>
          <p className='text-start text-2xl'>${productDetails.price}</p>
          <p className='text-lg text-gray-400'>{productDetails.smallDescription}</p>
          <button className='w-full bg-blue-600 text-white p-2'  onClick={()=>{setCart([...cart,productDetails])}}>+Add to cart</button>
        </div>
      </div>
      <div className='w-[80%] m-auto mt-3 bg-slate-50 p-3 flex flex-wrap items-center gap-6 '>
      {products_data.map((item) => {
          if (item.category === productDetails.category) {
            return <Card
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                smallDescription={item.smallDescription} />
           
          }else{
            return null
          }

        })
      }
      </div>

    </div>

  )
}




