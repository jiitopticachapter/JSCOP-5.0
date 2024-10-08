import React from 'react'
import './Heading.scss'
// import clip from './vid-bg2.mp4';
// import Poster from './bg5.jpg';

const Heading = (props) => {
  return (
    // <div className="heading_main">
    //   <video autoPlay loop muted >
    //     <source src={clip} type='video/mp4' />
    //     <source src={clip} type="video/ogg" />
    //   </video>
    //   <h1 className="heading_main_title">{props.title}</h1>
    // </div>
    <div className="heading-section" style={{marginTop:`${props.marginTop}`,marginBottom:`${props.marginBottom}`,fontFamily:`${props.fontFamily}`}} id={props.ID}>
      <h3 className="animate-charcter" style={{fontSize:`${props.size}`,}}> {props.title}</h3>
    </div>
  )
}

export default Heading