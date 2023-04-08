import React from 'react'
import "./Hero.css"
import Btn from '../../Components/Buttons/Btn'
function Hero() {
  return (
    <>
    <div className='hero-section'>
    <video autoPlay loop muted>
        <source src="/images/video-1.mp4" type="video/mp4" />
      </video>
    <h1>ADVENTURE AWAITS</h1>
    <h3>What are you waiting for?</h3>
   <Btn />

    </div>
      
     
    </>
  )
}

export default Hero
