"use client";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    category: "Predictors",
    links: [
      { name: "JEE Main Rank Predictor", href: "/jee-mains-rank-predictor" },
      { name: "JEE Advanced Rank Predictor", href: "/jee-advanced-rank-predictor" },
      { name: "JEE 2024 College & Branch Predictor", href: "/jee-college-and-branch-predictor" },
      { name: "NEET UG 2024 College Predictor", href: "/neet-college-predictor" },
    ],
  },
  {
    category: "Resources",
    links: [
      { name: "Events & News", href: "/events" },
      { name: "Exam & College Information", href: "/exam-and-college-info" },
      { name: "Blog", href: "https://www.mycareer.matrixedu.in/", target: '_blank' },
      { name: "Matrix e-learnings", href: "#" },
      { name: "Testimonials", href: "/testimonials" },
      { name: "FAQ's", href: "/faq" },
      { name: "Gallery", href: "/gallery" },
    ],
  },
  {
    category: "Payments",
    links: [
      { name: "Careers", href: "/careers" },
      { name: "Why Matrix", href: "/why-matrix" },
      { name: "Pay M-SAT Fee", href: "/pay-msat-fee" },
      { name: "Pay Admission Fee", href: "" },
    ],
  },
];

const NavigationMenu = ({
  checkForFixedNav,
}: {
  checkForFixedNav: boolean;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  useEffect(()=>{
    setIsOpen(false);
  },[pathname])
  return (
    <div className="relative">
      {/* Toggle Button */}
      <button className="" onClick={() => setIsOpen(true)}>
        <svg
          width={24}
          height={25}
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 8.5H20.5"
            stroke={checkForFixedNav ? "white" : "black"}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M10.2585 16L20.4999 16"
            stroke={checkForFixedNav ? "white" : "black"}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full  bg-blue-900 text-white z-50 transform ${isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex md:flex-row flex-col justify-between items-start md:items-center px-6 py-4 border-b border-white/20">
          <h2 className="text-lg font-bold">MATRIX</h2>
          <div className="md:px-6 py-4 flex items-center gap-4">
            <Link href={"/contact-us"} className="btn-primary !bg-transparent border !border-white !text-white ">
              Contact Us
            </Link>
            <Link href={"/login"} className=" btn-secondary !bg-White !text-Primary-Shade_1">
              Login
            </Link>
            <button className="absolute top-4 right-4 md:relative md:top-0 md:right-0" onClick={() => setIsOpen(false)}>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4C4 4.496 14.3333 14.54 19.5 19.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M19.5 4C19.004 4 8.96 14.3333 4 19.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-6">
          {menuItems.map((section, index) => (
            <div key={index}>
              {section.links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  target={!_.isEmpty(link.target) ? link.target : '_self'}
                  className="block py-2 hover:underline transition duration-200 text-xl"
                  onClick={() => {
                    setIsOpen(false)
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom Buttons */}
      </div>
    </div>
  );
};

export default NavigationMenu;
