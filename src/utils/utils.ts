/* eslint-disable @typescript-eslint/no-explicit-any */
import { coursesData } from "@/lib/constants";
import { capitalize, debounce, replace } from "lodash";

const pageName = "foundation-science";

export const navToExclude = [
  '/',
  // '/login',
  '/msat',
  '/about-us',
  '/neet-college-predictor',
  '/why-matrix',
  '/jee-advanced-rank-predictor',
  '/jee-mains-rank-predictor',
  `/careers/explore-new-openings/${pageName}`,
  '/scholarships',
  '/results',
  '/jee-college-and-branch-predictor',
  '/admission/apply-for-direct-admission',
  '/olympiad'
];

export const slugify = (text: string): string => {
  return text
    .toLowerCase() // Convert to lowercase
    .replace(/&/g, "and") // Replace "&" with "and"
    .replace(/[^\w\s-]/g, "") // Remove special characters except spaces & hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .trim(); // Remove extra spaces
};

//unslugify
export const unslugify = (slug: string): string => {
  return slug.replace(/-/g, " ");
};

export const scrollToSection = debounce((id: string, topPadding = 80) => {
  const section = document.getElementById(id);
  if (section) {
    const position = section.getBoundingClientRect();
    window.scrollTo(position.left, position.top + window.scrollY - topPadding);
  };
}, 100); //=


export const getCourseName = () : string[] => {
  return Object.keys(coursesData).map((courseName) => capitalize(replace(courseName, /-/g, ' ')))
}