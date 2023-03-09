import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./LandingPage.scss"

const LandingPage = () => {
  return (
    <div className="landing">
      <Navbar />

      <div className="landing_content">
        <div className="landing_heading">JSCOP <span>5.0</span></div>
        <div className="landing_subhead">JIIT Student Conference on Optics and Photonics</div>
      </div>
    </div>
  )
}

export default LandingPage