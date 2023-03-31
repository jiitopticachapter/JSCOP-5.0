import { React, useRef } from 'react'
import "./Hero.scss"
import clip from './vid-bg1.mp4';
import Poster from './bg5.jpg';
// import Countdown from '../Clock/Countdown';
import Hackathon from '../Hackathon/Hackathon';

const Hero = () => {
  const videoRef = useRef();
  const setPlayBack = () => {
    videoRef.current.playbackRate = 0.6;
  }
  return (
    <div className="hero-container">
      {/* <video src="/assets/videos/vid-bg2.mp4" autoPlay loop muted /> */}


      <video autoPlay loop muted poster={Poster}
        ref={videoRef}
        onCanPlay={() => setPlayBack()}>
        <source src={clip} type='video/mp4' />
        <source src={clip} type="video/ogg" />
      </video>
      <h1>JSCOP <span>5.0</span></h1>
      <p>JIIT Student conference for optics and photonics</p>
      {/* <Countdown /> */}
      <Hackathon />
    </div>
  )
}

export default Hero