"use client";
import { useAppContext } from "@/lib/AppContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const tools = [
  {
    title: "JEE Mains Rank Predictor",
    icon: (
      <Image src="/images/rank-1.png" alt="Tool Icon" width={40} height={40} />
    ),
    link: "jee-mains-rank-predictor",
  },
  {
    title: "JEE Advanced Rank Predictor",
    icon: (
      <Image src="/images/rank-1.png" alt="Tool Icon" width={40} height={40} />
    ),
    link: "jee-advanced-rank-predictor",
  },
  {
    title: "JEE 2024 College & Branch Predictor",
    icon: (
      <Image
        src="/images/university.png"
        alt="Tool Icon"
        width={40}
        height={40}
      />
    ),
    link: "jee-college-and-branch-predictor",
  },
  {
    title: "NEET UG 2024 College Predictor",
    icon: (
      <Image
        src="/images/university.png"
        alt="Tool Icon"
        width={40}
        height={40}
      />
    ),
    link: "/neet-college-predictor",
  },
];

const FreeTools = () => {
  const { context, setContext } = useAppContext();
  return (
    <section className="spacing-xy relative">
      {/* Left Section */}
      <div className="container flex flex-col">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800">
            Matrix Free Tools Assistance
          </h2>
          <p className="mt-4 text-gray-600">
            Designed various intuitive free tools to help aspirants to predict
            their expected rank, college & branch based on examination
            performance.
          </p>

          {/* Tool List */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-8">
            {tools.map((tool, index) => (
              <Link
                href={tool.link}
                key={index}
                className="flex flex-col items-start p-4 bg-white rounded-lg border border-Grey-Shade_3 hover:shadow-lg transition"
              >
                {tool.icon}

                <p className="mt-6 text-Black-Shade_-2 text-lg font-semibold max-w-[170px]">
                  {tool.title}
                </p>
              </Link>
            ))}
          </div>

          {/* Call to Action */}
          <button
            className="mt-8 bg-Primary-Shade_1 text-white font-semibold py-3 px-6 rounded-full flex items-center space-x-2 hover:bg-green-600"
            onClick={() => {
              setContext({
                ...context,
                showRegisterModal: true,
              });
            }}
          >
            <span>Book Free Counselling Session</span>
            <FaChevronRight className="text-white text-xs" />
          </button>
        </div>
        <div className="md:absolute relative top-0 right-0">
        <img
          src="/images/girl-pointing.png"
          alt="Girl pointing"
          className="w-auto h-auto"
        />
      </div>
      </div>

      {/* Right Section */}
      
    </section>
  );
};

export default FreeTools;
