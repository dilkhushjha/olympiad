"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#13488E] py-10 text-white ">
        <div className="container flex mx-auto items-center justify-between font-light">
          <div className="flex items-center">
            <div className="border-r border-Grey-Shade_1 pr-12">
              <div className="flex gap-4">
                <Image
                  src={"/images/olympiad/logo-white.png"}
                  alt="logo"
                  width={180}
                  height={100}
                ></Image>
              </div>
              <div className="py-2 pl-2 ">
                <p>Piprali Road, Sikar (Raj.)</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 pl-12">
              <p className="flex items-center gap-2">
                <svg
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.2286 0.0664062C11.1225 0.0664062 11.9827 0.419813 12.6153 1.05371C13.2486 1.68627 13.6025 2.53945 13.6026 3.43262V8.7002C13.6024 10.56 12.0891 12.0664 10.2286 12.0664H3.64267C1.78229 12.0663 0.26987 10.5599 0.269623 8.7002V3.43262C0.269869 1.57292 1.77562 0.0665602 3.64267 0.0664062H10.2286ZM10.9825 3.5332C10.8427 3.52599 10.7091 3.57278 10.6085 3.66602L7.60263 6.06641C7.21597 6.38691 6.66222 6.38702 6.26962 6.06641L3.26962 3.66602C3.0623 3.51283 2.77525 3.53294 2.60263 3.71289C2.4227 3.89289 2.40311 4.17991 2.55576 4.37988L2.64267 4.4668L5.67587 6.83301C6.04921 7.12634 6.50265 7.28613 6.97665 7.28613C7.44919 7.28605 7.90975 7.12627 8.28232 6.83301L11.2892 4.42676L11.3429 4.37305C11.5022 4.17971 11.5027 3.89939 11.336 3.70605C11.2434 3.60672 11.1152 3.54654 10.9825 3.5332Z"
                    fill="white"
                  />
                </svg>

                <Link href="mailto:mof@matrixedu.in">mof@matrixedu.in</Link>
              </p>
              <p className="flex items-center gap-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.62385 7.38166C9.28324 10.0403 9.88654 6.96454 11.5798 8.65661C13.2122 10.2886 14.1504 10.6155 12.0822 12.6832C11.8231 12.8914 10.1771 15.3962 4.39243 9.61318C-1.39296 3.8294 1.11041 2.18169 1.31867 1.9227C3.39194 -0.150704 3.71327 0.792987 5.34568 2.42495C7.03893 4.11773 3.96446 4.72301 6.62385 7.38166Z"
                    fill="white"
                  />
                </svg>
                <Link href="tel:+91 1572 241911">+91 1572 241911</Link>
              </p>
              <p className="flex items-center gap-2">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_14519_124)">
                    <path
                      d="M8.93804 0.0664062H8.93404C4.52304 0.0664062 0.936035 3.65441 0.936035 8.06641C0.936035 9.81641 1.50004 11.4384 2.45904 12.7554L1.46204 15.7274L4.53704 14.7444C5.80204 15.5824 7.31104 16.0664 8.93804 16.0664C13.349 16.0664 16.936 12.4774 16.936 8.06641C16.936 3.65541 13.349 0.0664062 8.93804 0.0664062Z"
                      fill="white"
                    />
                    <path
                      d="M13.593 11.3636C13.4 11.9086 12.634 12.3606 12.023 12.4926C11.605 12.5816 11.059 12.6526 9.22102 11.8906C6.87002 10.9166 5.35602 8.52759 5.23802 8.37259C5.12502 8.21759 4.28802 7.10759 4.28802 5.95959C4.28802 4.81159 4.87102 4.25259 5.10602 4.01259C5.29902 3.81559 5.61802 3.72559 5.92402 3.72559C6.02302 3.72559 6.11202 3.73059 6.19202 3.73459C6.42702 3.74459 6.54502 3.75859 6.70002 4.12959C6.89302 4.59459 7.36302 5.74259 7.41902 5.86059C7.47602 5.97859 7.53303 6.13859 7.45303 6.29359C7.37803 6.45359 7.31202 6.52459 7.19402 6.66059C7.07602 6.79659 6.96402 6.90059 6.84602 7.04659C6.73802 7.17359 6.61602 7.30959 6.75202 7.54459C6.88802 7.77459 7.35802 8.54159 8.05002 9.15759C8.94302 9.95259 9.66702 10.2066 9.92602 10.3146C10.119 10.3946 10.349 10.3756 10.49 10.2256C10.669 10.0326 10.89 9.71259 11.115 9.39759C11.275 9.17159 11.477 9.14359 11.689 9.22359C11.905 9.29859 13.048 9.86359 13.283 9.98059C13.518 10.0986 13.673 10.1546 13.73 10.2536C13.786 10.3526 13.786 10.8176 13.593 11.3636Z"
                      fill="#13488E"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_14519_124">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0.936035 0.0664062)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <Link href="tel:+91 8999241911">+91 8999241911</Link>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault(); // prevent the default anchor behavior
                window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top smoothly
              }}
              className="flex mx-auto mr-0 w-max hover:shadow-lg transition-all ease-in-out rounded-full  bg-Primary-Shade_3 hover:bg-Primary-Shade_2 hover:translate-y-1"
            >
              <svg
                width="40"
                height="41"
                viewBox="0 0 40 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.816406"
                  width="40"
                  height="40"
                  rx="20"
                  fill=""
                />
                <path
                  d="M15 23.8164L20.5 18.3164L26 23.8164"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
            <p className="text-Grey-Shade_3 text-sm font-light">
              © 2024 Matrix Olympiad All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
