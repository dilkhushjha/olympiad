import React from 'react'
import InfoCard from './InfoCard'

const KeyBenefits = ({ keyBenefitsData }) => {
    return (
        <div>
            <div className="">
                <div className="container spacing-xy">
                    <h2 className=" text-3xl font-bold leading-[1.25] w-[60%] mb-10">
                        Key Benefits of JEE College and Branch Predictor
                    </h2>
                    <div className="flex  flex-wrap gap-4">
                        {keyBenefitsData.map((data) => (
                            <div key={data.id} className="w-[32%]">
                                <InfoCard
                                    data={data}
                                    bgColor="bg-Secondary-Shade_5 border-0"
                                    circleColor="bg-[#E0EEFF]"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KeyBenefits