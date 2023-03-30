
import React from "react";
import "./Timeline.scss";
// import ReactDOM from "react-dom";
// import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
// import { useEffect } from "react";
import Heading from "../heading/Heading";
// import {day1,day2} from "../../assets/Data/Timelinedata";
// import { useState } from "react";
import ComingSoon from "../ComingSoon/ComingSoon";






const Timeline = () => {

//    let i=1;

//   const [day,setDay]=useState(1);

// const [dayevents,setDayEvents]=useState(day1);

// useEffect(() => {
//   if(day===1){
//      setDayEvents(day1);
//   }
//   else if(day===2){
//      setDayEvents(day2);
//   }
// }, [day])

//   useEffect(() => {
//     (function ($) {
//       $(function () {
//         $(window).on("scroll", function () {
//           fnOnScroll();
//         });

//         $(window).on("resize", function () {
//           fnOnResize();
//         });

//         var agTimeline = $(".js-timeline"),
//           agTimelineLine = $(".js-timeline_line"),
//           agTimelineLineProgress = $(".js-timeline_line-progress"),
//           agTimelinePoint = $(".js-timeline-card_point-box"),
//           agTimelineItem = $(".js-timeline_item"),
//           agOuterHeight = $(window).outerHeight(),
//           agHeight = $(window).height(),
//           f = -1,
//           agFlag = false,
//           agPosY,i,a,n;

//         function fnOnScroll() {
//           agPosY = $(window).scrollTop();

//           fnUpdateFrame();
//         }

//         function fnOnResize() {
//           agPosY = $(window).scrollTop();
//           agHeight = $(window).height();

//           fnUpdateFrame();
//         }

//         function fnUpdateWindow() {
//           agFlag = false;

//           agTimelineLine.css({
//             top:
//               agTimelineItem.first().find(agTimelinePoint).offset().top -
//               agTimelineItem.first().offset().top,
//             bottom:
//               agTimeline.offset().top +
//               agTimeline.outerHeight() -
//               agTimelineItem.last().find(agTimelinePoint).offset().top,
//           });

//        return   f !== agPosY && ((f = agPosY), agHeight, fnUpdateProgress());
//         }

//         function fnUpdateProgress() {
//           var agTop = agTimelineItem
//             .last()
//             .find(agTimelinePoint)
//             .offset().top;

//           i = agTop + agPosY - $(window).scrollTop();
//           a =
//             agTimelineLineProgress.offset().top +
//             agPosY -
//             $(window).scrollTop();
//           n = agPosY - a + agOuterHeight / 2;
//           i <= agPosY + agOuterHeight / 2 && (n = i - a);
//           agTimelineLineProgress.css({ height: n + "px" });

//           agTimelineItem.each(function () {
//             var agTop = $(this).find(agTimelinePoint).offset().top;

//             agTop + agPosY - $(window).scrollTop() <
//             agPosY + 0.5 * agOuterHeight
//               ? $(this).addClass("js-ag-active")
//               : $(this).removeClass("js-ag-active");
//           });
//         }

//         function fnUpdateFrame() {
//           agFlag || requestAnimationFrame(fnUpdateWindow);
//           agFlag = true;
//         }
//       });
//     })($);
//   })
  return (
    <>
      <div className="ag-timeline-block" id="timeline">
        <Heading title="TIMELINE" size="5rem"/>
        <ComingSoon />
        {/* <section className="ag-section">
        <div className='daywise_buttons'>
          <button className="day1_button" onClick={()=>setDay(1)}>Day 1</button>
          <button className="day2_button" onClick={()=>setDay(2)}>Day 2</button>
        </div>
          <div className="ag-format-container">
            <div className="js-timeline ag-timeline">
              <div className="js-timeline_line ag-timeline_line">
                <div className="js-timeline_line-progress ag-timeline_line-progress"></div>
              </div>
              <div className="ag-timeline_list">

              {dayevents.map((val,ind)=>{
                return(
                  <div key={ind} className="js-timeline_item ag-timeline_item">
                  <div className="ag-timeline-card_box">
                    <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                      <div className="ag-timeline-card_point">{i++}</div>
                    </div>
                    <div className="ag-timeline-card_meta-box">
                    </div>
                  </div>
                  <div className="ag-timeline-card_item">
                    <div className="ag-timeline-card_inner">
                      <div className="ag-timeline-card_img-box">
                        <h2 className="eventTitle">{val.title}</h2>
                      </div>
                      <div className="ag-timeline-card_info">

                        <div className="ag-timeline-card_desc"> 
                           <h6>{val.time}</h6>
                          <h6>{val.venue}</h6>
                          <h6>{val.tagline}</h6>
                        </div>

                      </div>
                    </div>
                    <div className="ag-timeline-card_arrow"></div>
                  </div>
                </div>
                )
              })}
                
             
             
             
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
}

export default Timeline

