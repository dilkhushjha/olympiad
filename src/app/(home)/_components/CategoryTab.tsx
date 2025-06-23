import _ from "lodash";
import React from "react";
interface CategoryTabsProps {
    categories: string[];
    activeCategory: string;
    setActiveCategory: (category: string) => void;
  }
const CategoryTabs = ({ categories, activeCategory, setActiveCategory }: CategoryTabsProps) => {
  return (
    <div className="flex justify-start space-x-4 py-6">
      {categories.map((category) => (
        <div
          key={category}
          className={`px-6 py-2 rounded-full cursor-pointer font-semibold ${
            activeCategory === category
              ? "bg-white text-blue-900"
              : "bg-white/5 text-white "
          }`}
          onClick={() => setActiveCategory(category)}
        >
          {_.capitalize(category)}
        </div>
      ))}
    </div>
  );
};

export default CategoryTabs;
