import React from 'react'
import Heading from '../../components/heading/Heading';
// import ComingSoon from '../ComingSoon/ComingSoon';
import './Speaker.scss';
import img1 from '../../assets/images/Speakers-GK.jpg'
import img2 from '../../assets/images/Speakers-CG.jpg'
import img3 from '../../assets/images/Speakers-SB.jpg'
import img4 from '../../assets/images/Speakers-RD.jpg'

const Speakers = () => {
  return (
    <>
      <Heading title="Speakers" size="5rem" />
      {/* <ComingSoon /> */}
      <section className="speaker-hero-section">
        <div className="speaker-card-grid">

          <div className="speaker-card-container">
            <div className="speaker-card">
              <a href="#/"> </a>
              <img className="speaker-card-img" src={img2} alt='' />
              <div className="speaker-card-overlay">
                <div className="speaker-card-title">
                  <h3>Prof. C M Chandrashekar</h3>
                  <p>IISc Banglore</p>
                </div>
                <div className="speaker-card__content">
                  <p>"Primary aim of quantum artificial intelligence is to improve human freedom, dignity, equality, security, and total well-being."<br />
                    Prof. C M Chandrashekhar is here to resolve all your queries and make the topic interesting for everyone.
                    Enriched with his expertise in the topics of Quantam algorithms and Open quantam system, the session will definitely be informative.<br />
                    See you there!!<br />
                    Date - 15th April<br />
                    Time - 10:30 AM<br />
                    Venue - LT-4<br />
                  </p>
                </div>
              </div>
            </div>
            <div className="speaker-card">
              <a href="#/"> </a>
              <img className="speaker-card-img" src={img1} alt='' />
              <div className="speaker-card-overlay">
                <div className="speaker-card-title">
                  <h3>Dr. Gagan Kumar</h3>
                  <p>IIT Guwahati</p>
                </div>
                <div className="speaker-card__content">
                  <p>We are more than delighted to announce that Dr Gagan Kumar will be joining us as our guest speaker at JSCOP 5.0<br />
                    Enhance your knowledge on the topics of microfabrication and  nanotechnology as you attend the enriching session with the expert in this field, Dr Gagan Kumar, Associate Professor ai IIT Guwahati.<br />
                    Date - 16th April<br />
                    Time - 10:00 AM<br />
                    Venue - LT-4<br />
                    See you there!!</p>
                </div>
              </div>
            </div>
            <div className="speaker-card">
              <a href="#/"> </a>
              <img className="speaker-card-img" src={img3} alt='' />
              <div className="speaker-card-overlay">
                <div className="speaker-card-title">
                  <h3>Dr. Somak Bhattacharyya</h3>
                  <p>IIT BHU</p>
                </div>
                <div className="speaker-card__content">
                  <p>Somak Bhattacharyya has received Honours in Physics from Scottish Church College, Kolkata in 2003. Next to it, he has received both Bachelor of Technology and Master of Technology from Institute of Radiophysics and Electronics in University of Calcutta in 2006 and 2008 respectively.<br />
                  </p>
                </div>
              </div>
            </div>
            <div className="speaker-card">
              <a href="#/"> </a>
              <img className="speaker-card-img" src={img4} alt='' />
              <div className="speaker-card-overlay">
                <div className="speaker-card-title">
                  <h3>Dr. Ritwick Das</h3>
                  <p>IIT Delhi</p>
                </div>
                <div className="speaker-card__content">
                  <p>Music is the arithmetic of sounds as optics is the geometry of light<br />
                    Have you ever wondered about the magnificence of optics and photonics??<br />
                    We are glad to have Dr. Ritwick Das associated with IIT Delhi, an expert in the field of Fiber optics, lasers and nonlinear optics, in whose sessions one gets to dive deep into the world of optics and related science.<br />
                    Date - 15th April<br />
                    Time - 11:35<br />
                    Venue - LT-4<br />
                    See you there!!</p>

                </div>
              </div>
            </div>

          </div>


        </div>
      </section>
    </>
  )
}

export default Speakers;