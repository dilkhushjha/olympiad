import React from 'react'
import VideoFrame from '@/components/VideoFrame'

const WhatToppersHaveToSay = () => {
    return (
        <div className="w-screen bg-[#02824F] min-h-[578px]">
            <div className="container spacing-xy">

                <h2 className='text-3xl font-bold text-white leading-none pb-10 text-center '>Watch what our toppers have to say!</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <VideoFrame thumbnail='/images/sikar-girl.png' />
                <VideoFrame thumbnail='/images/about-matrix-video.png' />
                <VideoFrame thumbnail='/images/sikar-girl.png' />
                </div>
            </div>

        </div>
    )
}

export default WhatToppersHaveToSay