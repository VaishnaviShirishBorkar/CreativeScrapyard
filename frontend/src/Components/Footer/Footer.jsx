import React from 'react'
import './Footer.css'
import instagram from '../Assests/instagram.png'
import whatsapp from '../Assests/whatsapp.png'
import pinterest from '../Assests/pinterest.png'
import logo from '../Assests/logo.jpg'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt="" />
            <p>Creative Scrapyard</p>
        </div>
        <ul className="footer-links">
            <li>Arifacts</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        
      <div className="footer-social-icons">
        <div className='footer-icons-container'>
            <img src={instagram} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={pinterest} alt="" />
        </div>
     </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer