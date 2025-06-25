import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const classes = ['5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'];
const subjects = ['Arts', 'Maths', 'Bio', 'Commerce'];
const boards = ['CBSE', 'ICSE', 'RBSE', 'Bihar', 'UP', 'Punjab', 'MP', 'Haryana', 'J&K'];
const goals = ['Engineering', 'Medical', 'Civil Services', 'Commerce', 'Others'];


const Step1 = ({ onNext }: { onNext: () => void }) => {

    const [isSelected, setIsSelected] = useState(false);

    const [formData, setFormData] = useState({
        class: '',
        subject: '',
        board: '',
        goal: '',
        name: '',
        email: '',
        whatsapp: '',
        dobDay: '',
        dobMonth: '',
        dobYear: '',
        fatherName: '',
        fatherOccupation: '',
        fatherMobile: '',
        school: ''
    });



    const handleSelect = (field: string, value: string) => {
        setIsSelected(!isSelected);
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
        console.log(formData);
    };


    const router = useRouter();

    const goToHome = () => {
        router.push('/');
    };
    return (
        <div>
            <button type="button" onClick={goToHome} className="mb-4 flex items-center text-gray-600 hover:text-black">
                <ChevronLeft className="w-5 h-5 mr-1" /> Back
            </button>
            <form onSubmit={handleSubmit} className="flex gap-12 justify-between">

                {/* Left: Selection Buttons */}
                <div className=' flex  basis-1/2'>

                    <div>




                        <h2 className="text-2xl  md:text-[44px] font-bold mb-10">Please Complete <br /> your profile</h2>

                        <div className="space-y-4 w-[75%] flex flex-col gap-4">
                            <div className='flex flex-col gap-2'>
                                <p className="font-bold mb-2">Select Class</p>
                                <div className="flex flex-wrap gap-2">
                                    {classes.map(item => (
                                        <button
                                            type="button"
                                            key={item}
                                            onClick={() => handleSelect('class', item)}
                                            className={`px-4 py-2 rounded-full border text-sm font-medium flex items-center gap-2 ${formData.class === item
                                                ? 'text-Primary-Shade_2 border-Primary-Shade_2'
                                                : 'bg-white text-gray-600 border-gray-300'
                                                }`}
                                        >
                                            {item}
                                            {formData.class === item && (
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

                            <div className='flex flex-col gap-2'>
                                <p className="font-semibold mb-2">Select Subject</p>
                                <div className="flex flex-wrap gap-2">
                                    {subjects.map(item => (
                                        <button
                                            type="button"
                                            key={item}
                                            onClick={() => handleSelect('subject', item)}
                                            className={`px-4 py-2 rounded-full border text-sm font-medium flex items-center gap-2 ${formData.subject === item
                                                ? 'text-Primary-Shade_2 border-Primary-Shade_2'
                                                : 'bg-white text-gray-600 border-gray-300'
                                                }`}
                                        >
                                            {item}
                                            {formData.subject === item && (
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

                            <div className='flex flex-col gap-2'>
                                <p className="font-semibold mb-2">Select Education Board</p>
                                <div className="flex flex-wrap gap-2">
                                    {boards.map(item => (
                                        <button
                                            type="button"
                                            key={item}
                                            onClick={() => handleSelect('board', item)}
                                            className={`px-4 py-2 rounded-full border text-sm font-medium flex items-center gap-2 ${formData.board === item
                                                ? 'text-Primary-Shade_2 border-Primary-Shade_2'
                                                : 'bg-white text-gray-600 border-gray-300'
                                                }`}
                                        >
                                            {item}
                                            {formData.board === item && (
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

                            <div className='flex flex-col gap-2'>
                                <p className="font-semibold mb-2">Select Career Goal</p>
                                <div className="flex flex-wrap gap-2">
                                    {goals.map(item => (
                                        <button
                                            type="button"
                                            key={item}
                                            onClick={() => handleSelect('goal', item)}
                                            className={`px-4 py-2 rounded-full border text-sm font-medium flex items-center gap-2 ${formData.goal === item
                                                ? 'text-Primary-Shade_2 border-Primary-Shade_2'
                                                : 'bg-white text-gray-600 border-gray-300'
                                                }`}
                                        >
                                            {item}
                                            {formData.goal === item && (
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

                    </div>


                    <div
                        className="relative w-10 h-10 mt-2 px-5 py- rounded-full flex items-center justify-center text-sm font-semibold text-Grey-Shade_1 "
                        style={{
                            background: `conic-gradient(#02824f 0% 33%, #f8f8f8 33% 100%)`,
                        }}
                    >
                        <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                            1/3
                        </div>
                    </div>


                </div>


                {/* Right: Form Inputs */}
                <div className="bg-Primary-Shade_7 rounded-3xl p-8 basis-1/2 h-max  flex flex-col gap-4">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-lg">Let us know more about you!</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs text-Grey-Shade_1">
                        {/* Full Name */}
                        <div className="flex flex-col">
                            <label htmlFor="name" className="mb-2 ">Student Name</label>
                            <input
                                name="name"
                                id="name"
                                placeholder="Enter Full Name"
                                onChange={handleChange}
                                className="border px-4 py-3 rounded-lg text-sm"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col">
                            <label htmlFor="email" className="mb-2">Email</label>
                            <input
                                name="email"
                                id="email"
                                placeholder="E.g, Rahul@gmail.com"
                                onChange={handleChange}
                                className="border px-4 py-3 rounded-lg text-sm"
                                required
                            />
                        </div>

                        {/* WhatsApp No */}
                     <div className="flex flex-col col-span-2">
                            <label htmlFor="fatherMobile" className="mb-2">Father’s Mobile No.</label>
                            <div className="flex items-center border bg-white rounded-lg px-3 py-3 text-sm">
                                <span className="text-gray-500 pr-2 border-r">+91</span>
                                <input
                                    type="tel"
                                    name="whatsapp"
                                    id="whatsapp"
                                    placeholder="Enter your WhatsApp no."
                                    onChange={handleChange}
                                    className="w-full outline-none pl-2"
                                />
                            </div>
                        </div>

                        {/* Date of Birth */}
                        <div className="flex flex-col col-span-2">
                            <label className="mb-2">Date of Birth</label>
                            <div className="flex gap-2">
                                <select
                                    name="dobDay"
                                    onChange={handleChange}
                                    className="border px-4 py-3 rounded-lg text-sm w-1/3"
                                >
                                    <option value="">Day</option>
                                    {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                                        <option key={d} value={d}>{d}</option>
                                    ))}
                                </select>
                                <select
                                    name="dobMonth"
                                    onChange={handleChange}
                                    className="border px-4 py-3 rounded-lg text-sm w-1/3"
                                >
                                    <option value="">Month</option>
                                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(m => (
                                        <option key={m} value={m}>{m}</option>
                                    ))}
                                </select>
                                <select
                                    name="dobYear"
                                    onChange={handleChange}
                                    className="border px-4 py-3 rounded-lg text-sm w-1/3"
                                >
                                    <option value="">Year</option>
                                    {Array.from({ length: 20 }, (_, i) => 2010 - i).map(y => (
                                        <option key={y} value={y}>{y}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Father's Name */}
                        <div className="flex flex-col">
                            <label htmlFor="fatherName" className="mb-2">Father’s Name</label>
                            <input
                                name="fatherName"
                                id="fatherName"
                                placeholder="Enter Name"
                                onChange={handleChange}
                                className="border px-4 py-3 rounded-lg text-sm"
                            />
                        </div>

                        {/* Father's Occupation */}
                        <div className="flex flex-col">
                            <label htmlFor="fatherOccupation" className="mb-2">Father’s Occupation</label>
                            <select
                                name="fatherOccupation"
                                id="fatherOccupation"
                                onChange={handleChange}
                                className="border px-4 py-3 rounded-lg text-sm"
                            >
                                <option value="">Select Occupation</option>

                                <option value="Teacher">Teacher</option>
                                <option value="Doctor">Doctor</option>
                                <option value="Engineer">Engineer</option>
                                <option value="Business">Business</option>
                            </select>
                        </div>

                        {/* Father's Mobile */}
                        <div className="flex flex-col">
                            <label htmlFor="fatherMobile" className="mb-2">Father’s Mobile No.</label>
                            <div className="flex items-center border bg-white rounded-lg px-3 py-3 text-sm">
                                <span className="text-gray-500 pr-2 border-r">+91</span>
                                <input
                                    type="tel"
                                    name="fatherMobile"
                                    id="fatherMobile"
                                    placeholder="Enter father's mobile no."
                                    onChange={handleChange}
                                    className="w-full outline-none pl-2"
                                />
                            </div>
                        </div>

                        {/* School */}
                        <div className="flex flex-col">
                            <label htmlFor="school" className="mb-2">Name of your School</label>
                            <input
                                name="school"
                                id="school"
                                placeholder="E.g, Matrix High School"
                                className="border px-4 py-3 rounded-lg text-sm"
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full mt-6 py-1 btn-secondary text-white font-semibold rounded-full hover:bg-green-700 transition"
                    >
                        Save and Next
                    </button>
                </div>

            </form>
        </div>
    )
};

export default Step1;


