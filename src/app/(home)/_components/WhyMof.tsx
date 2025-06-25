import React from 'react'
import BenefitCardSection from './BenefitCard'

const WhyMof = () => {
    return (
        <div>
            <div className="flex gap-10 flex-col">
                <div className="flex flex-col gap-3 mx-auto text-center">
                    <p className="text-xl text-Secondary-Shade_2 font-semibold">Why MOF</p>
                    <h2 className="text-2xl xl:text-3xl md:text-2xl font-bold">Why Should You <br />
                        Take the Matrix Olympiad(MOF)</h2>
                </div>
                <div className="mx-auto">
                    <BenefitCardSection />
                </div>
            </div>
        </div>
    )
}

export default WhyMof