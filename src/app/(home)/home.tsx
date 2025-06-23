import ExploreCoursesSlider from "./_components/ExploreCoursesSlider";
import AllTimeToppers from "./_components/AllTimeToppers";
import Header from "@/components/Header";
import SuccessStories from "@/components/SuccessStories";
import WhyChooseMatrix from "@/components/WhyChooseMatrix";
import OurLocation from "@/components/OurLocation";
import AcademicBrilliance from "@/components/AcademicBrilliance";
import Announcements from "./_components/Announcements";
import FreeTools from "./_components/FreeTool";
import ScholarshipPromoBanner from "@/components/ScholarshipPromoBanner";
import MentorSlider from "./_components/MentorSlider";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const resources = [
  {
    title: "Exam and College Information: 2024-25",
    image: "images/college-information.png",
    link: "#",
  },
  {
    title: "JEE Mains Rank Predictor",
    image: "images/jee-main-rank-predictor.png",
    link: "/jee-mains-rank-predictor",
  },
  {
    title: "JEE Advanced Rank Predictor",
    image: "images/jee-advance-rank-predictor.png",
    link: "/jee-advanced-rank-predictor",
  },
  {
    title: "Matrix e-learnings",
    image: "images/matrix-learning.png",
  },
  {
    title: "Study Lecture Video",
    image: "images/Lecture Video.png",
  },
  {
    title: "Study Planner",
    image: "images/study-planner.png",
  },
  {
    title: "Previous Year Question Paper & Solutions",
    image: "images/Previous year q&A.png",
    link: "/study-materials/jee-mains/previous-year-question-papers",
  },
  {
    title: "Sample Paper",
    image: "images/sample-papers.png",
    link: "/study-materials/jee-mains/previous-year-question-papers/sample-papers",
  },
  {
    title: "NCERT Solutions",
    image: "images/NCERT Sol.png",
  },
];

const WhyChooseMatrixData = [
  {
    title: "Promise of Guaranteed Results",
    description:
      "Our innovative tools help students predict their ranks and colleges, backed by a history of top JEE and NEET results.",
  },
  {
    title: "Highly Experienced Faculty",
    description:
      "Our expert faculty from IITs, IIMs, and medical backgrounds use innovative methods to simplify complex concepts.",
  },
  {
    title: "Modern Infrastructure",
    description:
      "Well-equipped classrooms and labs enhance learning, with secure and comfortable hostels for outstation students.",
  },
  {
    title: "Personalized Attention",
    description:
      "One-on-one mentoring, doubt-clearing sessions, and regular assessments ensure continuous improvement.",
  },
  {
    title: "Affordable and Transparent Fee Structure",
    description:
      "We offer competitive fees with transparent pricing, plus scholarships to make quality education accessible.",
  },
];

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="bg-courses spacing-xy">
        <div className="container">
          <h1 className="text-3xl font-bold text-white">Explore Courses</h1>
          <ExploreCoursesSlider />
        </div>
      </div>
      <div className="container spacing-xy flex flex-col md:flex-row gap-9">
        <div className="col md:w-[50%]">
          <h1 className="heading-1">Our Resources</h1>
          <h6 className="mt-4">
            At Matrix, we provide modern educational solutions designed to meet
            the unique needs of every student.
          </h6>

        </div>
        <div className="col flex w-full bg-Primary-Shade_6 rounded-3xl px-4 py-10 md:p-10 ">
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 justify-between w-full">
            {resources.map((resource) => {
              return (
                <li
                  key={resource.title}
                >
                  <Link href={resource.link || "#"} className="flex items-center gap-2 font-bold ">
                    <img src={resource.image} alt="" />
                    <span className="max-w-[150px]">{resource.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="container spacing-xy">
        <h1 className="heading-1">Our Top Performers who made us Proud</h1>
        <h6 className="">
          Our results reflect the passion, hard work and efforts of our students
          and teachers.
        </h6>
        <AllTimeToppers showPills={true} />
        <div className="flex flex-col md:flex-row mt-10 gap-4">
          <Link
            href={"/results?exam=jee-2024"}
            className="bg-Primary-Shade_5 py-2 px-4 md:w-[50%] w-full rounded-3xl text-lg flex justify-between font-[600] items-center"
          >
            View JEE 2024 Results{" "}
            <span className="bg-Primary-Shade_-1 h-10 w-10 rounded-full flex items-center justify-center">
              <svg
                width={16}
                height={16}
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
            </span>
          </Link>
          <Link
            href={"/results?exam=neet-2024"}
            className="bg-Primary-Shade_5 py-2 px-4 md:w-[50%] w-full rounded-3xl text-lg flex justify-between font-[600] items-center"
          >
            View NEET 2024 Results{" "}
            <span className="bg-Primary-Shade_-1 h-10 w-10 rounded-full flex items-center justify-center">
              <svg
                width={16}
                height={16}
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
            </span>
          </Link>
          <div className="block md:hidden">
            <Link href={"/results"} className="bg-Primary-Shade_1 text-white text-sm font-semibold py-3 px-10 rounded-full hover:bg-green-600 flex items-center max-w-max mx-auto gap-4">
              View All Results<FaChevronRight className="text-white text-md" />
            </Link>
          </div>
        </div>
      </div>
      <ScholarshipPromoBanner />
      <div className="container spacing-xy">
        <h1 className="heading-1">Meet Your Mentors</h1>
        <h6>
          Our results reflect the passion, hard work and efforts of our students
          and teachers.
        </h6>
        <div className="mt-10 flex gap-5">
          <MentorSlider />
        </div>
      </div>

      <WhyChooseMatrix data={WhyChooseMatrixData} />
      <OurLocation />
      <AcademicBrilliance />
      <Announcements />
      <FreeTools />
    </div>
  );
}
