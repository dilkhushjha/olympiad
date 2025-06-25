import React from "react";
import Image from "next/image";
import RegisterForm from "./_components/RegisterForm";
import WhyMof from "./_components/WhyMof";
import NextChampion from "./_components/NextChampion";
import ReviewCard from "./_components/ReviewCard";
import FaqSection from "./_components/FaqSection";
import RewardsAndRecognition from "./_components/RewardsAndRecognition";
import StageFlow from "./_components/StageFlow";
import RankBanner from "./_components/RankBanner";
import TourGallery from "./_components/TourGallery";
import TestimonialSection from "./_components/TestimonialSection";

const Olympiad = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="w-screen bg-[url('/images/olympiad/Hero.png')] bg-center bg-cover pt-[120px] sm:pt-[120px] lg:pt-[120px]">
        <div className="container mx-auto px-4 sm:px">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
            {/* Left: Headings */}
            <div className="flex flex-col gap-6 lg:w-2/3">
              <div className="text-center lg:text-left">
                <p className="text-lg sm:text-xl lg:text-2xl text-white font-medium">
                  Matrix Olympiad 2025
                </p>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mt-3">
                  High-Impact Olympiad <br className="hidden sm:block" />
                  Exam for JEE, NEET, CLAT, <br className="hidden sm:block" />
                  NDA, Boards & Olympiads
                </h1>
              </div>

              <div className="flex flex-col gap-4 items-center lg:items-start">
                <p className="text-sm sm:text-base lg:text-lg text-white border rounded-2xl px-5 py-2 text-center">
                  All-India Olympiad (Class 5–12)
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-white border rounded-2xl px-5 py-2 text-center">
                  Win up to 100% Scholarships + ₹31L Cash Prizes
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-white border rounded-2xl px-5 py-2 text-center flex items-center gap-2">
                  <span className="text-Primary-Shade_1 bg-white font-medium rounded-3xl px-3 text-xs sm:text-sm lg:text-base">
                    Free!
                  </span>
                  <span>Registration</span>
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="flex flex-col gap-6  mt-6 lg:mt-0">
              <RegisterForm studentFeedback={true} />
            </div>
          </div>

          {/* Overlapping Section */}
          <div className="relative ">
            {/* Image */}
            <Image
              src="/images/olympiad/childs.png"
              width={800}
              height={400}
              className="mx-auto -mb-12 relative z-0 w-full max-w-3xl h-auto"
              alt="Children"
              priority
            />

            {/* Info Box */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-between items-center text-white bg-Secondary-Shade_2 rounded-t-2xl sm:rounded-t-3xl w-[95%] sm:w-[90%] lg:w-[80%] mx-auto py-5 px-6 sm:px-10 relative z-10 text-center sm:text-left text-sm sm:text-base lg:text-lg">
              <p className="font-semibold">
                Starting from 15 July, 2025 Onwards
              </p>
              <p>Registration Open Now</p>
              <button className="bg-white text-black font-semibold px-4 py-2 rounded-full text-xs sm:text-sm lg:text-base whitespace-nowrap">
                Register for Free
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="container mx-auto flex spacing-xy">
        <div className="flex gap-6 mx-auto text-center">
          <div className="rounded-2xl text-left p-6  bg-[url('/images/olympiad/stats.png')] bg-cover bg-center w-[300px]">
            <p className="text-2xl font-bold leading-none text-Accent-Orange_1">
              1000K+
            </p>
            <p className="text-sm font-medium">Students Registered</p>
          </div>
          <div className="rounded-2xl text-left p-6  bg-[url('/images/olympiad/stats.png')] bg-cover bg-center w-[300px]">
            <p className="text-2xl font-bold leading-none text-Accent-Orange_1">
              19+
            </p>
            <p className="text-sm font-medium">Students Benefited</p>
          </div>
          <div className="rounded-2xl text-left p-6  bg-[url('/images/olympiad/stats.png')] bg-cover bg-center w-[300px]">
            <p className="text-2xl font-bold leading-none text-Accent-Orange_1">
              18+
            </p>
            <p className="text-sm font-medium">National Awards</p>
          </div>
        </div>
      </section>

      {/* Why MOF Section */}
      <section className="bg-[#F6F9FE] py-12  ">
        <div className="container mx-auto">
          <div className="flex flex-col gap-8 mx-auto ">
            <WhyMof />

            <button
              type="submit"
              className="btn-secondary w-max text-white rounded-full  mx-auto flex gap-3 items-center text-lg"
            >
              <p>Start Today</p>
              <svg
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
      </section>

      {/* About MOF */}

      <section id="about" className="spacing-xy">
        <div className="container mx-auto">
          <div className="flex flex-col gap-10">
            <div className="flex gap-[100] justify-between items-center">
              <div className="xl:basis-2/5 basis-1">
                <Image
                  src={"/images/olympiad/about.png"}
                  alt="about"
                  height={400}
                  width={400}
                ></Image>
              </div>
              <div className="xl:basis-3/5 basis-1 flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <p className="text-xl text-Secondary-Shade_2 font-semibold">
                    About MOF
                  </p>
                  <h2 className="text-2xl xl:text-3xl md:text-2xl font-bold">
                    For 5th-12th classes <br />
                    students
                  </h2>
                </div>
                <p className="text-lg text-justify text-Grey-Shade_1">
                  Matrix Olympiad Foundation (MOF) helps students prepare for
                  JEE, NEET, CLAT, NDA, and more at Matrix Academy and Matrix
                  High School with attractive scholarships. Over the past 7
                  years, it has provided financial aid to more than 64,000
                  students, building a strong academic foundation.
                </p>
              </div>
            </div>

            <div className="flex gap-10 mx-auto text-center">
              <div className="rounded-2xl text-center p-6  bg-[url('/images/olympiad/about-card-bg.png')] bg-cover bg-center w-[350px]">
                <div className="flex flex-col gap-6">
                  <Image
                    src={"/images/olympiad/boy.png"}
                    alt="about"
                    height={120}
                    width={160}
                    className="mx-auto"
                  ></Image>

                  <div className="">
                    <p className="text-[20px]  font-bold  text-Accent-Orange_1">
                      Eligibility
                    </p>
                    <p className="text-sm font-medium">Class 5th-12th</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl text-center p-6  bg-[url('/images/olympiad/about-card-bg.png')] bg-cover bg-center w-[350px]">
                <div className="flex flex-col gap-6">
                  <Image
                    src={"/images/olympiad/boy.png"}
                    alt="about"
                    height={120}
                    width={160}
                    className="mx-auto"
                  ></Image>

                  <div className="">
                    <p className="text-[20px]  font-bold  text-Accent-Orange_1">
                      Exam Mode
                    </p>
                    <p className="text-sm font-medium">Offline / Online</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl text-center p-6  bg-[url('/images/olympiad/about-card-bg.png')] bg-cover bg-center w-[350px]">
                <div className="flex flex-col gap-6">
                  <Image
                    src={"/images/olympiad/boy.png"}
                    alt="about"
                    height={120}
                    width={160}
                    className="mx-auto"
                  ></Image>

                  <div className="">
                    <p className="text-[20px]  font-bold  text-Accent-Orange_1">
                      Exam Duration
                    </p>
                    <p className="text-sm font-medium">2 Hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="pb-[120px]">
        <div className="container mx-auto">
          <div className=" flex flex-col xl:gap-[80px]">
            <div className="flex flex-col gap-3 text-center">
              <p className="text-xl text-Secondary-Shade_2 font-semibold">
                Exam Dates & Phases
              </p>
              <h2 className="text-2xl xl:text-3xl md:text-2xl font-bold">
                Important Dates & Exam Phases
              </h2>
            </div>

            <div className="flex gap-10 mx-auto text-center">
              <div className="rounded-2xl text-center p-6   bg-cover bg-center border-2 w-[350px]">
                <p className="text-left px-11 py-2 bg-Secondary-Shade_2 text-white w-max rounded-xl font-bold text-xl my-[-60px] absolute">
                  Phase 1
                </p>

                <div className="flex flex-col gap-10">
                  <div className="flex gap-3 items-center mt-2">
                    <Image
                      src={"/images/olympiad/calender.png"}
                      alt="about"
                      height={60}
                      width={60}
                      className=""
                    ></Image>

                    <p className="text-2xl  font-bold ">5 Oct, 2025</p>
                  </div>
                  <p className="text-[20px] font-medium text-left text-Grey-Shade_1">
                    Madhya Pradesh (MP), Bihar, <br /> Uttar Pradesh (UP),
                    <br /> Rajasthan - Sikar
                  </p>
                </div>
              </div>
              <div className="rounded-2xl text-center p-6   bg-cover bg-center border-2 w-[350px]">
                <p className="text-left px-11 py-2 bg-Secondary-Shade_2 text-white w-max rounded-xl font-bold text-xl my-[-60px] absolute">
                  Phase 2
                </p>

                <div className="flex flex-col gap-10">
                  <div className="flex gap-3 items-center mt-2">
                    <Image
                      src={"/images/olympiad/calender.png"}
                      alt="about"
                      height={60}
                      width={60}
                      className=""
                    ></Image>

                    <p className="text-2xl  font-bold ">12 Oct, 2025</p>
                  </div>
                  <p className="text-[20px] font-medium text-left text-Grey-Shade_1">
                    Rajasthan - Sikar , Leh, <br /> Jammu
                  </p>
                </div>
              </div>
              <div className="rounded-2xl text-center p-6   bg-cover bg-center border-2 w-[350px]">
                <p className="text-left px-11 py-2 bg-Secondary-Shade_2 text-white w-max rounded-xl font-bold text-xl my-[-60px] absolute">
                  Phase 1
                </p>

                <div className="flex flex-col gap-10">
                  <div className="flex gap-3 items-center mt-2">
                    <Image
                      src={"/images/olympiad/calender.png"}
                      alt="about"
                      height={60}
                      width={60}
                      className=""
                    ></Image>

                    <p className="text-2xl  font-bold ">26 Oct, 2025</p>
                  </div>
                  <p className="text-[20px] font-medium text-left text-Grey-Shade_1">
                    Haryana, Manipur, Online
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Process */}

      <section className="spacing-xy bg-Secondary-Shade_2" id="process">
        <div className="container flex flex-col gap-10 mx-auto">
          <div className="flex flex-col gap-3 text-center">
            <p className="text-xl text-Accent-Yellow_2 font-semibold">
              Exam Process
            </p>
            <h2 className="text-2xl text-white xl:text-3xl md:text-2xl font-bold">
              Our Exam Conducting <br /> Process is Simple
            </h2>
          </div>

          <div className="">
            <StageFlow />
          </div>
        </div>
      </section>

      <div>
        <RankBanner />
      </div>

      <div>
        <RewardsAndRecognition />
      </div>

      <div>
        <TourGallery />
      </div>

      <div className="bg-Primary-Shade_7">
        <TestimonialSection />
        <ReviewCard />
      </div>

      <div>
        <FaqSection />
      </div>

      <div className="spacing-xy">
        <div className="container bg-[url('/images/olympiad/BGChampion.png')] bg-center bg-cover rounded-3xl">
          <NextChampion />
        </div>
      </div>
    </>
  );
};

export default Olympiad;
