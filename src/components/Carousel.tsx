/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Carousel = ({ data }: any) => {
    const carouselRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const totalItems = data.length; // Dynamically get the number of carousel items

    useEffect(() => {
        // Autoplay function
        const autoplay = () => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
        };

        // Set autoplay interval (5 seconds)
        const interval = setInterval(autoplay, 10000);

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, [totalItems]);

    // Update the carousel position based on the active index
    useEffect(() => {
        const carousel = carouselRef.current as HTMLElement | null;
        if (carousel) {
            const itemWidth = carousel.clientWidth; // Width of one carousel item
            const offset = -activeIndex * itemWidth; // Calculate the offset
            carousel.style.transform = `translateX(${offset}px)`; // Apply the transform
        }
    }, [activeIndex]);

    return (
        <div className="w-full mx-auto overflow-hidden relative">
            {/* Carousel Container */}
            <div
                ref={carouselRef}
                className="h-[380px] flex transition-transform duration-500 ease-in-out rounded-3xl"
            >
                {data.map((item: any) => (
                    <div key={item.id} className="carousel-item w-full flex-shrink-0 rounded-3xl shadow">
                        <Image height={382} width={1166} src={item.url} alt={item.alt} className="w-full rounded-3xl " quality={100} loading="lazy" />
                    </div>
                ))}
            </div>

            {/* Indicator Dots */}
            <div className="flex justify-center gap-2 mt-4">
                {Array.from({ length: totalItems }).map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-[#168458]" : "bg-[#16845866]"
                            }`}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;