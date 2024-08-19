import React from "react";
import Heading from "../heading/Heading";
import "./Events.scss";
// import questionMark from '../../assets/images/question-mark.png';
import EventsData from "../../assets/Data/EventsData";
import { Link } from "react-router-dom";
import eventpic1 from "./eventpic1.jpeg";
import eventpic2 from "./eventpic2.jpg";
import eventpic3 from "./eventpic3.jpeg";
import eventpic4 from "./eventpic4.jpg";
import eventpic5 from "./eventpic5.jpeg";

const eventpics = [eventpic1, eventpic2, eventpic3, eventpic4, eventpic5];

const Events = () => {
  return (
    <>
      <div className="events-section" id="Events">
        <div className="fadein-div">
          <Heading title="EVENTS" size="5rem" ID="Events" />

          {/* {EventsData.map((val, ind) => {
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
            })} */}

          <div className="card-container">
            {EventsData.map((val, ind) => {
              return (
                <div
                  key={ind}
                  className="card"
                  style={{ backgroundImage: `url(${eventpics[ind]})` }}
                >
                  <div className="card-content">
                    <h2 className="card-title">{val.title}</h2>
                    {/* <p className="card-text">Join the build Make the bridge and win exciting prizes that you never won before</p> */}
                    <Link
                      to={`/eventdetails/${val.id}`}
                      className="card-bttn"
                      style={{
                        display: `${
                          val.title === "COMING SOON" ? "none" : "block"
                        }`,
                      }}
                    >
                      DETAILS
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export { eventpics };
export default Events;
