/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  useEffect(() => {
    const getAnnouncements = async () => {
      try {
        const response = await fetch("api/events?limit=5");
        const data = await response.json();
        setAnnouncements(data.data);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };
    getAnnouncements();
  }, []);
  return (
    <section className="container spacing-xy">
      <div className="bg-gray-50 rounded-xl shadow-lg p-6 lg:flex items-center space-y-6 lg:space-y-0 relative overflow-hidden md:max-h-[391px]">
        {/* Left Section */}
        <div className="lg:w-1/3 flex flex-col items-center lg:items-start ">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Announcements & Latest Updates
          </h2>
          <div className="md:hidden block">
            <ul className="space-y-4 overflow-scroll no-scrollbar">
              {announcements &&
                announcements.map((announcement: any, index) => (
                  <li
                    key={index}
                    className="flex flex-col items-start justify-between"
                  >
                    {/* Date and New Badge */}
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500 font-bold">
                        {new Date(announcement.add_date).toLocaleDateString(
                          "en-GB",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          }
                        )}
                      </span>
                      {announcement.is_new == "yes" && (
                        <span className="bg-green-100 text-Accent-Green_1 border-Accent-Green_1 border text-xs font-bold px-2 py-1 rounded-full">
                          New
                        </span>
                      )}
                    </div>
                    {/* Announcement Message */}
                    <a
                      href={announcement.url}
                      target="_blank"
                      className="text-Black-Shade_-2 hover:underline cursor-pointer font-[500]"
                    >
                      {announcement.description}
                    </a>
                  </li>
                ))}
            </ul>
            <div className="mt-6 flex justify-end w-full">
              <Link
                href={"/events"}
                className="bg-Primary-Shade_1 text-white text-sm font-semibold py-2 px-6 rounded-full hover:bg-green-600 flex items-center gap-2"
              >
                View All <FaChevronRight className="text-white text-xs" />
              </Link>
            </div>
          </div>

          <img
            src="/images/announcements.png"
            alt=""
            className="relative -bottom-[26px] -left-[24px]"
          />
        </div>

        {/* Right Section */}
        <div className="lg:w-2/3 md:flex flex-col justify-end items-end max-h-[391px] py-5 hidden">
          <ul className="space-y-4 overflow-scroll no-scrollbar">
            {announcements &&
              announcements.map((announcement: any, index) => (
                <li
                  key={index}
                  className="flex flex-col items-start justify-between"
                >
                  {/* Date and New Badge */}
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500 font-bold">
                      {new Date(announcement.add_date).toLocaleDateString(
                        "en-GB",
                        {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        }
                      )}
                    </span>
                    {announcement.is_new == "yes" && (
                      <span className="bg-green-100 text-Accent-Green_1 border-Accent-Green_1 border text-xs font-bold px-2 py-1 rounded-full">
                        New
                      </span>
                    )}
                  </div>
                  {/* Announcement Message */}
                  <a
                    href={announcement.url}
                    target="_blank"
                    className="text-Black-Shade_-2 hover:underline cursor-pointer font-[500]"
                  >
                    {announcement.description}
                  </a>
                </li>
              ))}
          </ul>

          {/* View All Button */}
          <div className="mt-6 flex justify-end">
            <Link
              href={"/events"}
              className="bg-Primary-Shade_1 text-white text-sm font-semibold py-2 px-6 rounded-full hover:bg-green-600 flex items-center gap-2"
            >
              View All <FaChevronRight className="text-white text-xs" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;
