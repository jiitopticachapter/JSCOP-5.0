import React from 'react';
import Heading from '../heading/Heading'
import './Gallery.scss'

import { Swiper, SwiperSlide } from "swiper/react";

//import swiper css
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper";

// import galleryImg from '../../assets/images/bg1.jpg'

function Gallery() {
  return (
    <>
      <Heading title="GALLERY" />
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Navigation, Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/Gallery/1.jpg" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Gallery/2.jpg" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Gallery/3.jpg" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Gallery/4.jpg" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Gallery/5.jpg" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Gallery/6.jpg" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Gallery/7.jpg" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Gallery/8.jpg" alt=""/>
        </SwiperSlide>
      </Swiper>

    </>


  );
}

export default Gallery;