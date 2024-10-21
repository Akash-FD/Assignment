import React, { createContext } from 'react'
import all_product from '../Component/assets/all_product'

export const context = createContext(null)

export default function ShopContext(props) {
  
  return (
    <div>
      <context.Provider value={all_product}>
        {props.children}
      </context.Provider>
      
    </div>
  )
}



  
