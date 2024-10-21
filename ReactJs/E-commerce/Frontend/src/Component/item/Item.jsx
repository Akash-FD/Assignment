import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

export default function Item(props) {
  return (
    <div className='item'>
      <Link to={`product/${props.id}`}>
      <img src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      
      <div className="item-prices">
        <div className="old-prices">
          ${props.new_price}
        </div>

        <div className="new-prices">
          ${props.old_price}

        </div>
      </div>
    </div>
  )
}
