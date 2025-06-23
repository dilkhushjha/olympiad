"use client";
import Image from "next/image";
import React from "react";
import AdmissionRequestModal from "./RegisterNow";
import { useAppContext } from "@/lib/AppContext";
import Link from "next/link";

const Footer = () => {

    return (
        <>
            <footer className="bg-[#13488E] py-10 text-white">
                <div className="container mx-auto">
                    <div className="flex gap-4">
                        <Image src={"/images/olympiad/logo-white.png"} alt="logo" width={180} height={100} ></Image>
                    </div>
                    <div className="py-2 pl-2 ">
                        <p>Piprali Road, Sikar (Raj.)</p>
                    </div>

                </div>
            </footer>

        </>
    );
};

export default Footer;
