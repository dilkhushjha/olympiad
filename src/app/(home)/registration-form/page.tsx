'use client';

import React, { useState } from 'react';

import Step2 from './_components/Step2';

import Step3 from './_components/Step3';
import Step1 from './_components/Step1';
import Step4 from './_components/Step4';


const StepOneProfileForm: React.FC = () => {
    const [step, setStep] = useState(1);


    const goToNext = () => setStep((prev) => prev + 1);
    const goToPrevious = () => setStep((prev) => prev - 1);


    return (
        <div className="container pb-[120px] ">


            {step === 1 && <Step1 onNext={goToNext} />}
            {step === 2 && <Step2 onNext={goToNext} onBack={goToPrevious} />}
            {step === 3 && <Step3 onNext={goToNext} onBack={goToPrevious} />}
            {/* Thank You */}
            {step === 4 && <Step4 />}

        </div>
    );
};

export default StepOneProfileForm;
