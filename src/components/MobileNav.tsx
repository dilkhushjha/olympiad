"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { MdClose } from "react-icons/md";
import { usePathname } from "next/navigation";

export default function MobileNav({ checkForFixedNav }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [, setActiveDropdown] = useState<string | null>(null);



  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname])

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-Black p-2 z-50 fixed top-4 right-4 max-[375px]:right-8 "
      >
        {menuOpen ? <MdClose /> : <svg
          width={24}
          height={25}
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 8.5H20.5"
            stroke={checkForFixedNav ? "white" : "black"}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M10.2585 16L20.4999 16"
            stroke={checkForFixedNav ? "white" : "black"}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>}
      </button>

      {/* Fullscreen Mobile Menu */}
      <ul
        className={`fixed w-full h-screen top-0 left-0 bg-white flex flex-col justify-start items-start pt-10 px-10 z-40 transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >

        <Link href={'/about'} className="text-lg font-semibold text-start py-2">
          About
        </Link>
        <Link href={'/process'} className="text-lg font-semibold text-start py-2">
          Process
        </Link>
        <Link href={'/rewards'} className="text-lg font-semibold text-start py-2">
          Rewards
        </Link>
        <Link href={'/testimonials'} className="text-lg font-semibold text-start py-2">
          Testimonials
        </Link>
        <Link href={'/faqs'} className="text-lg font-semibold text-start py-2">
          FAQs
        </Link>


      </ul>
    </>
  );
}
