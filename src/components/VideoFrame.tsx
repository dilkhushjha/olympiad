"use client";
import Image from "next/image";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
export default function VideoFrame({
  className,
  height,
  width,
  thumbnail,
  youtubeLink
}: {
  thumbnail: string;
  youtubeLink?: string;
  height?: number;
  width?: number;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Image
        onClick={() => setIsOpen(true)}
        src={thumbnail}
        height={height || 213}
        width={width || 213}
        alt=""
        className={twMerge(
          "shadow rounded-3xl h-full w-full cursor-pointer",
          className
        )}
      />
      <div className="absolute">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setIsOpen(false)} // Close when clicking outside
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative bg-black p-6 rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()} // Prevent click outside close
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-red-500 transition"
              >
                ×
              </button>

              <iframe
                width="560"
                height="315"
                src={youtubeLink || "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"}
                title="YouTube video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </div>
    </>
  );
}
