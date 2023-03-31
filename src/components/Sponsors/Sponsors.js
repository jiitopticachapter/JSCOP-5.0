import React from 'react'
import Heading from '../heading/Heading'
import './Sponsors.scss'
import Solana from '../../assets/images/solana-logo-1.png'
import polygon from '../../assets/images/polygon-logo.png'

const Sponsors = () => {
  return (
    <>
      <Heading title="Sponsors" size="5rem"/>
        <div className="Sponsors_slider">
        <div className="Sponsors_slide-track">
        <div className="Sponsors_slide">
            {/* <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/replit_logo_icon_168861.png" height="100" width="250" alt="REPLIT LOGO" /> */}
        </div>
        <div className="Sponsors_slide">
            <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/replit_logo_icon_168861.png" height="100" width="250" alt="REPLIT LOGO" />
          </div>
          <div className="Sponsors_slide">
            <img src="https://www.pngall.com/wp-content/uploads/10/Filecoin-Crypto-Logo-PNG-File.png" width="250" alt="FILECOIN LOGO" />
          </div>
          <div className="Sponsors_slide">
          <img src="https://jithack.tech/images/logo/Devfolio_Logo-White@2x.png" width="250" alt="DEVFOLIO LOGO" />
          </div>
          <div className="Sponsors_slide">
            <img src={Solana} height="100" width="250" alt="SOLANA LOGO" />
          </div>
          <div className="Sponsors_slide">
            <img src={polygon} height="100" width="250" alt="POLYGON LOGO" />
          </div>
          
          
        </div>
      </div>
    </>
  )
}

export default Sponsors