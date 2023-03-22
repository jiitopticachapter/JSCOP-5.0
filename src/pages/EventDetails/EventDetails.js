import React, { useState } from "react";
import PageName from "../../components/PageName/PageName";
import "./EventDetails.css";
import "./orgteam.scss";
import "./faq.scss";
import Heading from "../../components/heading/Heading";
// import Marquee from '../../components/marquee/Marquee';
import Events from "../../assets/Data/EventsData";
import FAQ from './faqtoggle'
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const EventDetails = () => {
  const [events, setEvent] = useState({});
  const [orgteam,setOrgteam] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const { id } = useParams();
 
  useEffect(() => {
    let temp = Events.find((event) => parseInt(event.id) === parseInt(id));
    setEvent(temp);
    setOrgteam(temp.OrgTeam);
    setFaqs(temp.faq);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };


  return (
    <div className="EventsDetails">
      <PageName page_heading={events.title} />
      <div className="Events_container">
        <div className="Event_container_left">
          <div className="Events_img">
            <img src={events.imgsrc} alt={events.title} />
          </div>
        </div>

        <div className="Event_container_right">
          {/* <div className="Event_title">About the event</div> */}
          <Heading
            title="About the event"
            size="2rem"
            marginTop="0"
            marginBottom="1rem"
          />
          <div className="Event_desc">{events.description}</div>
          <hr />
          <div className="detail_images">
            <div className="Event_register_details">
              <div className="Event_date">
                <i className="fa-regular fa-calendar-days days_icon "></i>
                {events.date}
              </div>
              <div className="Event_location">
                <i className="fa-solid fa-location-dot location_icon"></i>
                {events.location}
              </div>
              <div className="Event_time">
                <i className="fa-sharp fa-solid fa-clock time_icon"></i>
                {events.time}
              </div>
              <div className="Event_deadline">
                <b>Reg-deadline:</b>
                <br /> {events.deadline}{" "}
              </div>
            </div>
          </div>
          <button className="Event_register_button">Register now</button>
        </div>
      </div>

      {/* <Marquee /> */}
      {/* <OrgTeam team={event.OrgTeam}/> */}
      <Heading title="Organising Team" size="5rem" />
      <div className="orgteam-section">
        {/* <h1 className='orgteam-title'>Organising Team</h1> */}
        <div className="orgteam-container">
          <div className="orgteam-grid-row">

            {orgteam.map((val,ind)=>{
              return (
                <figure key={ind} className="orgteam-frame">
                  <figcaption data-tooltip={val.name} data-side="bottom" tabIndex="0"><img alt="" src={val.imgsrc} /></figcaption>
                </figure>
              )
            })}

          </div>
        </div>
      </div>

      {/* <Faq Faqs={events.faq} /> */}
      <Heading title="FAQS" size="5rem"/>
      <div className="FAQS">
        {/* <Header /> */}
        
        <div className="faqs">
        {/* <h1 className='faq_heading'>FAQs</h1> */}
          {faqs.map((faq, index) => (
            <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
