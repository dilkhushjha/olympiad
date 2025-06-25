"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import ReactPlayer from "react-player";
import "swiper/css";
import "swiper/css/pagination";

const videos = [
  {
    thumbnail: "/images/olympiad/testimonials/vid1.png",
    videoUrl: "",
    duration: "",
  },
  {
    thumbnail: "/images/olympiad/testimonials/vid1.png",
    videoUrl: "",
    duration: "",
  },
  {
    thumbnail: "/images/olympiad/testimonials/vid1.png",
    videoUrl: "",
    duration: "",
  },
  {
    thumbnail: "/images/olympiad/testimonials/vid1.png",
    videoUrl: "",
    duration: "",
  },
  {
    thumbnail: "/images/olympiad/testimonials/vid1.png",
    videoUrl: "",
    duration: "",
  },
  {
    thumbnail: "/images/olympiad/testimonials/vid1.png",
    videoUrl: "",
    duration: "",
  },
];

export default function TestimonialSection() {
  return (
    <div className="bg-Primary-Shade_7 p-16 container">
      {/* Heading Section */}
      <div className="gap-4 my-6">
        <div>
          <p className="text-[22px] text-Secondary-Shade_2 font-semibold">
            Testimonials
          </p>
          <h2 className="text-[44px] font-bold mt-2">Hear From Our Students</h2>
        </div>
        <div className="flex justify-between items-center my-6 mb-16">
          <p className="text-md font-normal text-Grey-Shade_1 mt-2 max-w-lg">
            Kind words from our students who appeared in Matrix Olympiad and
            secured a good rank in various colleges
          </p>
          <button className="flex gap-3 items-center *:text-white font-semibold btn-secondary text-lg">
            Register Now <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 10.5L5.5 6L1 1.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="relative my-2">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true, el: ".custom-swiper-pagination" }}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.2 },
          }}
        >
          {videos.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative rounded-xl overflow-hidden shadow">
                {item.videoUrl ? (
                  <ReactPlayer
                    url={item.videoUrl}
                    width="100%"
                    height="220px"
                    controls
                  />
                ) : (
                  <Image
                    src={item.thumbnail}
                    alt="thumbnail"
                    width={400}
                    height={220}
                    className="w-full object-cover"
                  />
                )}

                {/* Duration */}
                {item.duration && (
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {item.duration}
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="custom-swiper-pagination mt-4 flex justify-start gap-[8px] hover:cursor-pointer" />
    </div>
  );
}
