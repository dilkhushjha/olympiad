import React from 'react'

const InfoTextWithSvg = ({ item }) => {
    return (
        <div className='flex gap-2'>
            <img src="/images/Tick.png" alt="" className='max-w-[24px] max-h-[24px]' />
            <p className='text-sm'>{item}</p>
        </div>
    )
}

export default InfoTextWithSvg;