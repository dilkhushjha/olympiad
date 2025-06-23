"use client";
import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import CategoryTabs from "./CategoryTab";
import Link from "next/link";
import { courses } from "@/lib/constants";
import _ from "lodash";




export default function ExploreCoursesSlider() {
  
  const categories: string[] = _.uniq(courses.map((course) => course.course));
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
  const [filteredCourses, setFilteredCourses] = useState(courses);

  useEffect(() => {
      if(!_.isEmpty(activeCategory)){  
        
        const filteredCourses = courses.filter((course) =>  activeCategory === course.course);
        setFilteredCourses(filteredCourses);
      }else{
        setFilteredCourses(courses);
      }
    }, [activeCategory])

  return (
    <div className=" text-white">
      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <CourseCard key={index} {...course} image={`/courses/${course.course}-${index+1}.png`} />
          ))}
        </div>
      </div>
      <div className="flex justify-end mt-6">
        <Link href={"/courses?course="+activeCategory} className="btn-primary flex gap-1 items-center h-[50px]">
          View All Courses
          <svg
            width={24}
            height={124}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12L10.5 7.5L6 3"
              stroke="#02824F"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
