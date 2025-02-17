import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./swiper.css";

// import required modules
import { Pagination,Autoplay } from "swiper/modules";
import ServiceCard from "../card/ServiceCard";

export default function ServicesSlider({ services }) {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        slidesPerGroup={5}
        autoplay={{
          delay: 3000, // Delay between transitions in milliseconds
          disableOnInteraction: false, // Keep autoplaying even when interacting with the slider
        }}
        loop={true} // Enable looping
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 16,
            slidesPerGroup:2,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 16,
            slidesPerGroup:4,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 16,
            slidesPerGroup:5,
          },
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <div>
          {services?.map((service) => (
            <SwiperSlide className="mb-10" key={service?.id}>
              <ServiceCard service={service} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
}
