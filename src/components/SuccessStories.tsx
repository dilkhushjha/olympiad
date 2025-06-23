"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialComment from "./TestimonialCard";
import { twMerge } from "tailwind-merge";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const testimonials = [
  {
    name: "Vijan Soni",
    role: "JEE Main 2020 January Topper",
    image: "https://www.matrixedu.in/assets/default/images/VijanSoni.jpg",
    quote:
      "Thank you Gora Sir for helping me reach IIT Kharagpur. Thank you very much for all the scolding and anger when we were being indiscipline. To be honest, I didn't like you very much while being at Matrix because you were so strict with homework & discipline. But now that I am at one of the prestigious IITs, I can see through it.",
    video: "TR-e9xActLU",
  },
  {
    name: "Mayank Soni",
    role: "JEE Main & Advanced 2023 Topper",
    image: "https://www.matrixedu.in/assets/default/images/MayankSoni.jpg",
    quote:
      "I always feared whether I'd be able to crack JEE or not. But I finally did, and all thanks to my teachers at Matrix. It's because of their guidance and commitment that I have scored so well.",
    video: "cQ8CvjDHUpA",
  },
  {
    name: "Bantesh Saini",
    role: "NEET UG 2024 Topper",
    image: "https://www.matrixedu.in/assets/uploads/ourstars/205395.jpg",
    quote:
      "I already knew I would top NEET UG 2024 and I did. Matrix test series made me this confident that I scored 710 marks in NEET along with 91.60% in 12th. So I got into AIIMS Jodhpur, thank you Matrix for making all this possible.",
    video: "lxiOcRfOc5s",
  },
  {
    name: "Rekha Nitharwal",
    role: "NEET UG 2023 Topper",
    image: "https://www.matrixedu.in/assets/default/images/Rekha_Nitharwal.jpg",
    quote:
      "Finally after a year of rigorous preparation, when I sat for the NEET UG 2023 exam, I experienced that there wasn't a single question not seen before, most questions asked were from Matrix DTS itself. This is what quality study material means in preparation for NEET; relevant and latest exam pattern-based content makes all the difference.",
    video: "TcPF6J9LM8k",
  },
  {
    name: "Narendra Farroda",
    role: "NEET UG 2023 Topper",
    image:
      "https://www.matrixedu.in/assets/default/images/Narendra_Farroda.jpg",
    quote:
      "From Day 1 at Matrix, I loved learning, & interactions with teachers gave me a sense of belongingness. The robust system at Matrix finally paved the way to my triumph in NEET UG 2023 and opened the gates to the top medical colleges in India.",
    video: "1shaNVCNP0w",
  },
  {
    name: "Mohit Modi",
    role: "JEE Main 2023 Topper",
    image: "https://www.matrixedu.in/assets/default/images/Mohit_Modi.jpg",
    quote:
      "Education along with the guidance and counselling given by Matrix faculty helped me get good marks. Every doubt was solved by the teachers with utmost clarity and patience. Thank you to the mentors who motivated me in every step.",
    video: "pMy4nP_QFV4",
  },
  {
    name: "Ritu Sihag",
    role: "NEET UG 2023 Topper",
    image: "https://www.matrixedu.in/assets/default/images/Ritu_Sihag.jpg",
    quote:
      "I was scared of Physics, but the Physics teacher at Matrix was good at teaching that now I like this subject so much. If it wasn't his teaching then I wouldn't have got selected. To clear NEET, I'd say that one must have the eagerness to learn and the confidence to cross all the hurdles.",
    video: "Gw1e8wDI4uA",
  },
  {
    name: "Aman Nehra",
    role: "JEE Main 2023 Topper",
    image: "https://www.matrixedu.in/assets/default/images/Aman_Nehra.jpg",
    quote:
      "I can proudly say that choosing Matrix JEE coaching in Sikar was my best decision. Also, they provided me with very good study material and that helped in my preparation. I had the coolest and most motivational talks with my teachers, KSD sir, AG sir, and NK sir—they were the best!",
    video: "9O8DCS1Qflw",
  },
  {
    name: "Uttam Paharia",
    role: "JEE Main & Advanced 2022 Topper",
    image: "https://www.matrixedu.in/assets/default/images/UttamPaharia.jpg",
    quote:
      "My dream to study at IIT has finally come true and the right guidance from experienced faculties at Matrix made it truly possible. Teachers taught me all the right ways to study. I believe that with dedication and hard work, one can achieve great success.",
    video: "Ypq61cmwC8Y",
  },
  {
    name: "Deepak And Aadish Jain",
    role: "STSE 2021-22 Toppers",
    image:
      "https://www.matrixedu.in/assets/default/images/DeepakAndAadishJain.jpg",
    quote:
      "Rajasthan's search for talent ends here at MATRIX as always. Now in STSE 2021-22 Result too, with 3rd, 4th Rajasthan Toppers in Class 10th Category—winning talent was of MATRIX.",
    video: "vvLyOSgkDqg",
  },
];
export default function SuccessStories({
  heading,
  headingPosition = "text-center",
  description,
  descriptionPosition = "text-center",
  showAllTestimonials,
  showNavigation = true,
}: {
  heading: string;
  headingPosition?: "text-left" | "text-center" | "text-right";
  description?: string | TrustedHTML;
  descriptionPosition?: "text-left" | "text-center" | "text-right";
  showAllTestimonials?: boolean;
  showNavigation?: boolean;
}) {
  return (
    <section
      className="toppers max-w-screen w-full min-h-screen relative spacing-xy"
      style={{
        backgroundImage: "url('/images/bg/testimonial.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      id="success-testimonial"
    >
      <div className="container md:pb-[120px]">
        <h1
          className={twMerge(
            "heading-1 text-white text-center",
            headingPosition
          )}
        >
          {heading}
        </h1>
        {description && (
          <h6
            className={twMerge(
              "max-w-[512px] text-center mx-auto text-white",
              descriptionPosition
            )}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </div>
      <div className="container relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={false}
          // pagination={{ clickable: true }}
          className="w-full mx-auto"
          navigation={{
            nextEl: ".slider-next",
            prevEl: ".slider-prev",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="">
              <TestimonialCard
                quote={testimonial.quote}
                name={testimonial.name}
                designation={testimonial.role}
                profileImage={testimonial.image}
                // videoThumbnail={testimonial.thumbnail!}
                videoLink={testimonial.video!}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {showNavigation && (
          <div className="absolute flex justify-between -translate-y-1/5 px-4 bottom-[-74px] right-0 w-[150px]">
            <button className="slider-prev bg-white p-2 w-[50px] h-[50px] rounded-full shadow-md relative">
              <BiChevronLeft className="w-full h-full relative" />
            </button>
            <button className="slider-next bg-white p-2 w-[50px] h-[50px] rounded-full shadow-md">
              <BiChevronRight className="w-full h-full" />
            </button>
          </div>
        )}
        {/* Custom Navigation Buttons */}
      </div>

      {showAllTestimonials && (
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
            {testimonials.slice(1, testimonials.length).map((slide, index) => (
              <SwiperSlide key={index} className="w-[590px]">
                <TestimonialComment
                  name={slide.name}
                  designation={slide.role}
                  comment={slide.quote}
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
      )}

      {/* <Image src={"/images/testimonial_toppers.png"} alt="" fill /> */}
    </section>
  );
}
interface TestimonialCardProps {
  quote: string;
  name: string;
  designation: string;
  profileImage: string;
  videoThumbnail?: string;
  videoLink: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  designation,
  profileImage,
  videoLink,
}) => {
  return (
    <div className=" text-white flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6">
      {/* Left Section - Testimonial */}
      <div className="lg:w-1/2">
        <div className="flex flex-col items-start space-x-2">
          <img src="/images/quote.png" alt="" className="block" />
          <p className="text-lg mt-10">{quote}</p>
        </div>
        <div className="flex items-center mt-4 space-x-4">
          <div className="w-24 h-24 border-Primary-Shade_3 border-8 rounded-full overflow-hidden relative">
            <div className="w-20 h-20 border-Primary-Shade_2 border-t-transparent border-l-transparent border-8 rounded-full overflow-hidden absolute"></div>
            <img
              src={profileImage}
              alt={name}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-sm">{designation}</p>
          </div>
        </div>
      </div>

      {/* Right Section - Video */}
      <div className="lg:w-1/2 w-full max-w-max relative">
        <a href={videoLink} target="_blank" rel="noopener noreferrer">
          <iframe
            width="560"
            height="315"
            className="rounded-xl shadow-lg w-full aspect-video"
            src={`https://www.youtube-nocookie.com/embed/${videoLink}?amp;controls=0`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen={false}
          ></iframe>
         
        </a>
      </div>
    </div>
  );
};
