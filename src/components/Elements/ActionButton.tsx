/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'

const ActionButton = ({ buttonText, bgColor, textColor = "white", href = "#" }) => {
    return (
        <div>
            <button className={`"flex gap-2 text-lg btn border-none bg-[${bgColor}] hover:bg-[#222] rounded-full text-[${textColor}] py-3 px-6"`}>
                {buttonText} <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12L10.5 7.5L6 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>

            </button>
        </div>
    )
}

export default ActionButton