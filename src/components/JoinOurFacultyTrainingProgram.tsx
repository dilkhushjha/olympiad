import Link from 'next/link'
import React from 'react'

const JoinOurFacultyTrainingProgram = () => {
    return (
        <div>
            <div className="w-100 spacing-xy bg-[url('/images/FTP-CTA-Banner.png')] bg-cover min-h-[511px]">
                <div className="flex justify-between  container">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col  gap-[40px]">
                            <div className="text-white flex flex-col gap-[24px] w-[95%]">
                                <h2 className='text-1xl font-bold xl:text-4xl md:text-xl  dark:text-white leading-none '>Join our Faculty Training Program</h2>
                                <p className="text-lg">
                                    Be part of a dynamic team driving innovation, inspiration, and transformative impact
                                </p>
                            </div>

                            <Link className='w-max text-lg btn border-none bg-black hover:bg-[#222] rounded-full  hover:shadow-xl text-white py-3 px-6' href={'/careers/faculty-training-program'}>
                                Know More <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 12L10.5 7.5L6 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>

                            </Link>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default JoinOurFacultyTrainingProgram