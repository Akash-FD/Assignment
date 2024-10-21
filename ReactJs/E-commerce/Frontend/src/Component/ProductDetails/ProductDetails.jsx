import React from 'react'

export default function ProductDetails(props) {
  return (
    <div className='productdisplay'>
        <div className="left">
            <img src={props.image} alt="" />
            <img src={props.image} alt="" />
            <img src={props.image} alt="" />
            <img src={props.image} alt="" />
            
            
        </div>
        <div className="right">
            <img src="" alt="" />
        </div>
        <div className="details">
            <h1></h1>
            <span></span>
        </div>
      
    </div>
  )
}
