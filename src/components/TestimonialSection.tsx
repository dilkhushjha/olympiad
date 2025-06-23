/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialComment from "./TestimonialCard";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function TestimonialSection({ tag = "all" }: { tag?: string }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  useEffect(() => {
    try {
      setLoading(true);
      const fetchTestimonials = async function () {
        const res = await fetch(`/api/testimonials?tag=${tag}`);
        const data = await res.json();
        if (data.success) {
          setTestimonials(data.data);
        }
      };
      fetchTestimonials();
    } catch (e: Error | any) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, [tag]);
  if (loading) {
    return (
      <>
        <div className="skeleton min-h-[344px] w-full"></div>
        <div className="skeleton min-h-[344px] w-full"></div>
        <div className="skeleton min-h-[344px] w-full"></div>
      </>
    );
  }
  return (
    <div className="container mt-10 relative">
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={3}
        navigation={{
          nextEl: ".slider-all-testimonial-next",
          prevEl: ".slider-all-testimonial-prev",
        }}
        // pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="w-full mx-auto h-[332px]"
      >
        {testimonials.length > 0 && testimonials.slice(1, testimonials.length).map((slide, index) => (
          <SwiperSlide key={index} className="w-[590px]">
            <TestimonialComment
              name={slide.name}
              designation={slide.branch}
              comment={slide.detail}
              userImage={slide.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute flex justify-between -translate-y-1/5 px-4 bottom-[-74px] right-0 w-[150px]">
        <button className="slider-all-testimonial-prev bg-white p-2 w-[50px] h-[50px] rounded-full shadow-md relative">
          <BiChevronLeft className="w-full h-full relative" />
        </button>
        <button className="slider-all-testimonial-next bg-white p-2 w-[50px] h-[50px] rounded-full shadow-md">
          <BiChevronRight className="w-full h-full" />
        </button>
      </div>
    </div>
  );
}
