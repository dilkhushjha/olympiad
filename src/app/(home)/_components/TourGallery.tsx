"use client";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { Thumbnails } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const images = [
  { src: "/images/olympiad/gallery/Gallery1.png" },
  { src: "/images/olympiad/gallery/Gallery2.png" },
  { src: "/images/olympiad/gallery/Gallery3.png" },
  { src: "/images/olympiad/gallery/Gallery4.png" },
  // Add more images as needed
];

export default function TourGallery() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="container">
        <div className="my-12 py-4 flex flex-col justify-center">
          <div>
            <h2 className="font-bold text-2xl text-center leading-normal">
              Singapore’s
              <br /> Educational Tour Gallery
            </h2>
          </div>
          <div className="flex flex-col md:flex-row items-center m-4 my-8 gap-6">
            <div className="relative w-full sm:w-auto">
              <Image
                src="images/olympiad/gallery/Gallery1.png"
                alt="gallery"
                width={372}
                height={340}
                className="w-full h-auto sm:w-[372px] sm:h-[340px]"
              />
              <div
                className="absolute cursor-pointer bottom-4 left-4 px-2 p-1 bg-opacity-70 rounded-full bg-slate-800 text-white"
                onClick={() => {
                  setOpen(true);
                }}
              >
                View All (20)
              </div>
            </div>
            <div className="flex md:flex-col sm:flex-row sm:w-auto w-full gap-8">
              <div>
                <Image
                  src="images/olympiad/gallery/Gallery2.png"
                  alt="gallery"
                  width={372}
                  height={170}
                  //   className="w-full h-auto sm:w-[160px] sm:h-[300px]"
                />
              </div>
              <div>
                <Image
                  src="images/olympiad/gallery/Gallery3.png"
                  alt="gallery"
                  width={372}
                  height={170}
                  //   className="w-full h-auto sm:w-[160px] sm:h-[300px]"
                />
              </div>
            </div>
            <div className="w-full sm:w-auto">
              <Image
                src="images/olympiad/gallery/Gallery4.png"
                alt="gallery"
                width={372}
                height={340}
                className="w-full h-auto sm:w-[372px] sm:h-[340px]"
              />
            </div>
          </div>
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        plugins={[Thumbnails]}
      />
    </>
  );
}
