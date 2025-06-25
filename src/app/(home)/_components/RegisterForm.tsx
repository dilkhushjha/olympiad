/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";


const otpData = [1, 2, 3, 4, 5, 7];

const RegisterForm = (props) => {
    const { studentFeedback } = props;

    const [formData, setFormData] = useState({
        mobileNo: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [step, setStep] = useState(1);
    const [verified, setVerified] = useState(false);
    const [otp, setOtp] = useState({
        otp_1: "",
        otp_2: "",
        otp_3: "",
        otp_4: "",
        otp_5: "",
        otp_6: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleOtpValidation = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setOtp({ ...otp, [e.target.name]: e.target.value });
    };

    const handleOtpSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const isOtpMatching = otpData.every(
            (num, index) => num === Number(otp[`otp_${index + 1}`])
        );

        if (isOtpMatching) {
            console.log("OTP Matching");
            setVerified(true);

            // Delay step transition by 3 seconds
            setTimeout(() => {
                setStep(3);
            }, 3000); // 3000 ms = 3 seconds

        } else {
            alert("OTP Mismatch! Please try again.");
        }
    };
    const handleCloseModal = () => {
        setIsSubmitted(false); // Hide modal
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.mobileNo === "") {
            alert("Please enter mobile no!");
            setIsSubmitted(false);
            setStep(1);
        } else {
            setIsSubmitted(true);
            setStep(2);
        }
    };

    const router = useRouter();

    useEffect(() => {
        if (step === 3) {
            router.push('/registration-form');
        }
    }, [step]);


    return (
        <div>
            {isSubmitted && step === 2 && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 rounded-3xl flex justify-center items-center z-50">
                    <div className="bg-white w-max rounded-3xl shadow-lg z-999">
                        <div className=" px-12 py-10 flex flex-col items-center justify-center rounded-3xl text-center gap-6 relative bg-white">
                            <button
                                onClick={handleCloseModal}
                                className="absolute top-4 right-4 text-2xl px-2 rounded text-gray-500 hover:text-red-500"
                            >
                                ×
                            </button>

                            <Image
                                src={"/images/olympiad/otp-image.png"}
                                alt="otp-image"
                                width={120}
                                height={120}
                            ></Image>

                            <form
                                onSubmit={handleOtpSubmit}
                                className="space-y-4 flex flex-col text-black"
                            >
                                <div className="flex flex-col gap-5">
                                    <h2 className="text-2xl  text-black">
                                        Please Enter OTP <br />
                                        Received on{" "}
                                        <strong>&nbsp;{"+91" + formData.mobileNo}</strong>
                                    </h2>
                                    <div className="flex flex-col gap-2 w-[460px]">
                                        <p className="text-sm text-Grey-Shade_1 text-left">
                                            Enter OTP
                                        </p>
                                        <div className="flex gap-2 text-black">
                                            <div className="flex basis-1/6">
                                                <input
                                                    name="otp_1"
                                                    type="text"
                                                    maxLength={1}
                                                    value={otp["otp_1"]}
                                                    onChange={handleOtpValidation}
                                                    className="border-2 px-6 py-4 font-bold rounded-xl w-[100%]"
                                                ></input>
                                            </div>
                                            <div className="flex basis-1/6">
                                                <input
                                                    name="otp_2"
                                                    type="text"
                                                    maxLength={1}
                                                    value={otp["otp_2"]}
                                                    onChange={handleOtpValidation}
                                                    className="border-2 px-6 py-4 font-bold rounded-xl w-[100%]"
                                                ></input>
                                            </div>
                                            <div className="flex basis-1/6">
                                                <input
                                                    name="otp_3"
                                                    type="text"
                                                    maxLength={1}
                                                    value={otp["otp_3"]}
                                                    onChange={handleOtpValidation}
                                                    className="border-2 px-6 py-4 font-bold rounded-xl w-[100%]"
                                                ></input>
                                            </div>
                                            <div className="flex basis-1/6">
                                                <input
                                                    name="otp_4"
                                                    type="text"
                                                    maxLength={1}
                                                    value={otp["otp_4"]}
                                                    onChange={handleOtpValidation}
                                                    className="border-2 px-6 py-4 font-bold rounded-xl w-[100%]"
                                                ></input>
                                            </div>
                                            <div className="flex basis-1/6">
                                                <input
                                                    name="otp_5"
                                                    type="text"
                                                    maxLength={1}
                                                    value={otp["otp_5"]}
                                                    onChange={handleOtpValidation}
                                                    className="border-2 px-6 py-4 font-bold rounded-xl w-[100%]"
                                                ></input>
                                            </div>
                                            <div className="flex basis-1/6">
                                                <input
                                                    name="otp_6"
                                                    type="text"
                                                    maxLength={1}
                                                    value={otp["otp_6"]}
                                                    onChange={handleOtpValidation}
                                                    className="border-2 px-6 py-4 font-bold rounded-xl w-[100%] text-black"
                                                ></input>
                                            </div>
                                        </div>
                                        <p className="text-sm text-left">
                                            You can resend OTP in 30 seconds
                                        </p>
                                    </div>
                                </div>
                                <div className="pt-4">
                                    {!verified && (
                                        <button
                                            type="submit"
                                            className="w-max flex gap-3 items-center mx-auto bg-Primary-Shade_1 text-white py-3 px-6 rounded-full font-semibold hover:bg-green-700 transition text-lg"
                                        >



                                            Verify OTP <svg
                                                width="7"
                                                height="12"
                                                viewBox="0 0 7 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 10.5L5.5 6L1 1.5"
                                                    stroke="white"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        </button>
                                    )}
                                    {verified && (
                                        <button
                                            type="submit"
                                            className="w-max flex gap-3 items-center mx-auto bg-Primary-Shade_1 text-white py-3 px-6 rounded-full font-semibold hover:bg-green-700 transition text-lg"
                                        >



                                            OTP Verified <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8.5" cy="8.5" r="6" fill="white" />
                                                <path d="M6 8.5L8 10.5L11.5 6.5" stroke="#02824F" stroke-width="1.5" stroke-linecap="round" />
                                            </svg>

                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            <div className="">
                <div className="bg-white p-8 rounded-3xl max-w-[480px] flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1  transition-all duration-500 ease-in-out">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-xl font-bold  text-gray-800">Register Now</h1>
                        <div className="flex flex-row gap-4 items-center">
                            <Image
                                src={"/images/olympiad/registered-img.png"}
                                alt="registered"
                                height={100}
                                width={100}
                            ></Image>
                            <p className="text-black">
                                <strong>10000+</strong> students have already registered.
                            </p>
                        </div>
                        {studentFeedback && (
                            <>
                                <div className="">
                                    <svg
                                        width="25"
                                        height="20"
                                        viewBox="0 0 25 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4.56716 9.90985C4.8476 9.86979 5.22819 9.84975 5.70895 9.84975C7.23133 9.84975 8.37312 10.2904 9.13431 11.1718C9.93557 12.0131 10.3362 13.0748 10.3362 14.3568C10.3362 15.719 9.87547 16.8607 8.95403 17.7822C8.07265 18.7036 6.85073 19.1644 5.28829 19.1644C3.68578 19.1644 2.40377 18.7237 1.44226 17.8423C0.480753 16.9208 0 15.5988 0 13.8761C0 11.5524 0.701099 9.20875 2.1033 6.84505C3.50549 4.44128 5.22819 2.43814 7.27139 0.835632L8.47328 2.09761C5.8692 4.86194 4.56716 7.46602 4.56716 9.90985ZM18.6292 9.90985C18.9096 9.86979 19.2902 9.84975 19.771 9.84975C21.2934 9.84975 22.4352 10.2904 23.1963 11.1718C23.9976 12.0131 24.3982 13.0748 24.3982 14.3568C24.3982 15.719 23.9375 16.8607 23.0161 17.7822C22.1347 18.7036 20.9128 19.1644 19.3503 19.1644C17.7478 19.1644 16.4658 18.7237 15.5043 17.8423C14.5428 16.9208 14.062 15.5988 14.062 13.8761C14.062 11.5524 14.7631 9.20875 16.1653 6.84505C17.5675 4.44128 19.2902 2.43814 21.3334 0.835632L22.5353 2.09761C19.9312 4.86194 18.6292 7.46602 18.6292 9.90985Z"
                                            fill="#EDEFF2"
                                        />
                                    </svg>
                                </div>
                                <p className="text-xs text-Grey-Shade_1 text-justify">
                                    I took the test in 2022 and achieved Rank 21. It evaluated my
                                    skills and talent at national level and gave me a clear idea
                                    of my weaknesses and strengths. Thank you Matrix!{" "}
                                </p>
                            </>
                        )}
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control mt-3">
                            {/* Phone Input Group */}
                            <div className="flex items-center rounded-lg border border-gray-300 hover:border-gray-500 focus-within:border-gray-500 px-4 py-3 transition-colors w-full max-w-md gap-2">
                                {/* Flag Image */}
                                <Image
                                    src="/images/olympiad/flag.png"
                                    alt="India Flag"
                                    className="w-6 h-4 object-cover rounded-sm"
                                    width={24}
                                    height={16}
                                />

                                {/* Country Code */}
                                <span className="text-gray-600 text-sm font-medium">+91</span>

                                {/* Divider */}
                                <div className="h-5 w-px bg-gray-300 mx-2" />

                                {/* Phone Number Input */}
                                <input
                                    name="mobileNo"
                                    type="tel"
                                    onChange={handleChange}
                                    value={formData.mobileNo}
                                    placeholder="Enter your mobile no"
                                    className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
                                    required
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-4 form-control">
                            <button
                                type="submit"
                                className="btn-secondary w-full text-white rounded-full"
                                onClick={handleSubmit}
                            >
                                GET OTP
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
