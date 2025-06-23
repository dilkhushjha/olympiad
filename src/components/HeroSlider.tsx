// components/Carousel.js
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { usePathname } from "next/navigation";
import { twMerge } from 'tailwind-merge';


const HeroSlider = ({
  numberOfSlides = 3,
  slides,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ...props
}: {
  numberOfSlides?: number;
  slides: { img: string; alt: string }[];
}) => {

  const pathname = usePathname();
  const firstSlideWidth = "!w-[265px]"
  return (
    <>
    <Swiper
      modules={[ Pagination, Autoplay]}
      spaceBetween={10}
      // slidesPerView={numberOfSlides ?? 3}
      pagination={{ el: '.header-swiper-pagination',clickable: true }}
      // autoplay={{ delay: 3000 }}
      className="w-full mx-auto h-5md:h-auto"
      breakpoints={{
        1024: {
          slidesPerView: numberOfSlides ?? 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }}
      autoplay={{ 
        delay: 3000,
       }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className={twMerge('w-full md:w-[590px] rounded-xl ', (index === 0&& pathname == '/about-us') && firstSlideWidth)}>
          <Image src={slide.img} height={332} width={590} alt={slide.alt} className="rounded-xl w-full max-h-[332px] object-cover object-top" />
        </SwiperSlide>
      ))}
      
    </Swiper>
    <div className="header-swiper-pagination mt-4 flex justify-end space-x-2 relative"></div>
    </>
  );
};

export default HeroSlider;
