import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function SwipeCarousel() {
  return (
    <>
    <h1 style={{marginTop:"3rem", borderBottom:"1px solid black"}}>Professional Templates</h1>
    
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        
        <SwiperSlide> <Link
              to='/template4'>
                <img className="slide-img" src="./images/template4.png" alt="imag"  />
                </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link
              to='/template1'>
                <img className="slide-img" src="./images/template1.png" alt="imag" />
                </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link
              to='/template3'>
                <img className="slide-img" src="./images/template3.png" alt="imag"  />
        </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link
              to='/template5'>
                <img className="slide-img" src="./images/template5.png" alt="imag"  />
                </Link>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
