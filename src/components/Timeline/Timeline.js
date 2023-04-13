import React from "react";
import "./Timeline.scss";
// import $ from "jquery";
// import "jquery-ui-dist/jquery-ui";
// import { useEffect } from "react";
// import { day1, day2 } from "../../assets/Data/Timelinedata";
// import { useState } from "react";
// import { Link } from 'react-router-dom';
import Heading from "../heading/Heading";
import ComingSoon from '../ComingSoon/ComingSoon'

const Timeline = () => {

  // let i = 1;

  // const [day, setDay] = useState(1);
  // const [dayevents, setDayEvents] = useState(day1);

  // useEffect(() => {
  //   if (day === 1) {
  //     setDayEvents(day1);
  //   }
  //   else if (day === 2) {
  //     setDayEvents(day2);
  //   }
  // }, [day])

  // useEffect(() => {
  //   (function ($) {
  //     $(() => {

  //       $(window).on("scroll", function () {
  //         fnOnScroll()
  //       });

  //       $(window).on("resize", function () {
  //         fnOnResize();
  //       });

  //       var agTimeline = $(".js-timeline"),
  //         agTimelineLine = $(".js-timeline_line"),
  //         agTimelineLineProgress = $(".js-timeline_line-progress"),
  //         agTimelinePoint = $(".js-timeline-card_point-box"),
  //         agTimelineItem = $(".js-timeline_item"),
  //         agOuterHeight = $(window).outerHeight(),
  //         agHeight = $(window).height(),
  //         f = -1,
  //         agFlag = false,
  //         agPosY, i, a, n;

  //       function fnOnScroll() {
  //         agPosY = $(window).scrollTop();

  //         fnUpdateFrame();
  //       }

  //       function fnOnResize() {
  //         agPosY = $(window).scrollTop();
  //         agHeight = $(window).height();

  //         fnUpdateFrame();
  //       }

  //       function fnUpdateWindow() {
  //         agFlag = false;

  //         agTimelineLine.css({
  //           top:
  //             agTimelineItem.first().find(agTimelinePoint).offset().top -
  //             agTimelineItem.first().offset().top,
  //           bottom:
  //             agTimeline.offset().top +
  //             agTimeline.outerHeight() -
  //             agTimelineItem.last().find(agTimelinePoint).offset().top,
  //         });

  //         return f !== agPosY && ((f = agPosY), agHeight, fnUpdateProgress());
  //       }

  //       function fnUpdateProgress() {
  //         var agTop = agTimelineItem
  //           .last()
  //           .find(agTimelinePoint)
  //           .offset().top;

  //         i = agTop + agPosY - $(window).scrollTop();
  //         a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
  //         n = agPosY - a + agOuterHeight / 2;
  //         i <= agPosY + agOuterHeight / 2 && (n = i - a);
  //         agTimelineLineProgress.css({ height: n + "px" });

  //         agTimelineItem.each(function () {
  //           var agTop = $(this).find(agTimelinePoint).offset().top;

  //           agTop + agPosY - $(window).scrollTop() < agPosY + 0.5 * agOuterHeight
  //             ? $(this).addClass("js-ag-active")
  //             : $(this).removeClass("js-ag-active");
  //         });
  //       }

  //       function fnUpdateFrame() {
  //         agFlag || requestAnimationFrame(fnUpdateWindow);
  //         agFlag = true;
  //       }
  //     });
  //   })($);
  // })

  return (
    <>
      <div className="ag-timeline-block" id="timeline">

        <Heading title="TIMELINE" size="5rem" />

        {/* <section className="ag-section">
          <div className='daywise_buttons'>
            <button className="day1_button" onClick={() => setDay(1)}>Day 1</button>
            <button className="day2_button" onClick={() => setDay(2)}>Day 2</button>
          </div>
          <div className="ag-format-container">
            <div className="js-timeline ag-timeline">
              <div className="js-timeline_line ag-timeline_line">
                <div className="js-timeline_line-progress ag-timeline_line-progress"></div>
              </div>
              <div className="ag-timeline_list">

                {dayevents.map((val, ind) => {
                  return (
                    <div key={ind} className="js-timeline_item ag-timeline_item">
                      <div className="ag-timeline-card_box">
                        <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                          <div className="ag-timeline-card_point">{i++}</div>
                        </div>
                      </div>

                      <div className="ag-timeline-card_item">

                        <div className="ag-timeline-card_inner">
                          <div className="ag-timeline-card_img-box">
                            <img src={val.photo} alt="img" />
                            <h2 className="eventTitle">{val.title}</h2>
                          </div>

                          <div className="ag-timeline-card_info">
                            {
                              val.tagline &&
                              <h6 className="card_info_tagline">{val.tagline}</h6>
                            }
                            <div className="card_info_data">
                              <i className="fa-solid fa-clock"></i>
                              <h6>{val.time}</h6>
                              {
                                val.venue &&
                                <>
                                  <i className="fa-solid fa-location-dot"></i>
                                  <h6>{val.venue}</h6>
                                </>
                              }
                            </div>
                          </div>
                        </div>


                      </div>

                    </div>
                  )
                })}

              </div>
            </div>
          </div>
        </section> */}

        <ComingSoon />

        {/* <div className="download_buttons">
          <Link
            to='/images/day1.png' target='_blank' className="reg_button" download> <h1>DOWNLOAD DAY 1 SCHEDULE</h1>
          </Link>
          <Link
            to='/images/day2.png' target='_blank' className="reg_button" download> <h1>DOWNLOAD DAY 2 SCHEDULE</h1>
          </Link>
        </div> */}

      </div>
    </>
  );
}

export default Timeline

