import React from 'react'

import LinkButton from './Elements/LinkButton'

const UnsureAboutRightCareerPath = ({ paddingClass = "py-[120px]", bannerImage = "/images/unsure-about-career.png" }) => {
    return (
        <div className={`container ${paddingClass}`}>
            <div className={` items-center border-2 rounded-3xl  flex bg-cover min-h-[480px] md:px-16 px-4`}
                style={{
                    backgroundImage: `url(${bannerImage})`,
                }}
            >

                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-[40px]">
                        <div className="text-white flex flex-col gap-[24px]">
                            <h2 className='text-2xl font-bold xl:text-4xl md:text-2xl  dark:text-white leading-none '>Unsure About the <br /> Right Career Path? </h2>
                            <p className="text-lg md:w-[640px]">
                                Unlock Your True Potential with Matrix – Transforming Students from Dreamers
                                to Achievers!
                            </p>
                        </div>
                        <div className="">
                            <LinkButton buttonText={"Talk to Counselor"} href='/contact-us' bgColor={"black"} />
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default UnsureAboutRightCareerPath