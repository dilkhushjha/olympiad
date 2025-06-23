import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function OurLocation() {
  return (
    <section
      className="spacing-xy"
      style={{ backgroundImage: "url('images/bg/our-location.png')" }}
    >
      <div className="container text-white">
        <h1 className="heading-1 ">Our Location</h1>
        <p className="max-w-[380px] pb-10 md:pb-0">
          Learn at India’s newly and leading coaching hub in Northern India
        </p>
        <div className="flex items-end flex-col md:flex-row gap-5">
          <h2 className="text-2xl font-bold md:max-w-[260px] w-full order-2 md:order-1">
            Ever Growing Matrix’s{" "}
            <b className="text-Accent-Green_1">25+Years</b> Young Legacy
          </h2>
          <div className="w-full md:ml-[55px] ml-0 order-1 md:order-2">
            <Image
              src={"/images/our-location-building.png"}
              className="float-end max-h-[405px]"
              alt=""
              width={583}
              height={345}
            />
          </div>
          <div className="max-w-[440px] text-white md:ml-[55px] order-3">
            <h3 className="heading-3">Our Fraternity</h3>
            <h6>
              With a humble beginning in 2010, THE MATRIX GROUP today is one of
              leading&apos;s educational conglomerates has embarked on a
              remarkable journey, transforming the lives of students and shaping
              the landscape of competitive exam coaching
            </h6>
            <ul>
              <li >
                <Link href="/careers" className="text-lg font-bold pl-0 flex justify-between items-center py-4 border-b border-Grey-Shade_3 mt-4">
                  Explore Careers
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="40" height="40" rx="20" fill="white" />
                    <path
                      d="M18.8571 22.5703L22.0714 19.356L18.8571 16.1417"
                      stroke="#13488E"
                      strokeWidth="1.07143"
                      strokeLinecap="round"
                    />
                  </svg>
                </Link>
              </li>
              <li >
                <Link href={"/about-us#our-history"}  className="text-lg font-bold pl-0 flex justify-between items-center py-4 border-b border-Grey-Shade_3">
                  Know the Leadership Team
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="40" height="40" rx="20" fill="white" />
                    <path
                      d="M18.8571 22.5703L22.0714 19.356L18.8571 16.1417"
                      stroke="#13488E"
                      strokeWidth="1.07143"
                      strokeLinecap="round"
                    />
                  </svg>
                </Link>
              </li>
              <li >
                <Link href={"/events"} className="text-lg font-bold pl-0 flex justify-between items-center py-4 border-b border-Grey-Shade_3">
                  In the News
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="40" height="40" rx="20" fill="white" />
                    <path
                      d="M18.8571 22.5703L22.0714 19.356L18.8571 16.1417"
                      stroke="#13488E"
                      strokeWidth="1.07143"
                      strokeLinecap="round"
                    />
                  </svg>
                </Link>
              </li>
              <li >
                <Link href={"/gallery"} className="text-lg font-bold pl-0 flex justify-between items-center py-4 border-b border-Grey-Shade_3">
                  Glimpse of Student Life
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="40" height="40" rx="20" fill="white" />
                    <path
                      d="M18.8571 22.5703L22.0714 19.356L18.8571 16.1417"
                      stroke="#13488E"
                      strokeWidth="1.07143"
                      strokeLinecap="round"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
