import React from "react";
import { BiChevronRight } from "react-icons/bi";
import Link from "next/link";

export default function ScholarshipPromoBanner() {
  return (
    <div className="relative max-w-screen w-full h-[500px] bg-[url('/images/bg/scholorship-bg.png')] bg-cover bg-no-repeat">
      {/* <Image src="/images/home-banner.jpg" alt="" fill={true} /> */}
      <div className="container h-full flex md:flex-row flex-col">
        <div className="flex flex-col justify-center h-full">
          <div>
            <div className="badge bg-Accent-Orange_1 !border-Accent-Orange_1 !text-white">
              Get Scholarship upto 100%
            </div>
            <h1 className="text-4xl md:text-[156px] font-bold text-white leading-none">
              MSAT
            </h1>
            <p className="text-lg md:text-2xl border-b border-white border-t text-white max-w-max">
              Matrix Scholarship Application Test
            </p>
          </div>
          <Link href={"/msat"}>
            <button className="btn-primary !bg-Black max-w-max mt-4 md:mt-10 !text-white flex items-center justify-center">
              Register Now <BiChevronRight size={24} />
            </button>
          </Link>
        </div>
        <div className="">
          <img
            src="/images/happy-indian-male-student-university 1.png"
            className="md:absolute right-0 bottom-0"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
