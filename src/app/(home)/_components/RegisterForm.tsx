/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from 'next/image';


const RegisterForm: React.FC = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        mobileNo: "",

    });

    const handleFormData = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);

        // Convert form data to query string
        const queryString = new URLSearchParams(formData as any).toString();

        // Redirect with query parameters
        // router.push(`/jee-advanced-rank-predictor/rank?${queryString}`);
    };

    return (
        <div>
            <div className="col w-full flex">
                <div className="bg-white p-8 rounded-3xl w-full max-w-[480px] flex flex-col gap-4">
                    <div className="
                    flex flex-col gap-4">

                        <h1 className="text-xl font-bold  text-gray-800">Register Now</h1>
                        <div className="flex flex-row gap-4 items-center">
                            <Image src={'/images/olympiad/registered-img.png'} alt="registered" height={100} width={100}></Image>
                            <p className=""><strong>10000+</strong> students have already registered.</p>
                        </div>
                        <div className="">
                            <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.56716 9.90985C4.8476 9.86979 5.22819 9.84975 5.70895 9.84975C7.23133 9.84975 8.37312 10.2904 9.13431 11.1718C9.93557 12.0131 10.3362 13.0748 10.3362 14.3568C10.3362 15.719 9.87547 16.8607 8.95403 17.7822C8.07265 18.7036 6.85073 19.1644 5.28829 19.1644C3.68578 19.1644 2.40377 18.7237 1.44226 17.8423C0.480753 16.9208 0 15.5988 0 13.8761C0 11.5524 0.701099 9.20875 2.1033 6.84505C3.50549 4.44128 5.22819 2.43814 7.27139 0.835632L8.47328 2.09761C5.8692 4.86194 4.56716 7.46602 4.56716 9.90985ZM18.6292 9.90985C18.9096 9.86979 19.2902 9.84975 19.771 9.84975C21.2934 9.84975 22.4352 10.2904 23.1963 11.1718C23.9976 12.0131 24.3982 13.0748 24.3982 14.3568C24.3982 15.719 23.9375 16.8607 23.0161 17.7822C22.1347 18.7036 20.9128 19.1644 19.3503 19.1644C17.7478 19.1644 16.4658 18.7237 15.5043 17.8423C14.5428 16.9208 14.062 15.5988 14.062 13.8761C14.062 11.5524 14.7631 9.20875 16.1653 6.84505C17.5675 4.44128 19.2902 2.43814 21.3334 0.835632L22.5353 2.09761C19.9312 4.86194 18.6292 7.46602 18.6292 9.90985Z" fill="#EDEFF2" />
                            </svg>

                        </div>
                        <p className="text-xs text-Grey-Shade_1 text-justify">I took the test in 2022 and achieved Rank 21. It evaluated my skills and talent at national level and gave me a clear idea of my weaknesses and strengths. Thank you Matrix!    </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">

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
                                    onChange={handleFormData}
                                    value={formData.mobileNo}
                                    placeholder="Enter your mobile no"
                                    className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-4">
                            <button type="submit" className="btn-secondary w-full text-white rounded-full">
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
