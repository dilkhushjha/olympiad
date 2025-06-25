"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What is eligible to take these Olympiads?",
    answer:
      "Any student studying in class 5th to 12th enrolled in any of the CBSE, ICSE or State Boards.",
  },
  {
    question: "In which medium Matrix Olympiad will be conducted?",
    answer:
      "Any student studying in class 5th to 12th enrolled in any of the CBSE, ICSE or State Boards.",
  },
  {
    question: "What is the benefit of participating in these Olympiads?",
    answer:
      "Any student studying in class 5th to 12th enrolled in any of the CBSE, ICSE or State Boards.",
  },
  {
    question: "How to prepare for these Olympiads?",
    answer:
      "Any student studying in class 5th to 12th enrolled in any of the CBSE, ICSE or State Boards.",
  },
  {
    question: "Is registration form available on online mode also?",
    answer:
      "Any student studying in class 5th to 12th enrolled in any of the CBSE, ICSE or State Boards.",
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(-1);
  const handleFAQClick = (index: number) => {
    if (index === openIdx) {
      setOpenIdx(-1);
      return;
    } else {
      setOpenIdx(index);
    }
  };
  return (
    <section className="container flex flex-col mx-auto items-center spacing-t">
      <div className="flex flex-col m-2 items-center">
        <p className="text-Secondary-Shade_2 text-[20px] font-bold ">FAQs</p>
        <p className="xl:text-[44px] text-2xl font-extrabold">Have a question?</p>
        <p className="text-Grey-Shade_1 text-lg mt-4">
          Find the answers in our FAQs
        </p>
      </div>

      <div className="flex justify-between mt-8">
        <div className="w-full md:w-[811px]">
          {faqs.map(
            (item: { question: string; answer: string }, index: number) => (
              <div
                key={index}
                className="rounded-none border-b border-Grey-Shade_3 not:first:border-none"
              >
                <div
                  className={`cursor-pointer flex items-center justify-between my-5 ${openIdx === index ? "text-[#02824F]" : "text-[#101823]"
                    }`}
                  onClick={() => handleFAQClick(index)}
                >
                  <div className="text-lg font-semibold">{item.question}</div>
                  <div className="text-xl">{openIdx !== index ? "+" : "-"}</div>
                </div>
                {openIdx === index && (
                  <div className="text-[#718298] pb-4 w-11/12">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
