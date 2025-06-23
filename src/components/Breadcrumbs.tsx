"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import _ from "lodash";
import { twMerge } from "tailwind-merge";
import { navToExclude } from "@/utils/utils";

interface BreadcrumbProps {
  items: { label: string; href: string }[];
  bg?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ bg = "bg-transparent" }) => {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);
  const isDark: boolean = navToExclude.includes(pathname);
  if (pathname === "/" || pathname === "/login") return null;
  return (
    <div className="absolute top-[90px] left-1/2 -translate-x-1/2 z-[5] w-full max-w-screen-xl ">
      <div className={`container text-sm breadcrumbs h-[64px] ${bg} mx-auto`}>
        <ul className="flex flex-wrap gap-2">
          <li>
            <Link
              href={"/"}
              className={twMerge(
                isDark ? "text-white " : "text-gray-500 hover:text-gray-700"
              )}
            >
              Home
            </Link>
          </li>
          {paths.map((item, index) => {
            const urls = paths.slice(0, index + 1).join("/");
            return (
              <li key={index}>
                {index < paths.length - 1 ? (
                  <Link
                    href={'/'+urls}
                    className={twMerge(
                      "font-semibold ",
                      isDark ? "text-white" : "text-black"
                    )}
                  >
                    {_.startCase(item)}
                  </Link>
                ) : (
                  <span
                    className={twMerge(
                      "font-semibold cursor-pointer",
                      isDark ? "text-white" : "text-black"
                    )}
                  >
                    {_.startCase(item)}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumb;
