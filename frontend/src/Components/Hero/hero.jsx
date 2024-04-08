import React from 'react'
import './hero.css'
import homepageimg from '../Assests/home_page_img.png'

export const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <div>
        <p>Discover</p>
        <p>Sustainable Creations</p>
        <p>at</p>
        <p>Creative Scrapyard</p>
      </div>

      <div className="hero-latest-btn">
          <div>Latest Collections</div>
           <i class="fa fa-camera fa-stack-1x"></i>
          <img src="" alt="" />
        </div>
      </div>

      <div className="hero-right">
        <img src={homepageimg} alt="" />
      </div>

    </div>
  )
}

export default Hero