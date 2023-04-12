import { React, useRef } from 'react'
import "./Hero.scss"
import clip from './vid-bg1.mp4';
import Poster from './bg5.jpg';
import Countdown from '../Clock/Countdown';
import { Link } from 'react-router-dom'
// import Hackathon from '../Hackathon/Hackathon';

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
        onCanPlay={() => setPlayBack()}
      >
        <source src={clip} type='video/mp4' />
        <source src={clip} type="video/ogg" />
      </video>
      <h1>JSCOP <span>5.0</span></h1>
      <p>JIIT Student conference for optics and photonics</p>

      <Link
        // to='https://forms.gle/7ML4ouW38yro8scz9' target='_blank' className="reg_button"> <h1>REGISTER NOW </h1>
        to='register' className="reg_button"> <h1>REGISTER NOW </h1>
      </Link>
      
      <Countdown />
      

    </div>
  )
}

export default Hero