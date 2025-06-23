'use client';
import AboutPage from '@/components/AboutPage'
import Faq from '@/components/Faq'
import React, { useState } from 'react'
import RegistrationProcessCard from './_components/RegistrationProcessCard'
import ScholarshipPromoBanner from '@/components/ScholarshipPromoBanner'
import ScholarshipForm from './_components/ScholarshipForm'
import Link from 'next/link';
import MsatRegistrationKeyModal from './_components/MsatRegistrationKeyModal'
import Image from 'next/image';
import TestimonialSection from '@/components/TestimonialSection';


const aboutData = {
    "title": "About M-SAT",
    "text": "Matrix Scholarship Admission Test (MSAT) is a gateway for aspiring students to evaluate their academic aptitude and unlock their true potential. Designed to provide detailed performance insights, the test helps identify individual strengths and areas for improvement. MSAT not only highlights Matrix's expertise in assessing and nurturing talent but also offers deserving candidates the chance to secure scholarships of up to 100%. Successful participants can enroll in their desired Matrix classroom programs, paving the way for academic excellence and a brighter future.",
    "buttonText": "Register Now >"
}

const whyTakeMsat = [
    {
        "id": "1",
        "text": "This is your perfect opportunity to win up to 90% scholarship on our Classroom Courses for JEE, NEET & OLYMPIAD",
        "icon": "/images/talent-1.svg"
    },
    {
        "id": "2",
        "text": "This is your perfect opportunity to win up to 90% scholarship on our Classroom Courses for JEE, NEET & OLYMPIAD",
        "icon": "/images/insignia-1.svg"
    },
]

const registrationProcessData = [
    {
        "id": 1,
        "title": "Complete the Registration Form",
        "text": "Provide your details in the easy-to-fill registration form to get started.",
        "icon": "/images/badge-1.png"
    },
    {
        "id": 2,
        "title": "Verify Your Details & OTP",
        "text": "Ensure the accuracy of your information and verify it using a secure OTP sent to your mobile.",
        "icon": "/images/badge-2.png"
    },
    {
        "id": 3,
        "title": "Pay the Registration Fee",
        "text": "Proceed to make a hassle-free payment of INR 500 as the registration fee to confirm your slot.",
        "icon": "/images/badge-3.png"
    },

]

const benefitsOfMsat = [
    {
        "id": 1,
        "title": "Exceptional Scholarship Opportunities",
        "text": "Secure up to 90% scholarships on Matrix’s classroom programs for JEE, NEET, Olympiads, and more.",
        "icon": "/images/bomsat-1.png"
    },
    {
        "id": 2,
        "title": "Learn from Top Educators",
        "text": "Gain access to Matrix’s renowned faculty, known for their expertise and proven success in shaping academic achievers.",
        "icon": "/images/bomsat-2.png"
    },
    {
        "id": 3,
        "title": "Early Competitive Edge",
        "text": "Build your readiness for competitive exams like JEE, NEET, and Olympiads with early exposure to focused preparation strategies.",
        "icon": "/images/bomsat-3.png"
    },
    {
        "id": 4,
        "title": "Tailored Learning Opportunities",
        "text": "Join a learning program that aligns perfectly with your academic goals and aspirations for maximum impact.",
        "icon": "/images/bomsat-4.png"
    }

]

const tdData = [
    {
        "id": 1,
        "title": "Test Pattern",
        "text": "The Test will contain objective type questions",
        "icon": "/images/td-1.png"
    },
    {
        "id": 2,
        "title": "Date & Time",
        "text": "5th & 25th Jan'25 from 10:00 AM to 12:30 PM",
        "icon": "/images/td-2.png"
    },
    {
        "id": 3,
        "title": "No. of Questions",
        "text": "The Test will contain total 10 questions",
        "icon": "/images/td-3.png"
    },
    {
        "id": 4,
        "title": "Eligibility",
        "text": "The Test will contain objective type questions",
        "icon": "/images/td-4.png"
    }
]


const Scholarships = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleCloseModal = () => {
        setIsModalOpen(false); // Hide modal
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsModalOpen(true)

    };


    return (
        <div>

            {isModalOpen && <MsatRegistrationKeyModal onClose={handleCloseModal} />}


            {/* Hero Section */}
            <div className="w-screen h-[690px]  bg-[url('/images/bg/scholarships-hero-bg.png')] spacing-xy bg-cover bg-top overflow-visible">

                <div className="container spacing-xy flex justify-between text-white">
                    <div className="flex flex-col gap-4">
                        <p className="text-sm font-bold py-1 px-3 rounded-full text-Primary-Shade_2 bg-[#D7FEEF] bg-white w-max">
                            For Class 5th to 11th
                        </p>

                        <h2 className="text-3xl font-bold leading-[1.2]">Matrix Scholarship <br /> Admission Test</h2>
                        <div className='flex flex-col gap-2'>
                            <div className="gap-3 flex items-center">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_6242_16322)">
                                        <path d="M14.63 8.62479C14.3325 8.55729 14.015 8.61729 13.76 8.78729L10.875 10.7273C10.8225 10.2473 10.4175 9.86979 9.9225 9.86979H8.765C8.17 9.86979 7.5825 9.71229 7.0675 9.41479C6.6675 9.18479 6.215 9.06479 5.755 9.06479C5.1175 9.06479 4.5025 9.29729 4.0225 9.71729L3.76 9.94979C3.72 9.52979 3.37 9.19729 2.94 9.19729H1.3275C0.8725 9.19729 0.5 9.56979 0.5 10.0248V14.2423C0.5 14.6998 0.8725 15.0698 1.3275 15.0698H2.94C3.395 15.0698 3.7675 14.6998 3.7675 14.2423V14.0223L5.385 14.3423C5.965 14.4573 6.5525 14.5148 7.1425 14.5148C8.035 14.5148 8.9275 14.3823 9.785 14.1223C11 13.7548 12.1075 13.1473 13.07 12.3173L15.1125 10.5623C15.52 10.2098 15.62 9.61729 15.3475 9.14979C15.19 8.88479 14.93 8.69479 14.63 8.62479ZM14.785 10.1823L12.745 11.9373C11.8325 12.7223 10.79 13.2948 9.64 13.6448C8.2975 14.0523 6.86 14.1248 5.4825 13.8523L3.7675 13.5148V10.6098L4.3525 10.0923C4.74 9.75229 5.24 9.56479 5.755 9.56479C6.1275 9.56479 6.495 9.66229 6.8175 9.84729C7.4075 10.1898 8.0825 10.3698 8.765 10.3698H9.9225C10.1775 10.3698 10.385 10.5773 10.385 10.8323C10.385 11.0873 10.1775 11.2923 9.9225 11.2923H7.075C6.9375 11.2923 6.825 11.4048 6.825 11.5423C6.825 11.6823 6.9375 11.7923 7.075 11.7923H9.9225C10.1875 11.7923 10.4275 11.6848 10.6025 11.5123L14.0375 9.20229C14.18 9.10729 14.3525 9.07479 14.52 9.11229C14.6875 9.15229 14.8275 9.25479 14.915 9.40229C15.065 9.65979 15.0125 9.98979 14.785 10.1823Z" fill="white" />
                                        <path d="M6.55937 8.59483H12.7944C13.5344 8.59483 14.1369 7.99232 14.1369 7.25233V3.65232L15.1369 3.30732C15.2394 3.27232 15.3069 3.17732 15.3069 3.06982C15.3069 2.96232 15.2394 2.86982 15.1369 2.83482L9.68437 0.942324C9.62937 0.924824 9.57188 0.924824 9.51937 0.942324L4.21438 2.78232C4.11438 2.81732 4.04688 2.91232 4.04688 3.01732C4.04688 3.12482 4.11438 3.21982 4.21438 3.25482L5.21687 3.60232V6.17232C5.21687 6.17482 5.21437 6.17732 5.21437 6.17982C5.21437 6.18232 5.21687 6.18482 5.21687 6.18732V7.22232C5.21687 7.22482 5.21437 7.22732 5.21437 7.22983C5.21437 7.23232 5.21687 7.23483 5.21687 7.23733V7.25233C5.21687 7.99232 5.81937 8.59483 6.55937 8.59483ZM12.7944 8.09483H6.55937C6.17437 8.09483 5.85187 7.83232 5.75187 7.47983H13.6019C13.5019 7.83232 13.1794 8.09483 12.7944 8.09483ZM13.6369 6.97983H5.71687V6.42982H13.6369V6.97983ZM13.6369 5.92982H5.71687V3.77482L9.66937 5.14482C9.69687 5.15482 9.72437 5.15982 9.75187 5.15982C9.77937 5.15982 9.80687 5.15482 9.83437 5.14482L13.6369 3.82732V5.92982Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_6242_16322">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>


                                <p className="text-lg">Avail upto 90% of scholarship</p>
                            </div>
                            <div className="gap-3 flex items-center">

                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.8125 1.79995C13.6594 1.7044 13.4843 1.64964 13.304 1.64089C13.1237 1.63214 12.9442 1.66968 12.7825 1.74995L8 4.08745L3.2175 1.74995C3.05525 1.67268 2.87614 1.63752 2.69672 1.64772C2.5173 1.65792 2.34333 1.71315 2.19088 1.80831C2.03842 1.90346 1.9124 2.03549 1.82442 2.1922C1.73644 2.3489 1.68936 2.52524 1.6875 2.70495V11.0974C1.68838 11.2958 1.74452 11.49 1.84962 11.6583C1.95472 11.8265 2.10462 11.9621 2.2825 12.0499L7.8625 14.7799C7.90519 14.8013 7.95227 14.8124 8 14.8124C8.04773 14.8124 8.09481 14.8013 8.1375 14.7799L13.7175 12.0499C13.8954 11.9621 14.0453 11.8265 14.1504 11.6583C14.2555 11.49 14.3116 11.2958 14.3125 11.0974V2.70245C14.3132 2.52184 14.2676 2.34407 14.18 2.18608C14.0925 2.0281 13.966 1.89516 13.8125 1.79995ZM7.6875 13.9999L2.5575 11.4999C2.48312 11.4647 2.42021 11.4091 2.37599 11.3397C2.33176 11.2703 2.30802 11.1898 2.3075 11.1074V2.70245C2.30756 2.6282 2.32652 2.5552 2.36259 2.4903C2.39865 2.4254 2.45064 2.37075 2.51366 2.33149C2.57667 2.29223 2.64864 2.26966 2.72279 2.26589C2.79694 2.26212 2.87083 2.27728 2.9375 2.30995L7.6875 4.62995V13.9999Z" fill="white" />
                                </svg>
                                <p className="text-lg">For Students Moving to Class 11th, 12th & 12th Pass Outs</p>
                            </div>
                        </div>

                        <div className="flex gap-5 pt-4">
                            <div className="relative px-6 py-2 text-lg font-bold text-black bg-gradient-to-r from-[#FFEAC2] to-[#FFC800] skew-x-[-10deg] shadow-lg items-center flex">
                                Only for LIMITED students!
                            </div>
                            <div className="p-3 border-l-2 border-white flex gap-3 items-center">
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3 17.3698V9.75684H21V17.4308C21 20.5698 19.0241 22.4998 15.8628 22.4998H8.12733C4.99561 22.4998 3 20.5298 3 17.3698ZM7.95938 14.9098C7.50494 14.9308 7.12953 14.5698 7.10977 14.1108C7.10977 13.6508 7.46542 13.2708 7.91987 13.2498C8.36443 13.2498 8.72997 13.6008 8.73985 14.0498C8.7596 14.5108 8.40395 14.8908 7.95938 14.9098ZM12.0198 14.9098C11.5653 14.9308 11.1899 14.5698 11.1701 14.1108C11.1701 13.6508 11.5258 13.2708 11.9802 13.2498C12.4248 13.2498 12.7903 13.6008 12.8002 14.0498C12.82 14.5108 12.4643 14.8908 12.0198 14.9098ZM16.0505 18.5898C15.596 18.5798 15.2305 18.1998 15.2305 17.7398C15.2206 17.2798 15.5862 16.9008 16.0406 16.8908H16.0505C16.5148 16.8908 16.8902 17.2708 16.8902 17.7398C16.8902 18.2098 16.5148 18.5898 16.0505 18.5898ZM11.1701 17.7398C11.1899 18.1998 11.5653 18.5608 12.0198 18.5398C12.4643 18.5208 12.82 18.1408 12.8002 17.6808C12.7903 17.2308 12.4248 16.8798 11.9802 16.8798C11.5258 16.9008 11.1701 17.2798 11.1701 17.7398ZM7.09989 17.7398C7.11965 18.1998 7.49506 18.5608 7.94951 18.5398C8.39407 18.5208 8.74973 18.1408 8.72997 17.6808C8.72009 17.2308 8.35456 16.8798 7.90999 16.8798C7.45554 16.9008 7.09989 17.2798 7.09989 17.7398ZM15.2404 14.1008C15.2404 13.6408 15.596 13.2708 16.0505 13.2608C16.4951 13.2608 16.8507 13.6198 16.8705 14.0608C16.8804 14.5208 16.5247 14.9008 16.0801 14.9098C15.6257 14.9198 15.2503 14.5698 15.2404 14.1108V14.1008Z" fill="white" />
                                    <path opacity="0.4" d="M3.00391 9.75675C3.01675 9.16975 3.06615 8.00475 3.15901 7.62975C3.63321 5.52075 5.24353 4.18075 7.5454 3.98975H16.4565C18.7386 4.19075 20.3687 5.53975 20.8429 7.62975C20.9348 7.99475 20.9841 9.16875 20.997 9.75675H3.00391Z" fill="white" />
                                    <path d="M8.30367 7.09C8.73836 7.09 9.06437 6.761 9.06437 6.32V3.271C9.06437 2.83 8.73836 2.5 8.30367 2.5C7.86898 2.5 7.54297 2.83 7.54297 3.271V6.32C7.54297 6.761 7.86898 7.09 8.30367 7.09Z" fill="white" />
                                    <path d="M15.6943 7.09C16.1191 7.09 16.455 6.761 16.455 6.32V3.271C16.455 2.83 16.1191 2.5 15.6943 2.5C15.2596 2.5 14.9336 2.83 14.9336 3.271V6.32C14.9336 6.761 15.2596 7.09 15.6943 7.09Z" fill="white" />
                                </svg>

                                <p className="text-lg font-bold">
                                    5th & 25th Jan&nbsp;25
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id="form">
                        <ScholarshipForm />
                    </div>
                </div>

            </div>




            {/* Why should you take MSAT */}
            <div className=" mt-[120px] spacing-xy ">

                <div className="container flex justify-between border rounded-3xl bg-[url('/images/bg/why-take-msat-bg.png')] bg-cover">
                    <div className="flex flex-col gap-10 p-16">
                        <h2 className="text-2xl font-bold">
                            Why should you take M-SAT?
                        </h2>

                        {whyTakeMsat.map((data) => (

                            <div key={data.id} className="flex gap-6">
                                <Image height={48} width={48} src={data.icon} alt="" className='aspect-auto' />
                                <p className="text-sm w-[500px] ">{data.text}</p>
                            </div>
                        ))}


                    </div>


                </div>
            </div>
            <div className="spacing-b">
                <AboutPage paddingClass='pt-[0px]' aboutData={aboutData} />

            </div>




            {/* Step by Step Registration Process */}
            <div className="w-100 bg-Secondary-Shade_1 spacing-xy ">
                <div className="container">
                    <div className=" flex flex-col gap-10">
                        <h2 className="text-3xl text-white font-bold">
                            Step-by-Step Registration Process
                        </h2>
                        <div className="flex flex-col gap-[22px] xl:flex-row">
                            {registrationProcessData.map((data) => (

                                <div key={data.id} className="basis-1/3">
                                    <RegistrationProcessCard processData={data} />
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>


            {/* Test Details */}
            <div className="py-16"> {/* Added py-16 for vertical spacing */}
                <div className="container mx-auto px-4"> {/* Added mx-auto for centering and px-4 for padding */}
                    <div className="flex flex-col gap-10">
                        <h2 className="font-bold text-3xl text-center">
                            Test Details
                        </h2>
                        <div className="flex flex-col md:flex-row gap-6 md:gap-[22px]"> {/* Added responsive flex direction and gap */}
                            {tdData.map((data) => (
                                <div key={data.id} className="flex flex-col border p-8 rounded-2xl gap-7 w-full md:w-auto"> {/* Added responsive width and padding */}
                                    <div className="flex">
                                        <img src={data.icon} alt="" />
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <h6 className="text-xl font-bold">
                                            {data.title}
                                        </h6>
                                        <p className="text-sm w-full md:w-[80%]"> {/* Added responsive width */}
                                            {data.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            {/*  Registration Fee Details*/}

            <div className="container pb-[120px]">
                <div className="m-auto items-center flex flex-col gap-16 ">
                    <h2 className="text-3xl font-bold text-center">
                        Registration Fee Details for Matrix - SAT
                    </h2>
                    <div className="flex flex-col gap-11">
                        <div className="flex gap-6 flex-col">
                            <div className="flex gap-6">
                                <div className="border rounded-3xl w-[527px]">
                                    <p className="font-bold border-b py-3 px-4">
                                        Course details
                                    </p>
                                    <p className=" border-b py-3 px-4">
                                        JEE Main & Advanced and NEET (Class XI, XII and XII Passed)
                                    </p>
                                    <p className=" py-3 px-4">
                                        Class V to X(Pre-foundation)
                                    </p>

                                </div>
                                <div className="border rounded-3xl w-[355px]">
                                    <p className="font-bold border-b py-3 px-4 rounded-t-3xl bg-Secondary-Shade_2 text-white">
                                        Online Registration Fee
                                    </p>
                                    <p className=" border-b py-3 px-4 font-bold">
                                        ₹ 500
                                    </p>
                                    <p className=" py-3 px-4 font-bold">
                                        ₹ 200
                                    </p>
                                </div>
                            </div>
                            <div className="flex py-4 px-6 gap-3 bg-[#F9FAFB] rounded-2xl">
                                <p className='rounded-full font-bold bg-Secondary-Shade_4 text-white px-2' >!</p>
                                <p className="text-sm">
                                    The fee payment can be done online at the time of online registration.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-[26px]  ">
                        <div className="flex flex-col gap-[34px] py-10 px-8  rounded-3xl  bg-Primary-Shade_7">
                            <div className="gap-4 flex flex-col">
                                <svg width="64" height="54" viewBox="0 0 64 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M62.125 8.25H1.875C0.824875 8.25 0 9.07487 0 10.125V51.375C0 52.4249 0.824875 53.25 1.875 53.25H62.125C63.1751 53.25 64 52.4249 64 51.375V10.125C64 9.07487 63.1751 8.25 62.125 8.25Z" fill="#3983E5" />
                                    <path d="M56.375 25.125C56.375 26.1749 55.5501 27 54.5 27H32C30.9499 27 30.125 26.1749 30.125 25.125C30.125 24.0749 30.9499 23.25 32 23.25H54.5C55.5501 23.25 56.375 24.0749 56.375 25.125Z" fill="#EDF4FD" />
                                    <path d="M56.375 32.625C56.375 33.6749 55.5501 34.5 54.5 34.5H32C30.9499 34.5 30.125 33.6749 30.125 32.625C30.125 31.5749 30.9499 30.75 32 30.75H54.5C55.5501 30.75 56.375 31.5749 56.375 32.625Z" fill="#EDF4FD" />
                                    <path d="M56.375 40.125C56.375 41.1749 55.5501 42 54.5 42H32C30.9499 42 30.125 41.1749 30.125 40.125C30.125 39.0749 30.9499 38.25 32 38.25H54.5C55.5501 38.25 56.375 39.0749 56.375 40.125Z" fill="#EDF4FD" />
                                    <path d="M17 30.75C11.825 30.75 7.625 34.95 7.625 40.125V43.875C7.625 44.9249 8.44987 45.75 9.5 45.75H24.5C25.5501 45.75 26.375 44.9249 26.375 43.875V40.125C26.375 34.95 22.175 30.75 17 30.75Z" fill="#FFD12E" />
                                    <path d="M17 19.5C13.8874 19.5 11.375 22.0124 11.375 25.125C11.375 28.2374 13.8874 30.75 17 30.75C20.1126 30.75 22.625 28.2374 22.625 25.125C22.625 22.0124 20.1126 19.5 17 19.5Z" fill="#FFE6CC" />
                                    <path d="M43.25 6.375V10.125C43.25 11.1749 42.4251 12 41.375 12H22.625C21.5749 12 20.75 11.1749 20.75 10.125V6.375C20.75 5.32487 21.5749 4.5 22.625 4.5H26.7126C27.4625 2.32488 29.5624 0.75 32 0.75C34.4376 0.75 36.5376 2.32488 37.2874 4.5H41.375C42.4251 4.5 43.25 5.32487 43.25 6.375Z" fill="#FF7D05" />
                                </svg>

                                <h6 className="text-2xl font-bold leading-[1.2]">
                                    Already applied and fee <br />  paid?
                                </h6>
                            </div>


                            <button
                                onClick={handleSubmit}
                                type="submit"
                                className="w-max flex gap-[10px] bg-Primary-Shade_1 text-white py-3 px-6 rounded-full font-semibold hover:bg-green-700 transition text-lg"
                            >
                                Download M-SAT Admit Card
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.7369 2.76175H8.08489C6.00489 2.75375 4.30089 4.41075 4.25089 6.49075V17.2277C4.20589 19.3297 5.87389 21.0697 7.97489 21.1147C8.01189 21.1147 8.04889 21.1157 8.08489 21.1147H16.0729C18.1629 21.0407 19.8149 19.3187 19.8029 17.2277V8.03775L14.7369 2.76175Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14.4766 2.75V5.659C14.4766 7.079 15.6256 8.23 17.0456 8.234H19.7996" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.6406 15.9497V9.90869" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.29688 13.5942L11.6419 15.9492L13.9869 13.5942" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </button>

                        </div>
                        <div className="flex flex-col gap-[34px] py-10 px-8 rounded-3xl bg-Secondary-Shade_5">
                            <div className="gap-4 flex flex-col">
                                <svg width="64" height="55" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.775 1.875H36.975C39.12 1.875 40.875 3.63 40.875 5.775V58.225C40.875 60.37 39.12 62.125 36.975 62.125H5.775C3.63 62.125 1.875 60.37 1.875 58.225V5.775C1.875 3.63 3.62988 1.875 5.775 1.875Z" fill="#F9F9F9" />
                                    <path d="M36.975 0H5.775C2.59063 0 0 2.59063 0 5.775V58.225C0 61.4094 2.59063 64 5.775 64H36.975C40.1594 64 42.75 61.4094 42.75 58.225V5.775C42.75 2.59063 40.1592 0 36.975 0ZM39 58.225C39 59.3416 38.0915 60.25 36.975 60.25H5.775C4.65838 60.25 3.75 59.3416 3.75 58.225V5.775C3.75 4.65838 4.65838 3.75 5.775 3.75H11.3225C12.0965 5.93237 14.1806 7.5 16.625 7.5H26.125C28.5694 7.5 30.6535 5.93237 31.4275 3.75H36.975C38.0916 3.75 39 4.65838 39 5.775V58.225Z" fill="#1A64C6" />
                                    <path d="M58.375 48.125H27.1249C24.0234 48.125 21.5 45.6016 21.5 42.5V34.875L29.4468 29.8431L21.5 23.625V23C21.5 19.8984 24.0234 17.375 27.1249 17.375H58.375C61.4766 17.375 64 19.8984 64 23V23.625L58.7075 29.1196L64 34.875V42.5C64 45.6016 61.4766 48.125 58.375 48.125Z" fill="#FFD12E" />
                                    <path d="M64 34.875H21.5V23.625H64V34.875Z" fill="#FF7D05" />
                                </svg>

                                <h6 className="text-2xl font-bold leading-[1.2]">
                                    Already applied but fee <br /> not paid?
                                </h6>
                            </div>
                            <Link href="/pay-msat-fee">
                                <button
                                    type="button"
                                    className="w-max items-center flex gap-[10px] bg-Secondary-Shade_1 text-white py-3 px-6 rounded-full font-semibold hover:bg-Secondary-Shade_1 transition text-lg"
                                >
                                    Pay M-SAT Fee <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.0625 13.0107L10.5378 8.48623L6.01333 4.01088" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>

                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>




            {/* Benefits of MSAT */}
            <div className=" w-screen bg-Secondary-Shade_1 text-white ">
                <div className="container flex flex-col gap-[40px] spacing-xy" >
                    <div className='flex flex-col gap-[16px] w-[643px] '>
                        <h2 className='text-3xl font-bold dark:text-white leading-none '>Benefits of M-SAT</h2>
                    </div>
                    <div className="flex flex-col gap-[24px]">
                        <div className="gap-[10px] grid grid-cols-2">
                            {benefitsOfMsat.map((data) => (

                                <div key={data.id} className=' flex py-[40px] gap-[24px] '>

                                    <div className='flex h-[84px]'>
                                        <img src={data.icon} alt="" />
                                    </div>
                                    <div className="flex flex-col gap-[12px]">
                                        <h6 className="font-bold text-lg">{data.title}</h6>
                                        <p className="text-sm max-w-[415px]">{data.text}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>

            {/* MSAT */}
            {/* <div className="pt-[120px]">

                <div className="flex w-100 bg-[url('/images/bg/msat-cta-bg.png')] bg-cover spacing-xy text-white items-center">
                    <div className="container flex flex-col gap-8">
                        <div className="flex flex-col gap-2 max-w">
                            <p className="text-lg font-bold py-1 px-3 w-max rounded-xl bg-[#FF7D05]">
                                Get Scholarship upto 100%
                            </p>
                            <h1 className="font-bold text-[155px] leading-none">
                                MSAT
                            </h1>
                            <p className="py-2 text-xl border-t-2 border-b-2 bordr-white w-max">
                                Matrix Scholarship Application Test
                            </p>

                        </div>
                        <button className='text-lg btn border-none bg-black rounded-full text-white py-3 px-6 w-max'>Register Now ›</button>
                    </div>
                </div>
            </div> */}

            {/* Testimonials */}

            <div className='container spacing-xy'>
                <div className="flex flex-col gap-10">
                    <h2 className="text-3xl font-bold text-center">
                        Testimonials
                    </h2>

                    <div className="grid grid-cols-3 gap-4">

                        <TestimonialSection />
                    </div>
                </div>
            </div>
            <ScholarshipPromoBanner />



            <Faq pageName='Scholarships' paddingClass='pt-[120px]' />
        </div>
    )
}

export default Scholarships;
