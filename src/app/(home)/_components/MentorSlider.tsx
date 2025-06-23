/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MentorCard from "@/components/MentorCard";
type MentorCardProps =  {
    name: string;
    qualifications: string[];
    image: string;
    info: string;
}
export default function MentorSlider() {

    const slides: MentorCardProps[] = [
        {
            "image": "images/mentors/narendra.png",
            "name": "Mr. Narendra Kok (NK Sir)",
            "qualifications": ["(B.Tech, IIT Kharagpur, 2010)"],
            "info": "Co-founder at Matrix, Narendra Kok Sir (NK Sir) has been teaching Chemistry for JEE Main and Advanced & Chemistry Olympiads since 2010."
        },
        {
            "image": "images/mentors/rajendra.png",
            "name": "Mr. Rajendra Burdak (RB Sir)",
            "qualifications": ["(B.Tech, SIST University 2008)"],
            "info": "One of the co-founders at Matrix, Rajendra Burdak Sir (RB Sir) has been training students for JEE Main & Advanced since 2008. He is one of the most senior faculties at ..."
        },
        {
            "image": "images/mentors/anupam.png",
            "name": "Mr. Anupam Agrawal (AA Sir)",
            "qualifications": ["(B.Tech, IIT Kanpur)"],
            "info": "Anupam Agarwal is a B.Tech from IIT Kanpur. Anupam qualified IIT-JEE 2006 & joined IIT Kanpur for a four program in Mechanical engineering. Before joining Matrix as a ..."
        },
        // {
        //     "image": "https://www.matrixedu.in/assets/default/img/team/xKSD_Sir.jpg.pagespeed.ic.zxVbMidsHE.webp",
        //     "name": "Mr. KS Dhaka (KSD Sir)",
        //     "qualifications": ["(B.Tech, IIT Kharagpur 2009, MBA, IIM Ahmedabad 2012)"],
        //     "info": "One of the best mentors that any institute has to offer, helping students realize their potential. As a part of the founding team at Matrix, KSD Sir has helped many st ..."
        // },
        {
            "image": "images/mentors/anil.png",
            "name": "Mr. Anil Gora (AG Sir)",
            "qualifications": ["(B.Tech, IIT Kharagpur 2009)"],
            "info": "One of the co-founders at Matrix and nothing less than an experienced master of Mathematics, Mr. Anil Gora (AG Sir) is known and respected amongst the student as well ..."
        },
        {
            "image": "images/mentors/birbal.png",
            "name": "Mr. Birbal Maan",
            "qualifications": ["14 years of teaching experience"],
            "info": "One of the co-founders at Matrix and nothing less than an experienced master of Mathematics, Mr. Anil Gora (AG Sir) is known and respected amongst the student as well ..."
        },
        {
            "image": "images/mentors/shankar.png",
            "name": "Mr. Shankar Lal Choudhary",
            "qualifications": ["12 years of teaching experience"],
            "info": "One of the co-founders at Matrix and nothing less than an experienced master of Mathematics, Mr. Anil Gora (AG Sir) is known and respected amongst the student as well ..."
        },
    ];
    const [activeIndex, setActiveIndex] = useState(0);
    const [showPagination, setShowPagination] = useState(true);
  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={4}
        // navigation

        autoplay={{ delay: 3000 }}
        className="w-full mx-auto"
        onSwiper={(swiper) => {
          // If all slides fit in view, hide pagination
          setShowPagination(
            swiper.slides.length > Number(swiper.params.slidesPerView)
          );
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: {
              el: ".swiper-pagination",
              type: "bullets",
          }
        }
        }}
      >
        {slides.map((slide: MentorCardProps, index) => (
          <SwiperSlide key={index}>
            <MentorCard
            name={slide.name}
            qualifications={slide.qualifications}
            // info={slide.info}   
            image={slide.image}
          />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination (Only Show If Needed) */}

      <div className="flex justify-center space-x-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition ${
              activeIndex === index ? "bg-Primary-Shade_1 w-6" : "bg-Primary-Shade_3"
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
