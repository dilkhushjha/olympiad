import React from "react";
import Image from "next/image";

export default function ReviewCard() {
  return (
    <div className="flex xl:flex-nowrap flex-wrap gap-4 mx-auto">
      <div className="p-8 border bg-[#03B46E] text-white rounded-3xl w-full md:basis-1/3">
        <div className="flex flex-col gap-8">
          <div className="">
            <svg
              width="45"
              height="50"
              viewBox="0 0 25 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.56716 9.90985C4.8476 9.86979 5.22819 9.84975 5.70895 9.84975C7.23133 9.84975 8.37312 10.2904 9.13431 11.1718C9.93557 12.0131 10.3362 13.0748 10.3362 14.3568C10.3362 15.719 9.87547 16.8607 8.95403 17.7822C8.07265 18.7036 6.85073 19.1644 5.28829 19.1644C3.68578 19.1644 2.40377 18.7237 1.44226 17.8423C0.480753 16.9208 0 15.5988 0 13.8761C0 11.5524 0.701099 9.20875 2.1033 6.84505C3.50549 4.44128 5.22819 2.43814 7.27139 0.835632L8.47328 2.09761C5.8692 4.86194 4.56716 7.46602 4.56716 9.90985ZM18.6292 9.90985C18.9096 9.86979 19.2902 9.84975 19.771 9.84975C21.2934 9.84975 22.4352 10.2904 23.1963 11.1718C23.9976 12.0131 24.3982 13.0748 24.3982 14.3568C24.3982 15.719 23.9375 16.8607 23.0161 17.7822C22.1347 18.7036 20.9128 19.1644 19.3503 19.1644C17.7478 19.1644 16.4658 18.7237 15.5043 17.8423C14.5428 16.9208 14.062 15.5988 14.062 13.8761C14.062 11.5524 14.7631 9.20875 16.1653 6.84505C17.5675 4.44128 19.2902 2.43814 21.3334 0.835632L22.5353 2.09761C19.9312 4.86194 18.6292 7.46602 18.6292 9.90985Z"
                fill="#04DC86"
              />
            </svg>
          </div>
          <p className="text-white text-sm">
            Hearing about the quality assessment of the Matrix Olympiad, I took
            the test in 2022 and achieved Rank 21. It evaluated my skills and
            talent at national level and gave me a clear idea of my weaknesses
            and strengths. So, I prepared for JEE accordingly and scored AIR 852
            in JEE Advanced 2023. The Matrix Olympiad helped me reach IIT Kanpur
            where I am currently pursuing engineering. Thanks Matrix!
          </p>
          <div className="flex gap-4 items-center">
            <Image
              src={"/images/olympiad/rohit.png"}
              alt="public img"
              width={50}
              height={50}
            />
            <h2 className="text-white text-xl font-bold">Rohit Yadav</h2>
          </div>
        </div>
      </div>
      <div className="p-8 border bg-[#FF7D05] text-white rounded-3xl w-full md:basis-1/3">
        <div className="flex flex-col gap-8">
          <div className="">
            <svg
              width="45"
              height="50"
              viewBox="0 0 25 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.56716 9.90985C4.8476 9.86979 5.22819 9.84975 5.70895 9.84975C7.23133 9.84975 8.37312 10.2904 9.13431 11.1718C9.93557 12.0131 10.3362 13.0748 10.3362 14.3568C10.3362 15.719 9.87547 16.8607 8.95403 17.7822C8.07265 18.7036 6.85073 19.1644 5.28829 19.1644C3.68578 19.1644 2.40377 18.7237 1.44226 17.8423C0.480753 16.9208 0 15.5988 0 13.8761C0 11.5524 0.701099 9.20875 2.1033 6.84505C3.50549 4.44128 5.22819 2.43814 7.27139 0.835632L8.47328 2.09761C5.8692 4.86194 4.56716 7.46602 4.56716 9.90985ZM18.6292 9.90985C18.9096 9.86979 19.2902 9.84975 19.771 9.84975C21.2934 9.84975 22.4352 10.2904 23.1963 11.1718C23.9976 12.0131 24.3982 13.0748 24.3982 14.3568C24.3982 15.719 23.9375 16.8607 23.0161 17.7822C22.1347 18.7036 20.9128 19.1644 19.3503 19.1644C17.7478 19.1644 16.4658 18.7237 15.5043 17.8423C14.5428 16.9208 14.062 15.5988 14.062 13.8761C14.062 11.5524 14.7631 9.20875 16.1653 6.84505C17.5675 4.44128 19.2902 2.43814 21.3334 0.835632L22.5353 2.09761C19.9312 4.86194 18.6292 7.46602 18.6292 9.90985Z"
                fill="#FFAD61"
              />
            </svg>
          </div>
          <p className="text-white text-sm">
            With the aim to see where I stand among the peers from across the
            nation, I participated in Matrix Olympiad 2020-21. But when the
            result came, I was on cloud nine as I got Rank 2 and was rewarded
            with 100% Scholarship and other awards. Matrix Olympiad provided me
            the insight into my true potential that enabled me to score AIR 421
            in JEE Advanced 2022. Truly grateful to Matrix and Matrix Olympiad
            for helping me secure admission at IIT Hyderabad
          </p>
          <div className="flex gap-4 items-center">
            <Image
              src={"/images/olympiad/Uttam.png"}
              alt="public img"
              width={50}
              height={50}
            />
            <h2 className="text-white text-xl font-bold">
              Uttam Paharia Knoch
            </h2>
          </div>
        </div>
      </div>
      <div className="p-8 border bg-[#3983E5] text-white rounded-3xl w-full md:basis-1/3">
        <div className="flex flex-col gap-8">
          <div className="">
            <svg
              width="45"
              height="50"
              viewBox="0 0 25 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.56716 9.90985C4.8476 9.86979 5.22819 9.84975 5.70895 9.84975C7.23133 9.84975 8.37312 10.2904 9.13431 11.1718C9.93557 12.0131 10.3362 13.0748 10.3362 14.3568C10.3362 15.719 9.87547 16.8607 8.95403 17.7822C8.07265 18.7036 6.85073 19.1644 5.28829 19.1644C3.68578 19.1644 2.40377 18.7237 1.44226 17.8423C0.480753 16.9208 0 15.5988 0 13.8761C0 11.5524 0.701099 9.20875 2.1033 6.84505C3.50549 4.44128 5.22819 2.43814 7.27139 0.835632L8.47328 2.09761C5.8692 4.86194 4.56716 7.46602 4.56716 9.90985ZM18.6292 9.90985C18.9096 9.86979 19.2902 9.84975 19.771 9.84975C21.2934 9.84975 22.4352 10.2904 23.1963 11.1718C23.9976 12.0131 24.3982 13.0748 24.3982 14.3568C24.3982 15.719 23.9375 16.8607 23.0161 17.7822C22.1347 18.7036 20.9128 19.1644 19.3503 19.1644C17.7478 19.1644 16.4658 18.7237 15.5043 17.8423C14.5428 16.9208 14.062 15.5988 14.062 13.8761C14.062 11.5524 14.7631 9.20875 16.1653 6.84505C17.5675 4.44128 19.2902 2.43814 21.3334 0.835632L22.5353 2.09761C19.9312 4.86194 18.6292 7.46602 18.6292 9.90985Z"
                fill="#6FA5EC"
              />
            </svg>
          </div>
          <p className="text-white text-sm">
            The encouragement and appreciation I received through the platform
            of Matrix Olympiad motivated me to crack IIT JEE, a prestigious
            entrance exam for IITs in India. Studying at IIT Guwahati was always
            my dream which finally came true. Mainly because when I got Rank 14
            in the Matrix Olympiad 2022 I realized my abilities to stand out in
            competitions. This facilitated my achievement of AIR 1215 in JEE
            Advanced 2023.
          </p>
          <div className="flex gap-4 items-center">
            <Image
              src={"/images/olympiad/Jayant.png"}
              alt="public img"
              width={50}
              height={50}
            />
            <h2 className="text-white text-xl font-bold">Jayant Kumar</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
