import React from 'react'
import './Hero.css'
import hero_image from '../assets/hero_image.png'

export default function Hero() {
  return (

    <div className="main-hero">

      <div className='hero'>
        <div className="hero-left">
          <h2>NEW ARRIVELS ONLY</h2>
          <p>NEW </p>
          <p>COLLECTION</p>
          <p>FOR EVRYONE</p>
          <button>Lattest Collection</button>
        </div>
        <div className="hero-right">
          <div className="hero-img">

            <img src={hero_image} alt="" />

          </div>

        </div>

      </div>
    </div>
  )
}
