import React from "react";
import Image from "next/image";
import RegisterForm from "./_components/RegisterForm";
import WhyMof from "./_components/WhyMof";
import NextChampion from "./_components/NextChampion";
import ReviewCard from "./_components/ReviewCard";
import FaqSection from "./_components/FaqSection";
import RewardsAndRecognision from "./_components/RewardsAndRecognision";
import RankBanner from "./_components/RankBanner";
import TourGallery from "./_components/TourGallery";

const Olympiad = () => {
  return (
    <>
      <div className="w-screen h-max bg-[url('/images/olympiad/Hero.png')] bg-center bg-cover pt-8 sm:pt-12">
        <div className="pt-10 sm:pt-16 lg:pt-20 container px-4 sm:px-6 ">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Headings */}
            <div className="flex flex-col gap-4 lg:basis-2/3">
              <div className="flex flex-col gap-6 lg:gap-8">
                <div className="text-center lg:text-left">
                  <p className="text-lg sm:text-xl lg:text-2xl text-white font-medium">
                    Matrix Olympiad 2025
                  </p>
                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mt-3">
                    High-Impact Olympiad <br className="hidden sm:block" />
                    Exam for JEE, NEET, CLAT, <br className="hidden sm:block" />
                    NDA, Boards & Olympiads
                  </h2>
                </div>

                <div className="flex flex-col gap-4 items-center lg:items-start">
                  <p className="text-base sm:text-lg lg:text-xl text-white border rounded-2xl w-max px-5 sm:px-6 py-2 text-center">
                    All-India Olympiad (Class 5–12)
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl text-white border rounded-2xl w-max px-5 sm:px-6 py-2 text-center">
                    Win up to 100% Scholarships + ₹31L Cash Prizes
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl text-white border rounded-2xl w-max px-5 sm:px-6 py-2 text-center">
                    <span className="text-Primary-Shade_1 bg-white font-medium rounded-3xl px-3 sm:px-4 text-sm sm:text-base">
                      Free!
                    </span>
                    <span className="ml-3">Registration</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="flex flex-col gap-6 lg:basis-1/2 mt-6 lg:mt-0">
              <div className="">
                <RegisterForm />
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-12">
            {/* Image Behind */}
            <Image
              src="/images/olympiad/childs.png"
              width={800}
              height={100}
              className="mx-auto -mb-8 sm:-mb-12 relative z-0 w-full max-w-3xl h-auto"
              alt="Children"
            />

            {/* Blue Div Overlapping Image */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-between mx-auto text-white w-[95%] sm:w-[90%] lg:w-[80%] py-4 sm:py-6 px-4 sm:px-8 lg:px-12 rounded-t-2xl sm:rounded-t-3xl bg-Secondary-Shade_2 relative z-10 text-sm sm:text-base lg:text-lg items-center">
              <p className="font-semibold text-center sm:text-left">
                Starting from 15 July, 2025 Onwards
              </p>
              <p className="text-center sm:text-left">Registration Open Now</p>
              <button className="bg-white text-black font-semibold px-4 sm:px-5 py-2 rounded-2xl sm:rounded-3xl text-sm sm:text-base whitespace-nowrap">
                Register for Free
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="spacing-xy bg-[#F6F9FE] px-4 sm:px-6 lg:px-8">
        <div className="container">
          <WhyMof />
        </div>
      </div>

      <div>
        <RankBanner />
      </div>

      <div>
        <RewardsAndRecognision />
      </div>

      <div>
        <TourGallery />
      </div>

      <div>
        <FaqSection />
      </div>

      <div className="container pt-[120px]">
        <ReviewCard />
      </div>

      <div className="spacing-xy">
        <div className="container bg-[url('/images/olympiad/BGChampion.png')] bg-center bg-cover rounded-3xl">
          <NextChampion />
        </div>
      </div>

      <div className="bg-[#13488E]"></div>
    </>
  );
};

export default Olympiad;
