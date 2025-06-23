"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { navToExclude } from "@/utils/utils";
import NavigationMenu from "./NavigationMenu";
import { BiChevronRight } from "react-icons/bi";
import { navigation } from "@/lib/constants";
import { uniqueId } from "lodash";
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

  useEffect(() => {
    const dropdown = document.querySelector(".dropdown") as HTMLElement;
    if (dropdown) {
      dropdown.style.pointerEvents = "none"; // Disable hover effect

      setTimeout(() => {
        dropdown.style.pointerEvents = "auto"; // Re-enable after transition
      }, 200); // Adjust timing as needed
    }
  }, [pathname]);

  return (
    <>
      {!navToExclude.includes(pathname) && <Spacer />}
      <div
        className={twMerge(
          "w-screen h-[80px] fixed top-0 left-0 z-40 border border-b-white/20 transition-all duration-300 ease-in-out",
          isScrolled ? "bg-White border-b shadow-md" : "bg-trasparent",
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
          <ul className="md:flex gap-6 text-white mr-4 h-full hidden">
            {navigation.map((item, index) => (
              <Li key={index} href={item.path} isFixed={checkForFixedNav}>
                {item.children !== undefined ? (
                  <>
                    <div tabIndex={0} role="button" className="">
                      {item.name}
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content !text-Black menu bg-base-100 rounded-box !z-[9999] min-w-52 p-2 shadow !top-[75px] !flex !flex-row !flex-nowrap before:none"
                    >
                      {item.children.map((child, index) => (
                        <li className="w-[190px]" key={'second-' + index}>
                          <span>{child.name}</span>

                          <ul className="ml-0 p-0 text-Grey-Shade_1 b-0" key={uniqueId('second-level')}>
                            {child.links.map((link, index) =>
                              link.children !== undefined ? (
                                <li key={'third-' + index}>
                                  <ul className="ml-0 p-0 text-gray-600">
                                    {/* ✅ First Level - JEE Main */}
                                    <li className=" group">
                                      <span className="cursor-pointer flex justify-between">
                                        {link.name}
                                        <BiChevronRight
                                          className="text-Grey-Shade_1 ml-auto"
                                          size={16}
                                        />
                                      </span>

                                      {/* 🔹 Second Level Dropdown */}
                                      <div className="absolute left-[98%] top-0 hidden group-hover:flex group-hover:pointer-events-auto hover:bg-transparent active:!bg-transparent active:!text-inherit">
                                        <ul className="relative bg-white shadow-lg rounded-lg w-56 p-2 flex-col ml-0">
                                          {link.children.map((item, index) => (
                                            <li
                                              key={'fourth-' + index}
                                              className="rounded active:!bg-transparent active:!text-inherit"
                                            >
                                              <Link
                                                href={link.path + item.path}
                                                className=" focus:outline-none active:!bg-transparent active:!text-inherit "
                                              >
                                                {item.name}
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </li>
                                  </ul>
                                </li>
                              ) : (
                                <li key={index}>
                                  <Link href={link.path}>{link.name}</Link>
                                </li>
                              )
                            )}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  item.name
                )}
              </Li>
            ))}
          </ul>


          <div className="action flex gap-6 max-h-[38px] items-center">

            <div className="md:block hidden">
              <NavigationMenu checkForFixedNav={checkForFixedNav} />
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

const Li = ({ href, children, isFixed }: LiProps) => {
  return (
    <li
      className={twMerge(
        "flex items-center font-semibold",
        isFixed ? "text-White" : "text-Black"
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
  return <span className="w-4 block relative h-[160px]"></span>;
};
