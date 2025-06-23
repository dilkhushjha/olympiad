"use client";
import Image from "next/image";
import React from "react";
import AdmissionRequestModal from "./RegisterNow";
import { useAppContext } from "@/lib/AppContext";
import Link from "next/link";

const Footer: React.FC = () => {
  const { context, setContext } = useAppContext();
  return (
    <>
      <footer className="bg-[#F6FAFE] py-10">
        <div className="container mx-auto">
          {/* Top Section */}
          <div className="flex flex-wrap justify-between">
            {/* Contact Section */}
            <div className="w-full md:w-1/3 mb-8 md:mb-0 max-w-[232px]">
              {/* <h3 className="text-xl font-bold mb-4 text-green-700">Matrix</h3> */}
              <Image
                src="/images/matrix-logo.png"
                alt=""
                height={35}
                width={200}
                className="pb-10"
                quality={100}
              />
              <div className="border-b-2 pb-10">
                <div className="gap-2 flex">
                  <svg width="40" height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.33203 7.49195C2.33203 4.42537 4.89462 1.94678 7.99433 1.94678C11.1028 1.94678 13.6654 4.42537 13.6654 7.49195C13.6654 9.03724 13.1034 10.4719 12.1784 11.6878C11.1579 13.0291 9.90013 14.1978 8.48439 15.1151C8.16037 15.3271 7.86795 15.3431 7.51233 15.1151C6.08852 14.1978 4.83076 13.0291 3.81903 11.6878C2.89335 10.4719 2.33203 9.03724 2.33203 7.49195ZM6.12818 7.66461C6.12818 8.69192 6.96647 9.49989 7.99433 9.49989C9.02286 9.49989 9.86921 8.69192 9.86921 7.66461C9.86921 6.64531 9.02286 5.798 7.99433 5.798C6.96647 5.798 6.12818 6.64531 6.12818 7.66461Z" fill="#02824F" />
                  </svg>


                  <div className="">
                    <p className="font-bold">JEE Division Address</p>
                    <p className="leading-[1.75]">
                      Matrix JEE Academy, Opposite Ganpati Plaza, Piprali Road,
                      Sikar, Rajasthan 332001
                    </p>
                  </div>
                </div>

                <div className="gap-2 flex items-center mt-2">
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.68913 8.92804C10.3485 11.5867 10.9518 8.51093 12.6451 10.203C14.2775 11.835 15.2157 12.1619 13.1475 14.2296C12.8884 14.4378 11.2424 16.9426 5.4577 11.1596C-0.327683 5.37579 2.17569 3.72808 2.38395 3.46908C4.45721 1.39568 4.77854 2.33937 6.41096 3.97134C8.10421 5.66412 5.02974 6.26939 7.68913 8.92804Z" fill="#02824F" />
                  </svg>

                  <a href="tel:+911572249191" className="text-black hover:underline">
                    +91 1572 249191
                  </a>
                </div>
                <div className="gap-2 flex items-center mt-2">
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.2914 2.11328C12.1854 2.11328 13.0454 2.46661 13.678 3.10061C14.3114 3.73328 14.6654 4.58661 14.6654 5.47995V10.7466C14.6654 12.6066 13.152 14.1133 11.2914 14.1133H4.70536C2.8447 14.1133 1.33203 12.6066 1.33203 10.7466V5.47995C1.33203 3.61995 2.83803 2.11328 4.70536 2.11328H11.2914ZM12.352 6.47328L12.4054 6.41995C12.5647 6.22661 12.5647 5.94661 12.398 5.75328C12.3054 5.65395 12.178 5.59328 12.0454 5.57995C11.9054 5.57261 11.772 5.61995 11.6714 5.71328L8.66536 8.11328C8.2787 8.43395 7.7247 8.43395 7.33203 8.11328L4.33203 5.71328C4.1247 5.55995 3.83803 5.57995 3.66536 5.75995C3.48536 5.93995 3.46536 6.22661 3.61803 6.42661L3.70536 6.51328L6.7387 8.87995C7.11203 9.17328 7.5647 9.33328 8.0387 9.33328C8.51136 9.33328 8.97203 9.17328 9.3447 8.87995L12.352 6.47328Z" fill="#026E47" />
                  </svg>

                  <a href="mailto:info@matrixedu.in" className="text-black hover:underline">
                    info@matrixedu.in
                  </a>

                </div>
              </div>

              <div className="py-10 border-b-2">
                <div className="flex gap-2">
                  <div>


                    <svg width="16" height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M2.33203 7.49195C2.33203 4.42537 4.89462 1.94678 7.99433 1.94678C11.1028 1.94678 13.6654 4.42537 13.6654 7.49195C13.6654 9.03724 13.1034 10.4719 12.1784 11.6878C11.1579 13.0291 9.90013 14.1978 8.48439 15.1151C8.16037 15.3271 7.86795 15.3431 7.51233 15.1151C6.08852 14.1978 4.83076 13.0291 3.81903 11.6878C2.89335 10.4719 2.33203 9.03724 2.33203 7.49195ZM6.12818 7.66461C6.12818 8.69192 6.96647 9.49989 7.99433 9.49989C9.02286 9.49989 9.86921 8.69192 9.86921 7.66461C9.86921 6.64531 9.02286 5.798 7.99433 5.798C6.96647 5.798 6.12818 6.64531 6.12818 7.66461Z" fill="#02824F" />
                    </svg>
                  </div>
                  <div className="">


                    <p className="font-bold">NEET Division Address</p>
                    <p className="leading-[1.75]">
                      Matrix NEET Division, Piprali Road, Sikar, Rajasthan 332001
                    </p>
                  </div>
                </div>

                <div className="gap-2 flex items-center mt-2">
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.68913 8.92804C10.3485 11.5867 10.9518 8.51093 12.6451 10.203C14.2775 11.835 15.2157 12.1619 13.1475 14.2296C12.8884 14.4378 11.2424 16.9426 5.4577 11.1596C-0.327683 5.37579 2.17569 3.72808 2.38395 3.46908C4.45721 1.39568 4.77854 2.33937 6.41096 3.97134C8.10421 5.66412 5.02974 6.26939 7.68913 8.92804Z" fill="#02824F" />
                  </svg>

                  <a href="tel:+911572249191" className="text-black hover:underline">
                    +91 1572 249191
                  </a>
                </div>

                <div className="gap-2 flex items-center mt-2">
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.2914 2.11328C12.1854 2.11328 13.0454 2.46661 13.678 3.10061C14.3114 3.73328 14.6654 4.58661 14.6654 5.47995V10.7466C14.6654 12.6066 13.152 14.1133 11.2914 14.1133H4.70536C2.8447 14.1133 1.33203 12.6066 1.33203 10.7466V5.47995C1.33203 3.61995 2.83803 2.11328 4.70536 2.11328H11.2914ZM12.352 6.47328L12.4054 6.41995C12.5647 6.22661 12.5647 5.94661 12.398 5.75328C12.3054 5.65395 12.178 5.59328 12.0454 5.57995C11.9054 5.57261 11.772 5.61995 11.6714 5.71328L8.66536 8.11328C8.2787 8.43395 7.7247 8.43395 7.33203 8.11328L4.33203 5.71328C4.1247 5.55995 3.83803 5.57995 3.66536 5.75995C3.48536 5.93995 3.46536 6.22661 3.61803 6.42661L3.70536 6.51328L6.7387 8.87995C7.11203 9.17328 7.5647 9.33328 8.0387 9.33328C8.51136 9.33328 8.97203 9.17328 9.3447 8.87995L12.352 6.47328Z" fill="#026E47" />
                  </svg>

                  <a href="mailto:info@matrixedu.in" className="text-black hover:underline">
                    info@matrixedu.in
                  </a>

                </div>
              </div>


              {/* Social icons */}
              <div className="pt-10 flex gap-6">
                <Link href={'#'} > <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect y="0.613281" width="40" height="40" rx="19.7256" fill="#13488E" />
                  <g clipPath="url(#clip0_7928_3173)">
                    <path d="M27.9276 17.6378C27.8879 16.7297 27.7423 16.1054 27.5338 15.5645C27.3186 14.9903 26.9877 14.4762 26.554 14.0489C26.1304 13.6148 25.6173 13.2776 25.0547 13.064C24.5153 12.8536 23.8996 12.7068 22.9994 12.6668C22.0925 12.6233 21.8045 12.6133 19.5042 12.6133C17.204 12.6133 16.916 12.6233 16.0124 12.6634C15.1122 12.7034 14.4933 12.8504 13.9572 13.0606C13.3878 13.2776 12.8781 13.6115 12.4544 14.0489C12.0242 14.4762 11.69 14.9937 11.4781 15.5612C11.2695 16.1054 11.1239 16.7263 11.0843 17.6344C11.0412 18.5492 11.0312 18.8397 11.0312 21.16C11.0312 23.4802 11.0412 23.7707 11.0809 24.6821C11.1206 25.5902 11.2663 26.2145 11.4748 26.7554C11.69 27.3296 12.0242 27.8437 12.4544 28.271C12.8781 28.7051 13.3911 29.0423 13.9538 29.2559C14.4933 29.4663 15.1089 29.6131 16.0092 29.6532C16.9127 29.6933 17.2007 29.7032 19.501 29.7032C21.8013 29.7032 22.0892 29.6933 22.9928 29.6532C23.893 29.6131 24.5119 29.4663 25.0481 29.2559C26.1867 28.8119 27.087 27.9038 27.5272 26.7554C27.7356 26.2112 27.8813 25.5902 27.921 24.6821C27.9607 23.7707 27.9706 23.4802 27.9706 21.16C27.9706 18.8397 27.9673 18.5492 27.9276 17.6378ZM26.4019 24.6153C26.3654 25.45 26.2264 25.9007 26.1106 26.2012C25.8259 26.9457 25.2401 27.5366 24.502 27.8237C24.2041 27.9406 23.7541 28.0808 22.9298 28.1174C22.0362 28.1576 21.7682 28.1675 19.5076 28.1675C17.247 28.1675 16.9756 28.1576 16.0852 28.1174C15.2578 28.0808 14.811 27.9406 14.5131 27.8237C14.1458 27.6868 13.8115 27.4698 13.5401 27.186C13.2587 26.9089 13.0436 26.575 12.9079 26.2045C12.792 25.9041 12.653 25.45 12.6167 24.6187C12.5769 23.7173 12.5671 23.4469 12.5671 21.1666C12.5671 18.8864 12.5769 18.6126 12.6167 17.7146C12.653 16.88 12.792 16.4293 12.9079 16.1288C13.0436 15.7582 13.2587 15.421 13.5434 15.1472C13.818 14.8634 14.149 14.6464 14.5165 14.5096C14.8143 14.3928 15.2645 14.2526 16.0886 14.2158C16.9822 14.1757 17.2504 14.1657 19.5108 14.1657C21.7748 14.1657 22.0428 14.1757 22.9332 14.2158C23.7606 14.2526 24.2075 14.3928 24.5053 14.5096C24.8727 14.6464 25.207 14.8634 25.4784 15.1472C25.7597 15.4243 25.9748 15.7582 26.1106 16.1288C26.2264 16.4293 26.3654 16.8832 26.4019 17.7146C26.4416 18.616 26.4515 18.8864 26.4515 21.1666C26.4515 23.4469 26.4416 23.7139 26.4019 24.6153Z" fill="white" />
                    <path d="M19.5047 16.77C17.1019 16.77 15.1523 18.7364 15.1523 21.1602C15.1523 23.584 17.1019 25.5504 19.5047 25.5504C21.9076 25.5504 23.857 23.584 23.857 21.1602C23.857 18.7364 21.9076 16.77 19.5047 16.77ZM19.5047 24.008C17.9459 24.008 16.6814 22.7327 16.6814 21.1602C16.6814 19.5877 17.9459 18.3124 19.5047 18.3124C21.0636 18.3124 22.3279 19.5877 22.3279 21.1602C22.3279 22.7327 21.0636 24.008 19.5047 24.008Z" fill="white" />
                    <path d="M25.044 16.5962C25.044 17.1622 24.589 17.6211 24.0278 17.6211C23.4667 17.6211 23.0117 17.1622 23.0117 16.5962C23.0117 16.0301 23.4667 15.5713 24.0278 15.5713C24.589 15.5713 25.044 16.0301 25.044 16.5962Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_7928_3173">
                      <rect width="16.9427" height="17.09" fill="white" transform="translate(11 12.6133)" />
                    </clipPath>
                  </defs>
                </svg>
                </Link>
                <Link href={'#'}><svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect y="0.613281" width="40" height="40" rx="19.7256" fill="#13488E" />
                  <g clipPath="url(#clip0_7928_3179)">
                    <path d="M22.3316 15.436H23.8835V12.733C23.6158 12.6962 22.6949 12.6133 21.6225 12.6133C19.3849 12.6133 17.8521 14.0207 17.8521 16.6076V18.9883H15.3828V22.01H17.8521V29.6133H20.8795V22.0107H23.2489L23.625 18.989H20.8788V16.9072C20.8795 16.0338 21.1146 15.436 22.3316 15.436Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_7928_3179">
                      <rect width="17" height="17" fill="white" transform="translate(11 12.6133)" />
                    </clipPath>
                  </defs>
                </svg>
                </Link>
                <Link href={'#'}><svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect y="0.613281" width="40" height="40" rx="19.7256" fill="#13488E" />
                  <path d="M13.0616 12.6133C11.815 12.6133 11 13.4318 11 14.5077C11 15.5598 11.7907 16.4017 13.0138 16.4017H13.0374C14.3084 16.4017 15.0993 15.5598 15.0993 14.5077C15.0756 13.4318 14.3084 12.6133 13.0616 12.6133Z" fill="white" />
                  <path d="M11.2148 17.8984H14.8591V28.8622H11.2148V17.8984Z" fill="white" />
                  <path d="M23.8035 17.6411C21.8376 17.6411 20.5193 19.4884 20.5193 19.4884V17.8984H16.875V28.8622H20.5191V22.7396C20.5191 22.4119 20.5429 22.0846 20.6392 21.8502C20.9026 21.1957 21.5021 20.5176 22.5089 20.5176C23.8276 20.5176 24.355 21.5231 24.355 22.9969V28.8622H27.9989V22.5758C27.9989 19.2082 26.201 17.6411 23.8035 17.6411Z" fill="white" />
                </svg>
                </Link>
                <Link href={'#'}><svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect y="0.613281" width="40" height="40" rx="19.7256" fill="#13488E" />
                  <path d="M19.9987 13.2798C17.208 13.2798 13.5859 13.979 13.5859 13.979L13.5768 13.9894C12.3058 14.1927 11.332 15.2849 11.332 16.6131V20.6131V20.6144V24.6131V24.6144C11.3333 25.2488 11.5606 25.8619 11.9732 26.3437C12.3858 26.8256 12.9567 27.1445 13.5833 27.2433L13.5859 27.2472C13.5859 27.2472 17.208 27.9478 19.9987 27.9478C22.7894 27.9478 26.4115 27.2472 26.4115 27.2472L26.4128 27.2459C27.0401 27.1473 27.6116 26.8281 28.0245 26.3457C28.4375 25.8633 28.6647 25.2494 28.6654 24.6144V24.6131V20.6144V20.6131V16.6131C28.6644 15.9785 28.4372 15.3651 28.0246 14.883C27.6119 14.4009 27.0409 14.0818 26.4141 13.9829L26.4115 13.979C26.4115 13.979 22.7894 13.2798 19.9987 13.2798ZM17.9987 17.5454L23.332 20.6131L17.9987 23.6808V17.5454Z" fill="white" />
                </svg>
                </Link>

              </div>
            </div>

            {/* Navigation Sections */}
            <div className="w-full md:w-[calc(100%-280px)] flex flex-wrap justify-between">
              <div className="w-1/2 md:w-1/4 mb-6">
                <div className="mb-6">
                  <h4 className="font-bold mb-4 uppercase">About Us</h4>
                  <ul className="space-y-2 text-Black">
                    <li>
                      <Link href={"/about-us"}>About Matrix</Link>
                    </li>
                    <li>
                      <Link href={"/why-matrix"}>Why Matrix</Link>
                    </li>
                    <li>
                      <Link href={"/achievers"}>Matrix Achievers</Link>
                    </li>
                    <li>
                      <Link href={"/events"}>Latest Updates & News</Link>
                    </li>
                    <li>
                      <Link href={"#"}>Blog</Link>
                    </li>
                    <li>
                      <Link href={"/contact-us"}>Contact Us</Link>
                    </li>
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="font-bold mb-4 uppercase">Tools & Resources</h4>
                  <ul className="space-y-2 text-Black">
                    <li>
                      <Link href={"/jee-mains-rank-predictor"}>JEE Mains Rank Predictor</Link>
                    </li>
                    <li>
                      <Link href={"/jee-advanced-rank-predictor"}>JEE Advance Predictor</Link>
                    </li>
                    <li>
                      <Link href={"/jee-college-and-branch-predictor"}>JEE 2024 College & Branch Predictor</Link>
                    </li>
                    <li>
                      <Link href={"/neet-college-predictor"}>NEET UG 2024 College Predictor</Link>
                    </li>
                    <li>
                      <Link href={"/exam-and-college-info"}>Exam & College Information: 2024-25</Link>
                    </li>
                  </ul>
                </div>
   
                <div className="mb-6">
                  <h4 className="font-bold mb-4 uppercase">JEE Main Results</h4>
                  <ul className="space-y-2 text-black">
                    <li>
                      <Link href="/study-materials/jee-main/previous-year-papers">JEE Main All Results</Link>
                    </li>
                    <li>
                      <Link href="/study-materials/jee-main/JEE-Main-Jan-2025-Answer-Key-Solution">JEE Main Session-1 2024</Link>
                    </li>
                    <li>
                      <Link href="/study-materials/jee-main/JEE-Main-April-2024-Answer-Key-Solution">JEE Main Session-1 2024</Link>
                    </li>
                    <li>
                      <Link href="#">JEE Main Session-2 2023</Link>
                    </li>
                    <li>
                      <Link href="#">JEE Main Session-1 2023</Link>
                    </li>
                    <li>
                      <Link href="#">JEE Main July 2022</Link>
                    </li>
                    <li>
                      <Link href="#">JEE Main Jun 2022</Link>
                    </li>
                    
                  </ul>
                </div>
              </div>

              <div className="w-1/2 md:w-1/4 mb-6">
              <div className="mb-6">
                  <h4 className="font-bold mb-4 uppercase">Courses</h4>
                  <ul className="space-y-2 text-Black">
                    <li>
                      <Link href={"/courses?course=engineering"}>Engineering</Link>
                    </li>
                    <li>
                      <Link href={"/courses?course=medical"}>Medical</Link>
                    </li>
                    <li>
                      <Link href={"/courses?course=foundation"}>Foundation</Link>
                    </li>
                    
                  </ul>
                </div>
              <div className="mb-6">
                  <h4 className="font-bold mb-4 uppercase">Job At Matrix</h4>
                  <ul className="space-y-2 text-Black">
                    <li>
                      <Link href={"/careers"}>Careers</Link>
                    </li>
                    <li>
                      <Link href={"/careers/faculty-training-program"}>Faculty Training Program</Link>
                    </li>
                    <li>
                      <Link href={"/careers/explore-new-openings"}>Explore Openings</Link>
                    </li>
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="font-bold mb-4 uppercase">JEE Advanced Results</h4>
                  <ul className="space-y-2 text-Black">
                  <li>
                      <Link href={"#"}>JEE Advanced All Results</Link>
                    </li>
                    <li>
                      <Link href={"#"}>JEE Advanced 2023</Link>
                    </li>
                    <li>
                      <Link href={"#"}>JEE Advanced 2022</Link>
                    </li>
                    <li>
                      <Link href={"#"}>JEE Advanced 2021</Link>
                    </li>
                    <li>
                      <Link href={"#"}>JEE Advanced 2020</Link>
                    </li>
                  </ul>
                </div>
                
              </div>

              <div className="w-1/2 md:w-1/4 mb-6">
              <div className="mb-6">
                  <h4 className="font-bold mb-4 uppercase">Admission</h4>
                  <ul className="space-y-2 text-black">
                    <li>
                      <Link href="#">Apply for Direct Admission</Link>
                    </li>
                    <li>
                      <Link href="#">Apply for M-SAT</Link>
                    </li>
                    <li>
                      <Link href="#">Know Your Fee Structure</Link>
                    </li>
                    <li>
                      <Link href="#">Know Your Scholarships</Link>
                    </li>
                    <li>
                      <Link href="#">Admission Open</Link>
                    </li>
                  </ul>
                </div>
              <div className="mb-6">
                  <h4 className="font-bold mb-4 uppercase">Other Verticals</h4>
                  <ul className="space-y-2 text-Black">
                    <li>
                      <Link href={"#"}>Matrix Olympiad</Link>
                    </li>
                    <li>
                      <Link href={"#"}>Matrix High School</Link>
                    </li>
                    <li>
                      <Link href={"#"}>Matrix World School</Link>
                    </li>
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="font-bold mb-4 uppercase">NEET</h4>
                  <ul className="space-y-2 text-black">
                    <li>
                      <Link href="#">NEET All Results</Link>
                    </li>
                    <li>
                      <Link href="#">NEET Results 2023</Link>
                    </li>
                    <li>
                      <Link href="#">NEET Results 2022</Link>
                    </li>
                  </ul>
                </div>
                

                <div className="mb-6">
                  <h4 className="font-bold mb-4 uppercase">Fee Payment</h4>
                  <ul className="space-y-2 text-black">
                    <li>
                      <Link href="/courses/pay-fees">Pay Fees Online</Link>
                    </li>
                    <li>
                      <Link href="/pay-msat-fee">Pay M-SAT Fee</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-1/2 md:w-1/4 mb-6">
                <div className="mb-6">
                  <h4 className="font-bold mb-4 uppercase">Quick Links</h4>
                  <ul className="space-y-2 text-black">
                  <li>
                      <Link href="#">Student Testimonials</Link>
                    </li>
                    <li>
                      <Link href="/gallery">Media & Gallery</Link>
                    </li>
                    <li>
                      <Link href="/faq">FAQ&apos;s</Link>
                    </li>
                    <li>
                      <Link href="courses/pay-fees">Pay Online Fee</Link>
                    </li>
                    <li>
                      <Link href="/pay-msat-fee">Pay MSAT Fee</Link>
                    </li>
                    <li>
                      <Link href="#">Cancellation & Refund</Link>
                    </li>
                    <li>
                      <Link href="#">Privacy Policy</Link>
                    </li>
                    
                    <li>
                      <Link href="#">Terms & Conditions</Link>
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold mb-4 uppercase">Download</h4>
                  <ul className="space-y-2 text-black">
                   
                    <li>
                      <Link href="#">Matrix Student e-learning App</Link>
                    </li>
                    <li>
                      <Link href="#">Matrix Parents App</Link>
                    </li>
                    <li>
                      <Link href="#">M-SAT Admin Card</Link>
                    </li>
                    <li>
                      <Link href="#">Matrix e-Brochure</Link>
                    </li>
                    
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="font-bold mb-4 uppercase">Logins</h4>
                  <ul className="space-y-2 text-black">
                   
                    <li>
                      <Link href="/login">Student Login</Link>
                    </li>
                    <li>
                      <Link href="https://www.matrixedu.in/faculty-login?type=smd">SMD Correction Login</Link>
                    </li>
                   
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-12 border-t-2"></div>

          <div className="container mx-auto">
            {/* Content Section */}
            <div className="space-y-6">
              <h2 className=" font-bold text-Black">
                A Decade of Commitment to Quality Education
              </h2>
              <p className="text-Black font-medium">
                MATRIX, founded in 2014, is the largest and most prestigious
                institute that focuses on preparing students for JEE Main &
                Advanced, NEET, NTSE, KVPY, and several other Olympiads such as
                RMO, & IJSO in not just Sikar but entire northern Rajasthan.
                Matrix has had incredible success in the last 10 years - driven
                by the commitment of the founding team.
              </p>
              <p className="text-Black font-medium">
                Matrix has achieved remarkable success since its establishment,
                with over 2500 students qualifying for JEE Advanced since
                2015—an incredible accomplishment for any national institute.
                Along with a substantial number of JEE selections, Matrix
                consistently secures top rankings in JEE Advanced. As a result,
                Matrixians can be found in all the top departments of top IITs
                such as Electrical Engineering and Computer Science B.Tech
                programs at IIT Bombay, IIT Delhi, IIT Kanpur, IIT Kharagpur,
                and others. Today, Matrixians boast a large community at all top
                IITs (250+ students alone at the IIT Delhi campus as of 2024).
              </p>
              <p className="text-Black font-medium">
                We are pleased to inform you that in addition to achieving
                outstanding results in JEE Main & Advanced, Matrix has secured
                the highest number of selections for the 9th consecutive year in
                Sikar for Pre-RMO, RMO, NSEJS, IJSO, and in NTSE, STSE & KVPY
                while they were being conducted by the government.
              </p>
              <p className="text-Black font-medium">
                More than 200 students have successfully started their medical
                careers at prestigious government medical institutes after
                qualifying for the NEET exams since the introduction of NEET
                preparation at our institute in 2022. Backed by the top faculty
                team and outstanding personal care, Matrix has also become one
                of the best coachings in Sikar for NEET in a short period of
                time. Going forward, we aim to exceed this level and establish a
                standard for exceptional performance in NEET in the upcoming
                years just like we have done and are constantly doing for JEE
                students.
              </p>
            </div>

            <div className="flex md:flex-row flex-col justify-between">
              {/* Advantage Section */}
              <div className="mt-8">
                <h3 className="font-bold text-Black mb-4">
                  Advantage of Matrix
                </h3>
                <p className="text-Black mb-4 font-semibold">
                  Since the beginning, at Matrix, we have been focusing on the
                  following five points:
                </p>
                <ul className="list-disc list-inside text-Black space-y-2 font-medium">
                  <li>
                    Help students build a solid foundation for their career
                  </li>
                  <li>
                    Provide the best possible coaching and guidance for
                    competitive examinations
                  </li>
                  <li>
                    Be there for our students when they need guidance,
                    motivation, and support
                  </li>
                  <li>
                    Help our students improve their scientific temperament and
                    logical thinking
                  </li>
                  <li>
                    Develop and create a competitive psychology among students
                  </li>
                </ul>
              </div>

              {/* Download Section */}
              <div className="flex mt-8 justify-between items-start">
                <a
                  href="https://pdfobject.com/pdf/sample.pdf"
                  className="bg-Primary-Shade_1 text-white font-bold py-3 px-6 rounded-full hover:bg-green-600 flex gap-2"
                >
                  <Image
                    src="/images/brochure.png"
                    width={20}
                    height={20}
                    alt=""
                  />{" "}
                  Download E-Brochure
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="my-8 border-t border-gray-300"></div>

            {/* Footer Bottom Section */}
            <div className="flex md:flex-row flex-col justify-between items-center font-semibold">
              <p className="text-[#171918] text-xs">
                © 2024 Matrix Academy All Rights Reserved
              </p>
              <p className="text-Black text-xs">
                Made with ❤️ by Matrix IT Team
              </p>
            </div>
          </div>
        </div>
      </footer>
      <AdmissionRequestModal
        isOpen={context.showRegisterModal}
        onClose={() => setContext({ ...context, showRegisterModal: false })}
      />
    </>
  );
};

export default Footer;
