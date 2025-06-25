'use client'; // only for App Router
import { ChevronLeft } from 'lucide-react';
import { useEffect, useState } from 'react';

const Step3 = ({ onNext, onBack }: { onNext: () => void, onBack: () => void }) => {

    const [studyingAtMatrix, setStudyingAtMatrix] = useState<boolean | null>(null);
    const [planningHostel, setPlanningHostel] = useState<boolean | null>(null);
    const [admissionNextYear, setAdmissionNextYear] = useState<boolean | null>(null);
    const [address, setAddress] = useState('');
    const [pincode, setPincode] = useState('');
    const [planNextYear, setPlanNextYear] = useState('');
    const [nextYear, setNextYear] = useState(false);

    const academicOptions = [
        'Next year, we will continue with current school / coaching',
        'We are planning for a better school / coaching for next year',
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ studyingAtMatrix, planningHostel, address, pincode, planNextYear });

        onNext();
    };


    useEffect(() => {
        setNextYear(
            planNextYear === 'We are planning for a better school / coaching for next year'
        );
    }, [planNextYear]);

    return (

        <div className="">

            <button type="button" onClick={onBack} className="mb-4 flex items-center text-gray-600 hover:text-black">
                <ChevronLeft className="w-5 h-5 mr-1" /> Back
            </button>

            <div className=" bg-white justify-between flex flex-col md:flex-row items-start md:items-stretch  gap-[60px]">
                {/* Left Section */}

                <div className=" xl:basis-1/2 ">
                    <div className="flex flex-col gap-6">


                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                                A Few Details <br /> to Finish
                            </h2>
                            <div
                                className="relative w-10 h-10 mt-2 px-5 py- rounded-full flex items-center justify-center text-sm font-semibold text-Grey-Shade_1 "
                                style={{
                                    background: `conic-gradient(#02824f 0% 90%, #f8f8f8 90% 100%)`,
                                }}
                            >
                                <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                                    3/3
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <p className="font-bold text-[20px] mb-2 w-[60%]">
                                Are you currently studying at Matrix High School?
                            </p>
                            <div className="flex gap-4">
                                {/* Yes Button */}
                                <button
                                    type="button"
                                    onClick={() => setStudyingAtMatrix(true)}
                                    className={`px-4 py-1 rounded-full border flex items-center gap-2 ${studyingAtMatrix
                                        ? 'border-Primary-Shade_1 text-Primary-Shade_1'
                                        : 'bg-white text-gray-700 border-gray-300'
                                        }`}
                                >
                                    Yes
                                    {studyingAtMatrix && (
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

                                {/* No Button */}
                                <button
                                    type="button"
                                    onClick={() => setStudyingAtMatrix(false)}
                                    className={`px-4 py-2 rounded-full border flex items-center gap-2 ${studyingAtMatrix === false
                                        ? 'border-Primary-Shade_1 text-Primary-Shade_1'
                                        : 'bg-white text-gray-700 border-gray-300'
                                        }`}
                                >
                                    No
                                    {studyingAtMatrix === false && (
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

                            </div>
                        </div>


                        <div className=" flex flex-col gap-3">
                            <p className="font-bold text-[20px] mb-2 w-[80%]">
                                Are you planning to admit your ward in a school/coaching with hostel facilities?
                            </p>
                            <div className="flex gap-2">
                                {/* Yes Button */}
                                <button
                                    type="button"
                                    onClick={() => setPlanningHostel(true)}
                                    className={`px-4 py-2 rounded-full border flex items-center gap-2 ${planningHostel
                                        ? 'border-Primary-Shade_1 text-Primary-Shade_1'
                                        : 'bg-white text-gray-700 border-gray-300'
                                        }`}
                                >
                                    Yes
                                    {planningHostel && (
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

                                {/* No Button */}
                                <button
                                    type="button"
                                    onClick={() => setPlanningHostel(false)}
                                    className={`px-4 py-1 rounded-full border flex items-center gap-2 ${planningHostel === false
                                        ? 'border-Primary-Shade_1 text-Primary-Shade_1'
                                        : 'bg-white text-gray-700 border-gray-300'
                                        }`}
                                >
                                    No
                                    {planningHostel === false && (
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

                            </div>
                        </div>

                        {nextYear && (
                            <div className=" flex flex-col gap-3">
                                <p className="font-bold text-[20px] mb-2 w-[80%]">
                                    Do you want someone from Matrix, Sikar to contact you regarding your ward’s admission for next year?
                                </p>
                                <div className="flex gap-2">
                                    {/* Yes Button */}
                                    <button
                                        type="button"
                                        onClick={() => setAdmissionNextYear(true)}
                                        className={`px-4 py-2 rounded-full border flex items-center gap-2 ${admissionNextYear
                                            ? 'border-Primary-Shade_1 text-Primary-Shade_1'
                                            : 'bg-white text-gray-700 border-gray-300'
                                            }`}
                                    >
                                        Yes
                                        {admissionNextYear && (
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

                                    {/* No Button */}
                                    <button
                                        type="button"
                                        onClick={() => setAdmissionNextYear(false)}
                                        className={`px-4 py-1 rounded-full border flex items-center gap-2 ${admissionNextYear === false
                                            ? 'border-Primary-Shade_1 text-Primary-Shade_1'
                                            : 'bg-white text-gray-700 border-gray-300'
                                            }`}
                                    >
                                        No
                                        {admissionNextYear === false && (
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

                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Section */}
                <form onSubmit={handleSubmit} className="w-full md:w-1/2  bg-Primary-Shade_7 p-8 rounded-3xl flex flex-col gap-6 ">
                    <h3 className="text-lg font-bold ">Enter Details</h3>

                    <div className="flex flex-col gap-2 ">
                        <label className="block text-sm text-Grey-Shade_1">Verify Address</label>
                        <input
                            type="text"
                            placeholder="Enter your complete address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full border rounded-lg px-4 py-4 text-sm"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2 ">
                        <label className="block text-sm text-Grey-Shade_1">Pincode</label>
                        <input
                            type="text"
                            placeholder="Enter your pincode"
                            value={pincode}
                            onChange={(e) => setPincode(e.target.value)}
                            className="w-full rounded-lg border px-4 py-4 text-sm"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2 ">
                        <label className="block text-sm text-Grey-Shade_1">
                            What&apos;s your academic plan for next year?
                        </label>
                        <select
                            value={planNextYear}
                            onChange={(e) => setPlanNextYear(e.target.value)}
                            className="w-full border rounded-lg px-4 py-4 text-sm text-Grey-Shade_1"
                            required
                        >
                            <option value="" disabled>
                                Enter or Select from the drop down
                            </option>
                            {academicOptions.map((opt, idx) => (
                                <option key={idx} value={opt}>
                                    {opt}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="btn-secondary text-white mt-4 px-6 py-2 rounded-md font-medium text-sm"
                    >
                        Save and Next
                    </button>
                </form>
            </div>
        </div>


    );
}

export default Step3;
