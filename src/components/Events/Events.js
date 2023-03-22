import React from 'react'
import Heading from '../heading/Heading'
import './Events.scss'
// import questionMark from '../../assets/images/question-mark.png';
import EventsData from '../../assets/Data/EventsData'
import { Link } from 'react-router-dom'

const Events = () => {

  return (
    <>
      <Heading title="EVENTS" size="5rem" ID="Events"/>
      <div className="events-section" id="Events">

        {EventsData.map((val, ind) => {
          return (
            <div key={val.id} className="event-card">
              <div className="event-card-front " style={{ backgroundImage: "url(https://elements-video-cover-images-0.imgix.net/files/80585e24-4c28-4de2-96a3-c55c4452ddff/inline_image_preview.jpg?auto=compress%2Cformat&fit=min&h=394&w=700&s=c610a4ba0680b56314f26df337997f25)" }}>
                <i className="fa-solid fa-question fa-7x event-question-mark bounce2"></i>
              </div>
              <div className="event-card-back" style={{ backgroundImage: `url(${val.imgsrc})` }}>
                <div>
                  <Link to={`/eventdetails/${val.id}`}><button className="eventCard-button">Click Here</button></Link>
                </div>
              </div>
            </div>
          )
        })}


      </div>
    </>
  )
}

export default Events