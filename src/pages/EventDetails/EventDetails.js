import React from 'react'
import PageName from '../../components/PageName/PageName'
import "./EventDetails.css";
import Faq from '../../components/FAQ/faq';
import OrgTeam from '../../components/orgteam/orgteam';
import Heading from '../../components/heading/Heading';
// import Marquee from '../../components/marquee/Marquee';
const EventDetails = () => {
  return (
    <div className="EventsDetails">
        <PageName page_heading="EVENTS"/>
        <div className="Events_container">
           <div className="Event_container_left">
              <div className="Events_img">
              <img src="https://tryst-bucket.s3.amazonaws.com/events/posters/CEF___3.webp" alt="" />
              </div>
           </div>

           <div className='Event_container_right'>
               
              {/* <div className="Event_title">About the event</div> */}
            <Heading title="About the event" size="2rem" marginTop="0" marginBottom="1rem"/>
              <div className="Event_desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic perspiciatis nisi vero inventore. Totam deserunt repellendus eius neque a fuga officia. Maiores facere incidunt reprehenderit dolore, ipsum magnam quos, aliquam eligendi tenetur laborum laboriosam atque. Similique laborum neque maiores reprehenderit eum, libero a at dolorem dolor deleniti, rem totam veritatis ipsam illo ut voluptatibus earum nam omnis incidunt consequuntur obcaecati. Facilis mollitia autem magnam quia, nesciunt iste obcaecati vel, hic tempora excepturi soluta ipsa eaque? Possimus, a modi. Deserunt facilis harum enim totam, numquam quam nihil odio eligendi facere nisi nesciunt molestiae quo debitis, qui necessitatibus quisquam tempora quidem praesentium.</div>
              <hr />
           <div className="detail_images">
              <div className="Event_register_details">
                <div className='Event_date'>
                   <i className="fa-regular fa-calendar-days days_icon "></i>
                  6th March 2023
                </div>
                <div className='Event_location'>
                <i className="fa-solid fa-location-dot location_icon"></i>
                LT-4
                </div>
                <div className="Event_time">
                <i className="fa-sharp fa-solid fa-clock time_icon"></i>
                12:00 pm
                </div>
                <div className='Event_deadline'><b>Reg-deadline:</b><br /> 1-March-2023,11:59 pm </div>
              </div>
            </div>
              <button className="Event_register_button">Register now</button>
            
           
           </div>
        </div>

    {/* <Marquee /> */}
    <OrgTeam />

   <Faq />
    </div>
  )
}

export default EventDetails