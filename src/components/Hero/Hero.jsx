import React from 'react'
import "./Hero.scss"
import clip from './vid-bg1.mp4';
import Poster from './bg5.jpg';

const Hero = () => {
  return (
    <div className="hero-container">
      {/* <video src="/assets/videos/vid-bg2.mp4" autoPlay loop muted /> */}


      <video autoPlay loop muted poster={Poster}>
        <source src={clip} type='video/mp4' />
        <source src={clip} type="video/ogg" />
      </video>
    
        <h1>JSCOP <span>5.0</span></h1>
        <p>JIIT Student conference for optics and photonics</p>
     
    </div>
  )
}

export default Hero