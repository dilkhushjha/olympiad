import { Course } from "@/lib/types";
import { slugify } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const tagsClasses = [
  "bg-Accent-Orange_1/10 border-Accent-Orange_1 text-Accent-Orange_1",
  "bg-Accent-Green_1/10 border-Accent-Green_1 text-Accent-Green_1",
  "bg-Accent-Blue_1/10 border-Accent-Blue_1 text-Accent-Blue_1",
];
const CourseCard: React.FC<Course> = ({
  name,
  tags,
  description,
  // next_batch,
  // course_fees,
  link,
  // course,
  image,
}) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 text-center relative  overflow-clip">
      <h3 className="text-xl font-bold mb-4 text-Black text-start">{name}</h3>
      <div className="flex justify-start mb-4 flex-wrap gap-2 min-h-[44px]">
        {tags.map((badge, index) => (
          <span
            key={index}
            className={`px-3 rounded-full text-xs font-bold border ${tagsClasses[index % tagsClasses.length]} line-clamp-2 text-clip text-center max-h-max`}
          >
            {badge}
          </span>
        ))}
      </div>
      <p className="text-gray-600 mb-4 line-clamp-3 text-start min-h-[84px]">{description}</p>
      <div className="h-[98px]"></div>
      <div className="flex justify-center absolute bottom-0 left-[-1px]">
        <Image
          src={"/images" + image}
          alt={name}
          height={200}
          width={200}
          className=" object-cover"
          quality={100}
        />
      </div>
      <div className="flex justify-end bottom-0">
        <Link href={'/courses/'+slugify(link)} className="btn-rounded h-[56px] w-[56px] flex items-center justify-center text-2xl">
          <svg
            width={24}
            height={124}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12L10.5 7.5L6 3"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
