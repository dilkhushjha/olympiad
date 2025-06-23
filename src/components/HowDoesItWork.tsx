import React from 'react'

const HowDoesItWork = ({ hdiwData }) => {
    return (
        <div>
            {/* How does it work */}

            <div className="w-screen bg-Primary-Shade_1 h-[578px]">
                <div className="container spacing-xy">
                    <h2 className="text-3xl font-bold text-white leading-none mb-10 text-center ">
                        How Does it Work?
                    </h2>
                    <div className="flex gap-4">
                        {hdiwData.map((data) => (
                            <div key={data.id} className="basis-1/4  text-white">
                                <div className="p-4 pb-0 text-center">
                                    <div
                                        className="pb-6 flex justify-center"
                                        dangerouslySetInnerHTML={{ __html: data.icon }}
                                    />
                                    <h6 className="text-xl font-bold pb-4 leading-[1.25]">
                                        {data.title}
                                    </h6>
                                    <p className="text-sm">{data.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowDoesItWork