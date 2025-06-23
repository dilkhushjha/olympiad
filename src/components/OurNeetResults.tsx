import { Link } from 'lucide-react'
import React from 'react'
import Carousel from "@/components/Carousel";


const carouselData = [
    {
        id: "item1",
        url: "/images/neet-results.png",
    },
    {
        id: "item2",
        url: "/images/download-neet.png",
    },
    {
        id: "item3",
        url: "/images/neet-results.png",
    },
    {
        id: "item4",
        url: "/images/download-neet.png",
    },
];


const OurNeetResults = () => {
    return (
        <div className="">
            <div className="container">
                <div className="flex justify-between pb-[40px]">
                    <div className="title">
                        <h2 className="text-3xl font-bold dark:text-white leading-none pb-2">
                            Our NEET Results 2024
                        </h2>
                        <p className="text-sm">
                            Our results reflect the passion, hard work and efforts of our
                            students and teachers.
                        </p>
                    </div>
                    <div className="flex flex-col justify-end">
                        <Link
                            href={"/results"}
                            className="btn-secondary text-white border-none rounded-3xl  px-[1.5rem] bottom-0"
                        >
                            View All Results ›
                        </Link>
                    </div>
                </div>
                <Carousel data={carouselData} />
            </div>
        </div>
    )
}

export default OurNeetResults