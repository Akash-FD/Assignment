import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import ProductDetails from '../Component/ProductDetails/ProductDetails'


export default function Product() {
   const all_product = useContext()
  
   const productId = useParams()
   const product = all_product.find((e)=>e.id === Number(productId))

   
  return (
    <div>
    <ProductDetails/>
      
    </div>
  )
}
