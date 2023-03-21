import React, { useState } from 'react'
import PageName from '../../components/PageName/PageName'
import "./EventDetails.css";
import Faq from '../../components/FAQ/faq';
import OrgTeam from '../../components/orgteam/orgteam';
import Heading from '../../components/heading/Heading';
// import Marquee from '../../components/marquee/Marquee';
import Events from '../../assets/Data/EventsData'
import {useParams} from 'react-router-dom';
import { useEffect } from 'react';



const EventDetails = () => {

  const [event,setEvent] = useState({});

  const {id} = useParams();
  
  useEffect(()=>{
    let temp = Events.find(event => parseInt(event.id) === parseInt(id));
    setEvent(temp);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className="EventsDetails">
        <PageName page_heading={event.title}/>
        <div className="Events_container">
           <div className="Event_container_left">
              <div className="Events_img">
              <img src={event.imgsrc} alt={event.title} />
              </div>
           </div>

           <div className='Event_container_right'>
               
              {/* <div className="Event_title">About the event</div> */}
            <Heading title="About the event" size="2rem" marginTop="0" marginBottom="1rem"/>
              <div className="Event_desc">{event.description}</div>
              <hr />
           <div className="detail_images">
              <div className="Event_register_details">
                <div className='Event_date'>
                   <i className="fa-regular fa-calendar-days days_icon "></i>
                  {event.date}
                </div>
                <div className='Event_location'>
                <i className="fa-solid fa-location-dot location_icon"></i>
                {event.location}
                </div>
                <div className="Event_time">
                <i className="fa-sharp fa-solid fa-clock time_icon"></i>
                {event.time}
                </div>
                <div className='Event_deadline'><b>Reg-deadline:</b><br /> {event.deadline} </div>
              </div>
            </div>
              <button className="Event_register_button">Register now</button>
            
           
           </div>
        </div>

    {/* <Marquee /> */}
    <OrgTeam team={event.OrgTeam}/>
    <Faq Faqs={event.faq}/>
    </div>
  )
}

export default EventDetails