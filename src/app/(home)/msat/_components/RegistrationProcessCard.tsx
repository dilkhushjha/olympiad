import React from 'react'

const RegistrationProcessCard = ({ processData }) => {
    return (
        <div className="flex bg-white rounded-3xl pl-6 pb-4 h-[190px]">
            <img src={processData.icon} alt="" className='h-[110px]' />

            <div className=' gap-4 flex p-6 flex-col '>
                <h6 className="font-bold text-xl leading-[1.2]">
                    {processData.title}
                </h6>
                <p className="text-sm">
                    {processData.text}
                </p>
            </div>
        </div>
    )
}

export default RegistrationProcessCard