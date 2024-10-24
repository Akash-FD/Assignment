import React from 'react'
import './Footer.css'
import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import pintester_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'
export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer-logo">
          <img src={footer_logo} alt="" />
          <span>SHOPPER</span>
        </div>
        <ul>
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="insta-logo">
            <img src={instagram_icon} alt="" />
            <img src={pintester_icon} alt="" />
            <img src={whatsapp_icon} alt="" />
        </div>
        <hr />
      <p>Copyright@2023-All Right Reserved</p>
    </div>
      
  )
}
