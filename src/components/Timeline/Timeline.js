
import React from "react";
import "./Timeline.scss";
// import ReactDOM from "react-dom";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import { useEffect } from "react";

const Timeline = () => {
  useEffect(() => {
    (function ($) {
      $(function () {
        $(window).on("scroll", function () {
          fnOnScroll();
        });

        $(window).on("resize", function () {
          fnOnResize();
        });

        var agTimeline = $(".js-timeline"),
          agTimelineLine = $(".js-timeline_line"),
          agTimelineLineProgress = $(".js-timeline_line-progress"),
          agTimelinePoint = $(".js-timeline-card_point-box"),
          agTimelineItem = $(".js-timeline_item"),
          agOuterHeight = $(window).outerHeight(),
          agHeight = $(window).height(),
          f = -1,
          agFlag = false,
          agPosY,i,a,n;

        function fnOnScroll() {
          agPosY = $(window).scrollTop();

          fnUpdateFrame();
        }

        function fnOnResize() {
          agPosY = $(window).scrollTop();
          agHeight = $(window).height();

          fnUpdateFrame();
        }

        function fnUpdateWindow() {
          agFlag = false;

          agTimelineLine.css({
            top:
              agTimelineItem.first().find(agTimelinePoint).offset().top -
              agTimelineItem.first().offset().top,
            bottom:
              agTimeline.offset().top +
              agTimeline.outerHeight() -
              agTimelineItem.last().find(agTimelinePoint).offset().top,
          });

       return   f !== agPosY && ((f = agPosY), agHeight, fnUpdateProgress());
        }

        function fnUpdateProgress() {
          var agTop = agTimelineItem
            .last()
            .find(agTimelinePoint)
            .offset().top;

          i = agTop + agPosY - $(window).scrollTop();
          a =
            agTimelineLineProgress.offset().top +
            agPosY -
            $(window).scrollTop();
          n = agPosY - a + agOuterHeight / 2;
          i <= agPosY + agOuterHeight / 2 && (n = i - a);
          agTimelineLineProgress.css({ height: n + "px" });

          agTimelineItem.each(function () {
            var agTop = $(this).find(agTimelinePoint).offset().top;

            agTop + agPosY - $(window).scrollTop() <
            agPosY + 0.5 * agOuterHeight
              ? $(this).addClass("js-ag-active")
              : $(this).removeClass("js-ag-active");
          });
        }

        function fnUpdateFrame() {
          agFlag || requestAnimationFrame(fnUpdateWindow);
          agFlag = true;
        }
      });
    })($);
  })
  return (
    <>
      <div className="ag-timeline-block" id="timeline">
        {/* <div className="ag-timeline_title-box">
          <div className="ag-timeline_tagline">Timeline</div>
          <div className="ag-timeline_title">No Flex</div>
        </div> */}
        <section className="ag-section">
          <div className="ag-format-container">
            <div className="js-timeline ag-timeline">
              <div className="js-timeline_line ag-timeline_line">
                <div className="js-timeline_line-progress ag-timeline_line-progress"></div>
              </div>
              <div className="ag-timeline_list">
                <div className="js-timeline_item ag-timeline_item">
                  <div className="ag-timeline-card_box">
                    <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                      <div className="ag-timeline-card_point">2021</div>
                    </div>
                    <div className="ag-timeline-card_meta-box">
                      <div className="ag-timeline-card_meta">Season 13</div>
                    </div>
                  </div>
                  <div className="ag-timeline-card_item">
                    <div className="ag-timeline-card_inner">
                      <div className="ag-timeline-card_img-box">
                        <img
                          src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-13.png"
                          className="ag-timeline-card_img"
                          width="140"
                          height="140"
                          alt=""
                        />
                      </div>
                      <div className="ag-timeline-card_info">
                        <div className="ag-timeline-card_title">Season 13</div>
                        <div className="ag-timeline-card_desc">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Aenean
                          massa. Cum sociis natoque penatibus et magnis dis
                          parturient montes, nascetur ridiculus mus. Donec
                          quam felis, ultricies nec, pellentesque eu, pretium
                          quis, sem. Nulla consequat massa quis enim. Donec
                          pede justo, fringilla vel, aliquet nec, vulputate
                          eget, arcu.
                        </div>
                      </div>
                    </div>
                    <div className="ag-timeline-card_arrow"></div>
                  </div>
                </div>

                <div className="js-timeline_item ag-timeline_item">
                  <div className="ag-timeline-card_box">
                    <div className="ag-timeline-card_meta-box">
                      <div className="ag-timeline-card_meta">Season 12</div>
                    </div>
                    <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                      <div className="ag-timeline-card_point">2020</div>
                    </div>
                  </div>
                  <div className="ag-timeline-card_item">
                    <div className="ag-timeline-card_inner">
                      <div className="ag-timeline-card_img-box">
                        <img
                          src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-12.png"
                          className="ag-timeline-card_img"
                          width="640"
                          height="360"
                          alt=""
                        />
                      </div>
                      <div className="ag-timeline-card_info">
                        <div className="ag-timeline-card_title">Season 12</div>
                        <div className="ag-timeline-card_desc">
                          Donec pede justo, fringilla vel, aliquet nec,
                          vulputate eget, arcu. In enim justo, rhoncus ut,
                          imperdiet a, venenatis vitae, justo. Nullam dictum
                          felis eu pede mollis pretium. Integer tincidunt.
                          Cras dapibus. Vivamus elementum semper nisi. Aenean
                          vulputate eleifend tellus. Aenean leo ligula,
                          porttitor eu, consequat vitae, eleifend ac, enim.
                          Aliquam lorem ante, dapibus in, viverra quis,
                          feugiat a, tellus. Phasellus viverra nulla ut metus
                          varius laoreet. Quisque rutrum. Aenean imperdiet.
                        </div>
                      </div>
                    </div>
                    <div className="ag-timeline-card_arrow"></div>
                  </div>
                </div>

                <div className="js-timeline_item ag-timeline_item">
                  <div className="ag-timeline-card_box">
                    <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                      <div className="ag-timeline-card_point">2020</div>
                    </div>
                    <div className="ag-timeline-card_meta-box">
                      <div className="ag-timeline-card_meta">Season 11</div>
                    </div>
                  </div>
                  <div className="ag-timeline-card_item">
                    <div className="ag-timeline-card_inner">
                      <div className="ag-timeline-card_img-box">
                        <img
                          src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-11.png"
                          className="ag-timeline-card_img"
                          width="640"
                          height="360"
                          alt=""
                        />
                      </div>
                      <div className="ag-timeline-card_info">
                        <div className="ag-timeline-card_title">Season 11</div>
                        <div className="ag-timeline-card_desc">
                          Aenean imperdiet. Etiam ultricies nisi vel augue.
                          Curabitur ullamcorper ultricies nisi. Nam eget dui.
                          Etiam rhoncus. Maecenas tempus, tellus eget
                          condimentum rhoncus, sem quam semper libero, sit
                          amet adipiscing sem neque sed ipsum. Nam quam nunc,
                          blandit vel, luctus pulvinar, hendrerit id, lorem.
                          Maecenas nec odio et ante tincidunt tempus. Donec
                          vitae sapien ut libero venenatis faucibus. Nullam
                          quis ante. Etiam sit amet orci eget eros faucibus
                          tincidunt. Duis leo. Sed fringilla mauris sit amet
                          nibh.
                        </div>
                      </div>
                    </div>
                    <div className="ag-timeline-card_arrow"></div>
                  </div>
                </div>

                <div className="js-timeline_item ag-timeline_item">
                  <div className="ag-timeline-card_box">
                    <div className="ag-timeline-card_meta-box">
                      <div className="ag-timeline-card_meta">Season 10</div>
                    </div>
                    <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                      <div className="ag-timeline-card_point">2019</div>
                    </div>
                  </div>
                  <div className="ag-timeline-card_item">
                    <div className="ag-timeline-card_inner">
                      <div className="ag-timeline-card_img-box">
                        <img
                          src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-10.png"
                          className="ag-timeline-card_img"
                          width="640"
                          height="360"
                          alt=""
                        />
                      </div>
                      <div className="ag-timeline-card_info">
                        <div className="ag-timeline-card_title">Season 10</div>
                        <div className="ag-timeline-card_desc">
                          Cum sociis natoque penatibus et magnis dis
                          parturient montes, nascetur ridiculus mus. Donec
                          quam felis, ultricies nec, pellentesque eu, pretium
                          quis, sem. Nulla consequat massa quis enim. Donec
                          pede justo, fringilla vel, aliquet nec, vulputate
                          eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                          venenatis vitae, justo. Nullam dictum felis eu pede
                          mollis pretium. Integer tincidunt. Cras dapibus.
                          Vivamus elementum semper nisi.
                        </div>
                      </div>
                    </div>
                    <div className="ag-timeline-card_arrow"></div>
                  </div>
                </div>

                <div className="js-timeline_item ag-timeline_item">
                  <div className="ag-timeline-card_box">
                    <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                      <div className="ag-timeline-card_point">2019</div>
                    </div>
                    <div className="ag-timeline-card_meta-box">
                      <div className="ag-timeline-card_meta">Season 9</div>
                    </div>
                  </div>
                  <div className="ag-timeline-card_item">
                    <div className="ag-timeline-card_inner">
                      <div className="ag-timeline-card_img-box">
                        <img
                          src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-9.png"
                          className="ag-timeline-card_img"
                          width="500"
                          height="500"
                          alt=""
                        />
                      </div>
                      <div className="ag-timeline-card_info">
                        <div className="ag-timeline-card_title">Season 9</div>
                        <div className="ag-timeline-card_desc">
                          Vivamus elementum semper nisi. Aenean vulputate
                          eleifend tellus. Aenean leo ligula, porttitor eu,
                          consequat vitae, eleifend ac, enim. Aliquam lorem
                          ante, dapibus in, viverra quis, feugiat a, tellus.
                          Phasellus viverra nulla ut metus varius laoreet.
                          Quisque rutrum. Aenean imperdiet. Etiam ultricies
                          nisi vel augue. Curabitur ullamcorper ultricies
                          nisi.
                        </div>
                      </div>
                    </div>
                    <div className="ag-timeline-card_arrow"></div>
                  </div>
                </div>

                <div className="js-timeline_item ag-timeline_item">
                  <div className="ag-timeline-card_box">
                    <div className="ag-timeline-card_meta-box">
                      <div className="ag-timeline-card_meta">Season 8</div>
                    </div>
                    <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                      <div className="ag-timeline-card_point">2018</div>
                    </div>
                  </div>
                  <div className="ag-timeline-card_item">
                    <div className="ag-timeline-card_inner">
                      <div className="ag-timeline-card_img-box">
                        <img
                          src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-8.png"
                          className="ag-timeline-card_img"
                          width="640"
                          height="360"
                          alt=""
                        />
                      </div>
                      <div className="ag-timeline-card_info">
                        <div className="ag-timeline-card_title">Season 8</div>
                        <div className="ag-timeline-card_desc">
                          Donec quam felis, ultricies nec, pellentesque eu,
                          pretium quis, sem. Nulla consequat massa quis enim.
                          Donec pede justo, fringilla vel, aliquet nec,
                          vulputate eget, arcu. In enim justo, rhoncus ut,
                          imperdiet a, venenatis vitae, justo. Nullam dictum
                          felis eu pede mollis pretium. Integer tincidunt.
                          Cras dapibus. Vivamus elementum semper nisi.
                        </div>
                      </div>
                    </div>
                    <div className="ag-timeline-card_arrow"></div>
                  </div>
                </div>

                <div className="js-timeline_item ag-timeline_item">
                  <div className="ag-timeline-card_box">
                    <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                      <div className="ag-timeline-card_point">2018</div>
                    </div>
                    <div className="ag-timeline-card_meta-box">
                      <div className="ag-timeline-card_meta">Season 7</div>
                    </div>
                  </div>
                  <div className="ag-timeline-card_item">
                    <div className="ag-timeline-card_inner">
                      <div className="ag-timeline-card_img-box">
                        <img
                          src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-7.png"
                          className="ag-timeline-card_img"
                          width="640"
                          height="360"
                          alt=""
                        />
                      </div>
                      <div className="ag-timeline-card_info">
                        <div className="ag-timeline-card_title">Season 7</div>
                        <div className="ag-timeline-card_desc">
                          Quisque rutrum. Aenean imperdiet. Etiam ultricies
                          nisi vel augue. Curabitur ullamcorper ultricies
                          nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus,
                          tellus eget condimentum rhoncus, sem quam semper
                          libero, sit amet adipiscing sem neque sed ipsum. Nam
                          quam nunc, blandit vel, luctus pulvinar, hendrerit
                          id, lorem. Maecenas nec odio et ante tincidunt
                          tempus.
                        </div>
                      </div>
                    </div>
                    <div className="ag-timeline-card_arrow"></div>
                  </div>
                </div>

                <div className="js-timeline_item ag-timeline_item">
                  <div className="ag-timeline-card_box">
                    <div className="ag-timeline-card_meta-box">
                      <div className="ag-timeline-card_meta">Season 6</div>
                    </div>
                    <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                      <div className="ag-timeline-card_point">2017</div>
                    </div>
                  </div>
                  <div className="ag-timeline-card_item">
                    <div className="ag-timeline-card_inner">
                      <div className="ag-timeline-card_img-box">
                        <img
                          src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-6.png"
                          className="ag-timeline-card_img"
                          width="640"
                          height="360"
                          alt=""
                        />
                      </div>
                      <div className="ag-timeline-card_info">
                        <div className="ag-timeline-card_title">Season 6</div>
                        <div className="ag-timeline-card_desc">
                          Vivamus elementum semper nisi. Aenean vulputate
                          eleifend tellus. Aenean leo ligula, porttitor eu,
                          consequat vitae, eleifend ac, enim. Aliquam lorem
                          ante, dapibus in, viverra quis, feugiat a, tellus.
                          Phasellus viverra nulla ut metus varius laoreet.
                          Quisque rutrum.
                        </div>
                      </div>
                    </div>
                    <div className="ag-timeline-card_arrow"></div>
                  </div>
                </div>

                <div className="js-timeline_item ag-timeline_item">
                  <div className="ag-timeline-card_box">
                    <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                      <div className="ag-timeline-card_point">2017</div>
                    </div>
                    <div className="ag-timeline-card_meta-box">
                      <div className="ag-timeline-card_meta">Season 5</div>
                    </div>
                  </div>
                  <div className="ag-timeline-card_item">
                    <div className="ag-timeline-card_inner">
                      <div className="ag-timeline-card_img-box">
                        <img
                          src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-5.png"
                          className="ag-timeline-card_img"
                          width="640"
                          height="360"
                          alt=""
                        />
                      </div>
                      <div className="ag-timeline-card_info">
                        <div className="ag-timeline-card_title">Season 5</div>
                        <div className="ag-timeline-card_desc">
                          Donec pede justo, fringilla vel, aliquet nec,
                          vulputate eget, arcu. In enim justo, rhoncus ut,
                          imperdiet a, venenatis vitae, justo. Nullam dictum
                          felis eu pede mollis pretium. Integer tincidunt.
                          Cras dapibus. Vivamus elementum semper nisi. Aenean
                          vulputate eleifend tellus. Aenean leo ligula,
                          porttitor eu, consequat vitae, eleifend ac, enim.
                          Aliquam lorem ante, dapibus in, viverra quis,
                          feugiat a, tellus. Phasellus viverra nulla ut metus
                          varius laoreet. Quisque rutrum. Aenean imperdiet.
                          Etiam ultricies nisi vel augue. Curabitur
                          ullamcorper ultricies nisi.
                        </div>
                      </div>
                    </div>
                    <div className="ag-timeline-card_arrow"></div>
                  </div>
                </div>

                <div className="js-timeline_item ag-timeline_item">
                  <div className="ag-timeline-card_box">
                    <div className="ag-timeline-card_meta-box">
                      <div className="ag-timeline-card_meta">Season 4</div>
                    </div>
                    <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                      <div className="ag-timeline-card_point">2016</div>
                    </div>
                  </div>
                  <div className="ag-timeline-card_item">
                    <div className="ag-timeline-card_inner">
                      <div className="ag-timeline-card_img-box">
                        <img
                          src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-4.png"
                          className="ag-timeline-card_img"
                          width="640"
                          height="360"
                          alt=""
                        />
                      </div>
                      <div className="ag-timeline-card_info">
                        <div className="ag-timeline-card_title">Season 4</div>
                        <div className="ag-timeline-card_desc">
                          Nullam dictum felis eu pede mollis pretium. Integer
                          tincidunt. Cras dapibus. Vivamus elementum semper
                          nisi. Aenean vulputate eleifend tellus. Aenean leo
                          ligula, porttitor eu, consequat vitae, eleifend ac,
                          enim. Aliquam lorem ante, dapibus in, viverra quis,
                          feugiat a, tellus. Phasellus viverra nulla ut metus
                          varius laoreet.
                        </div>
                      </div>
                    </div>
                    <div className="ag-timeline-card_arrow"></div>
                  </div>
                </div>

                <div className="js-timeline_item ag-timeline_item">
                  <div className="ag-timeline-card_box">
                    <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                      <div className="ag-timeline-card_point">2016</div>
                    </div>
                    <div className="ag-timeline-card_meta-box">
                      <div className="ag-timeline-card_meta">Season 3</div>
                    </div>
                  </div>
                  <div className="ag-timeline-card_item">
                    <div className="ag-timeline-card_inner">
                      <div className="ag-timeline-card_img-box">
                        <img
                          src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-3.png"
                          className="ag-timeline-card_img"
                          width="640"
                          height="360"
                          alt=""
                        />
                      </div>
                      <div className="ag-timeline-card_info">
                        <div className="ag-timeline-card_title">Season 3</div>
                        <div className="ag-timeline-card_desc">
                          Curabitur ullamcorper ultricies nisi. Nam eget dui.
                          Etiam rhoncus. Maecenas tempus, tellus eget
                          condimentum rhoncus, sem quam semper libero, sit
                          amet adipiscing sem neque sed ipsum. Nam quam nunc,
                          blandit vel, luctus pulvinar, hendrerit id, lorem.
                          Maecenas nec odio et ante tincidunt tempus. Donec
                          vitae sapien ut libero venenatis faucibus. Nullam
                          quis ante. Etiam sit amet orci eget eros faucibus
                          tincidunt. Duis leo. Sed fringilla mauris sit amet
                          nibh.
                        </div>
                      </div>
                    </div>
                    <div className="ag-timeline-card_arrow"></div>
                  </div>
                </div>

                <div className="js-timeline_item ag-timeline_item">
                  <div className="ag-timeline-card_box">
                    <div className="ag-timeline-card_meta-box">
                      <div className="ag-timeline-card_meta">Season 2</div>
                    </div>
                    <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                      <div className="ag-timeline-card_point">2015</div>
                    </div>
                  </div>
                  <div className="ag-timeline-card_item">
                    <div className="ag-timeline-card_inner">
                      <div className="ag-timeline-card_img-box">
                        <img
                          src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-2.png"
                          className="ag-timeline-card_img"
                          width="640"
                          height="360"
                          alt=""
                        />
                      </div>
                      <div className="ag-timeline-card_info">
                        <div className="ag-timeline-card_title">Season 2</div>
                        <div className="ag-timeline-card_desc">
                          Aenean vulputate eleifend tellus. Aenean leo ligula,
                          porttitor eu, consequat vitae, eleifend ac, enim.
                          Aliquam lorem ante, dapibus in, viverra quis,
                          feugiat a, tellus. Phasellus viverra nulla ut metus
                          varius laoreet. Quisque rutrum. Aenean imperdiet.
                          Etiam ultricies nisi vel augue. Curabitur
                          ullamcorper ultricies nisi. Nam eget dui.
                        </div>
                      </div>
                    </div>
                    <div className="ag-timeline-card_arrow"></div>
                  </div>
                </div>

                <div className="js-timeline_item ag-timeline_item">
                  <div className="ag-timeline-card_box">
                    <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                      <div className="ag-timeline-card_point">2015</div>
                    </div>
                    <div className="ag-timeline-card_meta-box">
                      <div className="ag-timeline-card_meta">Season 1</div>
                    </div>
                  </div>
                  <div className="ag-timeline-card_item">
                    <div className="ag-timeline-card_inner">
                      <div className="ag-timeline-card_img-box">
                        <img
                          src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-1.png"
                          className="ag-timeline-card_img"
                          width="640"
                          height="360"
                          alt=""
                        />
                      </div>
                      <div className="ag-timeline-card_info">
                        <div className="ag-timeline-card_title">Season 1</div>
                        <div className="ag-timeline-card_desc">
                          Donec pede justo, fringilla vel, aliquet nec,
                          vulputate eget, arcu. In enim justo, rhoncus ut,
                          imperdiet a, venenatis vitae, justo. Nullam dictum
                          felis eu pede mollis pretium. Integer tincidunt.
                          Cras dapibus. Vivamus elementum semper nisi. Aenean
                          vulputate eleifend tellus. Aenean leo ligula,
                          porttitor eu, consequat vitae, eleifend ac, enim.
                          Aliquam lorem ante, dapibus in, viverra quis,
                          feugiat a, tellus.
                        </div>
                      </div>
                    </div>
                    <div className="ag-timeline-card_arrow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Timeline

