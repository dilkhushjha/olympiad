"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { navToExclude } from "@/utils/utils";

import MobileNav from "./MobileNav";

type LiProps = {
    href: string;
    children: React.ReactNode;
    isFixed: boolean;
};

export default function TopNav() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const checkForFixedNav: boolean =
        navToExclude.includes(pathname) && !isScrolled;
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);



    return (
        <>
            {!navToExclude.includes(pathname) && <Spacer />}
            <div
                className={twMerge(
                    "w-screen h-[80px] fixed top-0 left-0 z-40 border border-b-white/20 transition-all duration-300 ease-in-out",
                    isScrolled ? "bg-White border-b shadow-md" : "bg-white",
                    !checkForFixedNav && "border border-b-Grey-Sahde_4"
                )}
            >
                <nav
                    className={twMerge(
                        "container relative h-full flex justify-between items-center"
                    )}
                >
                    <Link href="/" className="max-w-[138px]">
                        {checkForFixedNav ? (
                            <Image
                                height={25}
                                width={140}
                                src="/images/olympiad/logo.png"
                                alt=""
                                quality={100}
                            />
                        ) : (
                            <Image
                                height={25}
                                width={140}
                                src="/images/olympiad/logo.png"
                                alt=""
                                quality={100}
                            />
                        )}
                    </Link>
                    <ul className="md:flex gap-12 mr-4 h-full hidden font-semibold ">
                        <Li href="/#about" isFixed={checkForFixedNav}>
                            <div tabIndex={0} role="button">About</div>
                        </Li>
                        <Li href="/#process" isFixed={checkForFixedNav}>
                            <div tabIndex={0} role="button">Process</div>
                        </Li>
                        <Li href="/#rewards" isFixed={checkForFixedNav}>
                            <div tabIndex={0} role="button">Rewards</div>
                        </Li>
                        <Li href="/#testimonials" isFixed={checkForFixedNav}>
                            <div tabIndex={0} role="button">Testimonials</div>
                        </Li>
                        <Li href="/#faqs" isFixed={checkForFixedNav}>
                            <div tabIndex={0} role="button">FAQs</div>
                        </Li>

                    </ul>


                    <div className="action flex gap-6 max-h-[38px] items-center">

                        <div className="md:block hidden text-Primary-Shade_1">
                            <h6>TALK TO US</h6>
                            <Link href="tel:+9101572241911">
                                <p className="font-semibold">+91-01572 241911</p>
                            </Link>
                        </div>
                        <div className="md:hidden gap-6 block ml-4">
                            <MobileNav checkForFixedNav={checkForFixedNav} />
                        </div>

                    </div>
                </nav>
            </div>
        </>
    );
}

const Li = ({ href, children, isFixed = false }: LiProps) => {
    return (
        <li
            className={twMerge(
                "flex items-center font-regular",
                isFixed ? "text-black" : "text-black"
            )}
        >
            {href === "#" ? (
                <div className="dropdown dropdown-hover h-full flex items-center">
                    {children}
                    <span>
                        <svg
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4 6.5L8.5 11L13 6.5"
                                stroke={isFixed ? "white" : "black"}
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </span>
                </div>
            ) : (
                <a href={href}>{children}</a>
            )}
        </li>
    );
};


const Spacer = () => {
    return <span className="w-4 block relative h-[140px]"></span>;
};
