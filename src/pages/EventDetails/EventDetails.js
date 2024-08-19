import React, { useState } from "react";
import PageName from "../../components/PageName/PageName";
import "./EventDetails.css";
import "./orgteam.scss";
import "./faq.scss";
import Heading from "../../components/heading/Heading";
// import Marquee from '../../components/marquee/Marquee';
import Events from "../../assets/Data/EventsData";
import FAQ from "./faqtoggle";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import HackathonThemes from "./HackathonThemes";
import { eventpics } from "../../components/Events/Events";

const EventDetails = () => {
  const [events, setEvent] = useState({});
  const [orgteam, setOrgteam] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    let temp = Events.find((event) => parseInt(event.id) === parseInt(id));
    setEvent(temp);
    setOrgteam(temp.OrgTeam);
    setFaqs(temp.faq);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
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
      <PageName page_heading={events.title} visible="block" />
      <div className="Events_container">
        <div className="Event_container_left">
          <div className="Events_img">
            <img
              src={
                id === 3
                  ? eventpics[id - 2]
                  : id === 2
                  ? eventpics[id]
                  : eventpics[id - 1]
              }
              alt={events.title}
            />
          </div>
          <div className="events-rules">
            <a
              className="events-rules-anchor"
              href={events.rules}
              target="_blank"
              rel="noreferrer"
              id="myBtn"
              style={{ pointerEvents: "auto" }}
            >
              <svg
                style={{ marginRight: "2px" }}
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 16H12V14H4V16ZM4 12H12V10H4V12ZM2 20C1.45 20 0.979333 19.8043 0.588 19.413C0.196 19.021 0 18.55 0 18V2C0 1.45 0.196 0.979 0.588 0.587C0.979333 0.195667 1.45 0 2 0H10L16 6V18C16 18.55 15.8043 19.021 15.413 19.413C15.021 19.8043 14.55 20 14 20H2ZM9 7V2H2V18H14V7H9Z"
                  fill="black"
                ></path>
              </svg>
              <span id="comp-rules">RULES</span>
            </a>
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

          {events.title === "CODE OF DUTY" && (
            <div className="join_dis">
              <a
                className="join_dis_anchor"
                rel="noreferrer"
                target="_blank"
                href="https://dsc.gg/jscop"
              >
                <button className="join_disco" fdprocessedid="0c5l1">
                  <i className="fab fa-2x fa-discord" aria-hidden="true"></i>
                  JOIN OUR DISCORD
                </button>
              </a>
            </div>
          )}

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
          {events.title === "CODE OF DUTY" && (
            <div
              className="apply-button"
              data-hackathon-slug="codeofduty"
              data-button-theme="light"
              style={{ height: "44px", width: "100%", marginTop: "2rem" }}
            ></div>
          )}
          {events.title !== "CODE OF DUTY" && (
            <a
              className="Event_register_button_anchor"
              href={events.register_link}
              target="_blank"
              rel="noreferrer"
            >
              <button className="Event_register_button">Register now</button>
            </a>
          )}
        </div>
      </div>

      {events.title === "CODE OF DUTY" && <HackathonThemes />}

      {/* <Marquee /> */}
      {/* <OrgTeam team={event.OrgTeam}/> */}
      <Heading title="Organising Team" size="5rem" />
      <div className="orgteam-section">
        {/* <h1 className='orgteam-title'>Organising Team</h1> */}
        <div className="orgteam-container">
          <div className="orgteam-grid-row">
            {orgteam.map((val, ind) => {
              return (
                <figure key={ind} className="orgteam-frame">
                  <figcaption
                    data-tooltip={val.name}
                    data-side="bottom"
                    tabIndex="0"
                  >
                    <img alt="" src={val.imgsrc} />
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </div>

      {/* <Faq Faqs={events.faq} /> */}
      <Heading title="FAQS" size="5rem" />
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
