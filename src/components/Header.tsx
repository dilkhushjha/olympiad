'use client';
import Image from "next/image";
import HeroSlider from "./HeroSlider";
import Link from "next/link";
import { useAppContext } from "@/lib/AppContext";

const slides = [
  { img: '/images/homepage/header-slides/Slide-1.jpg', alt: 'Slide 1' },
  { img: '/images/homepage/header-slides/Slide-2.jpg', alt: 'Slide 2' },
  { img: '/images/homepage/header-slides/Slide-3.jpg', alt: 'Slide 2' },
  { img: '/images/homepage/header-slides/Slide-4.jpg', alt: 'Slide 2' },
  { img: '/images/homepage/header-slides/Slide-5.jpg', alt: 'Slide 2' },
  { img: '/images/homepage/header-slides/Slide-6.jpg', alt: 'Slide 2' },
  { img: '/images/homepage/header-slides/Slide-7.jpg', alt: 'Slide 2' },
];

export default function Header() {
  const { context, setContext } = useAppContext();
  return (
    <div className="min-w-screen w-full md:max-h-screen bg-hero pt-[115px] pb-[40px] md:pb-[115px]">
      <div className="container flex flex-col md:flex-row justify-between items-center text-white ">
        <div className="col flex flex-col gap-5">
          <h1 className="text-[20px] md:text-[40px] leading-[1.2]">
            A Decade of Commitment
            <br />
            <b className="text-3xl md:text-4xl">to Quality Education</b>{" "}
          </h1>
          <div className="actions flex md:flex-row flex-col items-start justify-start gap-2">

            <button className="btn-primary md:max-w-max w-full"
              onClick={() => setContext({ ...context, showRegisterModal: true })}
            >Register Now</button>
            <Link href={"/contact-us"} className="btn-secondary !bg-[#025A37] flex gap-1 items-center justify-center md:max-w-max w-full" >
              Talk to Expert
              <svg
                width={14}
                height={14}
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.68766 7.31476C9.34705 9.97341 9.95035 6.89765 11.6436 8.58971C13.276 10.2217 14.2143 10.5486 12.146 12.6163C11.8869 12.8245 10.2409 15.3293 4.45624 9.54628C-1.32915 3.7625 1.17423 2.1148 1.38248 1.8558C3.45575 -0.217599 3.77708 0.726092 5.4095 2.35806C7.10275 4.05083 4.02828 4.65611 6.68766 7.31476Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="col">
          <Image height={400} width={418} src="/images/banners/studious.png" alt="" quality={100} />
        </div>
      </div>
      <div className="pb-0 md:pb-[100px] max-w-[1337px] mx-auto relative px-6 md:px-0">
        <HeroSlider slides={slides} />
      </div>
    </div>
  );
}
