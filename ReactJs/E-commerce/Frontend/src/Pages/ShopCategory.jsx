import React from 'react'
import './ShopCategory.css'
import { useContext } from 'react'
import { context } from '../Context/ShopContext'
import dropdown_icon from '../Component/assets/dropdown_icon.png'
import Item from '../Component/item/Item'

export default function ShopCategory(props) {
  
const products = useContext(context)

return (
  <div className='shop-category'>
    <img className='banner' src={props.banner} alt="" />
    <div className="product-box">

      <div className="indexSort">
        <p><strong>Showing 1-12</strong> out of 36 products</p>
        <div className="sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="product">
        {products.map((item, index) => {

          if (props.category === item.category) {
            return <Item key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price} />
          } else {
            return null
          }
        })}
      </div>

      <div className="load-more">
        <p>Explore More</p>
      </div>
    </div>
  </div>
)
}







