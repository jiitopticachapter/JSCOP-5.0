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
          <img src="https://drive.google.com/uc?export=view&id=1nXnml8EAjZv-4MLD_yJf81kIN1O11twO" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://drive.google.com/uc?export=view&id=1nWuB-TOI_tTMsYu4cwW11m8MtG4_uLeL" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://drive.google.com/uc?export=view&id=1gu0kDorDmjjP-nVcoUKr3ihswMwjlRH9" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://drive.google.com/uc?export=view&id=1a1hHy7pmBo6-i-SheEUsCGWdF2iR78Yb" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://drive.google.com/uc?export=view&id=1AmKT6ERmNdmF4qoB6WiMHFCLYH8IhYMh" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://drive.google.com/uc?export=view&id=1zgD-Iooc29iGtzKaE_rx4ncbaGgDrA8J" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://drive.google.com/uc?export=view&id=1Fdxj44m8lLqmrU5CJrsQ0uRztMrnlBsl" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://drive.google.com/uc?export=view&id=1iV1IvvxpfdXN9VeMhEDIULquX6RLw78c" alt=""/>
        </SwiperSlide>
      </Swiper>

    </>


  );
}

export default Gallery;