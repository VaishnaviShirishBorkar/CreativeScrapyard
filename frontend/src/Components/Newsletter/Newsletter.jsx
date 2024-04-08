import React from 'react'
import './Newsletter.css'

export const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email!</h1>
        <p>Subscibe to our Newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='Enter Your Email'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter