'use client'

import { useState } from 'react';

import { ChevronLeft } from 'lucide-react';


const Step2 = ({ onNext, onBack }: { onNext: () => void, onBack: () => void }) => {

    const [examMode, setExamMode] = useState<'Online' | 'Offline'>('Offline');
    const [formData, setFormData] = useState({
        state: '',
        district: '',
        centre: '',
        date: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
        console.log({ examMode, ...formData });
    };



    return (

        <div className=" pb-[20px] min-h-[400px] flex flex-col gap-10">
            <button type="button" onClick={onBack} className=" flex items-center text-Grey-Shade_1 text-2xl hover:text-black">
                ←
            </button>
            <form onSubmit={handleSubmit} className="flex flex-col xl:flex-row gap-10 justify-between ">

                {/* Left Section - Exam Mode */}
                <div className='flex flex-col gap-10 basis-1/2 '>
                    <div className="flex justify-between items-start">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                            Select Your Exam Preferences
                        </h2>
                        <div
                            className="relative w-10 h-10 mt-2 px-5 py- rounded-full flex items-center justify-center text-sm font-semibold text-Grey-Shade_1 "
                            style={{
                                background: `conic-gradient(#02824f 0% 66%, #f8f8f8 66% 100%)`,
                            }}
                        >
                            <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                                2/3
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <label className="font-semibold text-Grey-Shade_1 mb-2 block">
                            Select Exam Mode
                        </label>
                        <div className="flex gap-4">
                            {['Online', 'Offline'].map(mode => (
                                <button
                                    type="button"
                                    key={mode}
                                    onClick={() => setExamMode(mode as 'Online' | 'Offline')}
                                    className={`px-4 py-2 rounded-full border text-sm  flex items-center gap-2 ${examMode === mode
                                        ? ' text-Primary-Shade_2 border-Primary-Shade_2 font-bold'
                                        : 'bg-white text-Grey-Shade_1 border-gray-300'
                                        }`}
                                >
                                    {mode}
                                    {examMode === mode && (
                                        <svg
                                            width="16"
                                            height="17"
                                            viewBox="0 0 16 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="8" cy="8.5" r="6" fill="#03B46E" />
                                            <path
                                                d="M5.5 8.5L7.5 10.5L11 6.5"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    )}
                                </button>
                            ))}

                        </div>
                    </div>
                </div>





                {/* Right Section - Exam Details */}

                {examMode === 'Offline' && (
                    <div className="bg-Primary-Shade_7 rounded-3xl p-10 flex flex-col gap-6  xl:min-w-[500px] hover:shadow-xl">
                        <h3 className="font-bold text-lg mb-4">
                            Choose your Exam Details
                        </h3>

                        <div className="flex flex-col gap-6 text-Grey-Shade_1">
                            <div className="flex flex-col xl:flex-row gap-4">
                                <div className='flex flex-col gap-2 col-span-1 basis-1/2'>


                                    <label> State</label>
                                    <select
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-md px-4 py-4 text-sm w-full"
                                        required
                                    >
                                        <option value="">Select State</option>
                                        <option value="Rajasthan">Rajasthan</option>
                                        <option value="Gujarat">Gujarat</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2 basis-1/2">
                                    <label> District</label>

                                    <select
                                        name="district"
                                        value={formData.district}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-md px-4 py-4 text-sm w-full"
                                        required
                                    >
                                        <option value="">Select District</option>
                                        <option value="Jodhpur">Jodhpur</option>
                                        <option value="Ahmedabad">Ahmedabad</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex flex-col xl:flex-row gap-4">


                                <div className="flex flex-col gap-2 basis-1/2">
                                    <label> Test Centre</label>
                                    <select
                                        name="centre"
                                        value={formData.centre}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-md px-4 py-4 text-sm w-full"
                                        required
                                    >
                                        <option value="">Select Test Centre</option>
                                        <option value="Matrix Jodhpur">Matrix Jodhpur</option>
                                    </select>
                                </div>

                                <div className="flex flex-col gap-2 basis-1/2">
                                    <label> Exam Date</label>

                                    <select
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-md px-4 py-4 text-sm w-full"
                                        required
                                    >
                                        <option value="">Select Exam Date</option>
                                        <option value="2025-07-15">15 July 2025</option>
                                        <option value="2025-07-20">20 July 2025</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="w-full mt-5 py-3 btn-secondary text-white font-semibold rounded-full hover:bg-green-700 transition"
                        >
                            Save and Next
                        </button>
                    </div>)}


                {examMode === 'Online' && (
                    <div className="bg-Primary-Shade_7 rounded-3xl p-10 flex flex-col gap-6 xl:min-w-[500px] hover:shadow-xl">
                        <h3 className="font-bold text-lg mb-4">
                            Choose your Exam Details
                        </h3>


                        <div className="flex flex-col gap-2 basis-1/2 text-Grey-Shade_1">
                            <label> Exam Date</label>

                            <select
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-md px-4 py-4 text-sm w-full"
                                required
                            >
                                <option value="">Select Exam Date</option>
                                <option value="2025-07-15">15 July 2025</option>
                                <option value="2025-07-20">20 July 2025</option>
                            </select>
                        </div>


                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="w-full mt-5 py-3 btn-secondary text-white font-semibold rounded-full hover:bg-green-700 transition"
                        >
                            Save and Next
                        </button>
                    </div>
                )}


            </form>



        </div>
    );
};

export default Step2;
