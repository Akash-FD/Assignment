import React from 'react'
import './NewCollection.css'
import new_collection from '../assets/new_collections'
import Item from '../item/Item'

export default function NewCollection() {
  return (
    <div className='new-collections'>
        <h1>NEW COLLECION</h1>
        <hr />
        <div className="collections">
         {new_collection.map((item,index)=>{
            return <Item key={index}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}/>
         })}
        </div>
      
    </div>
  )
}
