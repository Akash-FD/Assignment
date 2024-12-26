import React from 'react'
import { products_data } from "./../Component/data/data"
import Card from './Card'

export default function Product(props) {

  return (
    <div className='w-[80%] m-auto mt-3 bg-slate-50 p-3 flex flex-wrap gap-6 '>
      {products_data.map((item, index) => {
        if (props.category === item.category) {

          return <Card key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            smallDescription={item.smallDescription}
          />
        } else {
          return null
        }
      })}
    </div>
  )



}


