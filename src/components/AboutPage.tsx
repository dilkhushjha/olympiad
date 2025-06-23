"use client";
import React from "react";
import VideoFrame from "./VideoFrame";
import { useAppContext } from "@/lib/AppContext";

const AboutPage = ({ aboutData, paddingClass = "pt-[120px]" }) => {
  const { context, setContext } = useAppContext();
  return (
    <div className={`flex ${paddingClass} `}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2 flex flex-col gap-5">
            <h2 className="text-2xl md:text-3xl font-bold dark:text-white leading-tight">
              {aboutData.title}
            </h2>
            <p
              className="text-sm md:text-base w-full md:w-5/6 text-left text-justify"
              dangerouslySetInnerHTML={{ __html: aboutData.text }}
            ></p>

            {aboutData.buttonText && (
              <button
                className="btn-secondary w-max text-white rounded-3xl py-3 px-6 md:py-4 md:px-8"
                onClick={() => {
                  if (aboutData.buttonText.toLowerCase().split(' ').includes('register') ||
                    aboutData.buttonText.toLowerCase().split(' ').includes('join')) {
                    setContext({
                      ...context,
                      showRegisterModal: true
                    })
                  }
                }}
              >
                {aboutData.buttonText}
              </button>
            )}
          </div>
          <div className="w-full lg:w-1/2 border rounded-3xl mt-6 lg:mt-0">
            <VideoFrame thumbnail="/images/about-matrix-video.png" youtubeLink="https://www.youtube.com/embed/bJd_VTsUmyg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
