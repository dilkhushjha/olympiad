"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function WhyChooseMatrix({
  data,
}: {
  data: { title: string; description: string }[];
}) {
  const [activeTab, setActiveTab] = React.useState(1);
  return (
    <section className="container spacing-xy">
      <div className="flex flex-col md:flex-row items-end">
        <div className="max-w-[440px]">
          <h1 className="heading-1">Why Choose Matrix</h1>
          <h6 className="pt-5 pb-6">
            Matrix Academy is uniquely different, transformational for every
            student and is reflected in our results
          </h6>
          {data.map((item, index) => (
            <div
              className="collapse collapse-arrow pb-4 rounded-none border-b border-Grey-Shade_3 not:first:border-none"
              key={index}
              onClick={() => setActiveTab(index + 1)}
            >
              <input type="radio" name="my-accordion-2" defaultChecked={index === 0} />
              <div className="collapse-title text-lg font-bold pl-0">
                {item.title}
              </div>
              <div className="collapse-content pl-0">
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full mt-6 md:mt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab} // Ensures re-animation when `activeTab` changes
              initial={{ opacity: 0, x: 50 }} // Start hidden and slightly shifted
              animate={{ opacity: 1, x: 0 }} // Fade in and slide in
              exit={{ opacity: 0, x: -50 }} // Fade out and slide out
              transition={{ duration: 0.5 }} // Smooth transition
              className="float-end"
            >
              <Image
                src={`/images/why-choose-matrix/${activeTab}.svg`}
                alt=""
                width={583}
                height={345}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
