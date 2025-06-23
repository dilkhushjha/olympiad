import Link from 'next/link'
import React from 'react'

const LinkButton = ({ buttonText, bgColor, textColor = "white", hoverColor = "#222", href = "#" }) => {
    return (
        <div className='text-white'>

            <Link href={href} className={`"flex gap-2 text-lg btn border-none bg-${bgColor} hover:bg-${hoverColor} rounded-full text-${textColor} py-3 px-6"`}>
                {buttonText} <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12L10.5 7.5L6 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>

            </Link>
        </div>
    )
}

export default LinkButton