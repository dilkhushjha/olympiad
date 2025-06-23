import React from 'react'

const PageNumber = () => {
    return (
        <div>
            <div id="pageNumbers" className="flex container pt-[32px] pb-[120px]">
                <div className="flex m-auto gap-2">
                    <div className="flex text-center items-center border rounded w-[32px] h-[32px] bg-Grey-Shade_2">
                        <button className='m-auto font-bold text-Grey-Shade_3 text-sm'>‹</button>
                    </div>

                    <div className="flex text-center items-center border border-Primary-Shade_1 rounded w-[32px] h-[32px]">
                        <div className='m-auto font-bold text-Primary-Shade_1'>1</div>
                    </div>
                    <div className="flex text-center items-center border hover:border-Primary-Shade_1 hover:text-Primary-Shade_1 rounded w-[32px] h-[32px]">
                        <div className='m-auto font-bold '>3</div>
                    </div>
                    <div className="flex text-center items-center border hover:border-Primary-Shade_1 hover:text-Primary-Shade_1 rounded w-[32px] h-[32px]">
                        <div className='m-auto font-bold '>4</div>
                    </div>



                    <div className="flex text-center items-center border rounded w-[32px] h-[32px] ">
                        <button className='m-auto font-bold text-Grey-Shade_3 text-sm'>›</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PageNumber