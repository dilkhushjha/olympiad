import React from 'react'
import InfoTextWithSvg from './InfoTextWithSvg'



const SyllabusCard = ({ syllabusData, cardHeightClass = "h-max" }) => {
    return (
        <div>
            <div className={`border p-6 rounded-3xl flex flex-col gap-4 min-w-[374px] bg-white ${cardHeightClass}`}>
                {/* <img src={syllabusData.img} alt="" className='w-12 h-12' /> */}
                <div
                    dangerouslySetInnerHTML={{
                        __html: `${syllabusData.img}`
                    }}
                />
                <h6 className="font-bold text-xl">
                    {syllabusData.title}
                </h6>
                {syllabusData.details.map((detail, index) => (
                    <InfoTextWithSvg key={index} item={detail} />
                ))}
            </div>
        </div >
    )
}

export default SyllabusCard