import Image from "next/image";
import React from "react";

export default function RewardsAndRecognition() {
  return (
    <section className="bg-Accent-Red_4 spacing-xy">
      <div className="container flex flex-col gap-8 justify-center items-center p-8">
        <div className="flex flex-col items-center md:w-1/3">
          <h3 className="text-[#1A64C6] font-semibold m-2">
            Rewards & Recognition
          </h3>
          <h2 className="text-2xl font-bold flex text-center">
            Key Benefits for Students & Parents
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center lg:grid-cols-3 gap-5 w-full">
            <div className="bg-[url('/images/olympiad/bggrid1.png')] bg-contain bg-no-repeat bg-center flex flex-col items-center p-4 w-[376px] h-[376px]">
              <Image
                src="images/olympiad/grid1.png"
                className="m-2"
                alt="grad1"
                width={110}
                height={130}
              />
              <div className="flex flex-col items-center text-center w-10/12 text-white">
                <h2 className="text-xl font-bold my-4 w-4/5 ">
                  Up to 100% Scholarships
                </h2>
                <p>
                  for <span className="font-semibold">₹71 Crore </span>worth of
                  scholarships, with top performers receiving up to{" "}
                  <span className="font-semibold"> 100% tuition fee</span>{" "}
                  waivers to fuel their academic journey.Compete
                </p>
              </div>
            </div>

            <div className="bg-[url('/images/olympiad/bggrid2.png')] bg-contain bg-no-repeat bg-center flex flex-col items-center p-4 w-[376px] h-[376px]">
              <Image
                src="images/olympiad/grid2.png"
                className="m-2"
                alt="grad1"
                width={110}
                height={130}
              />
              <div className="flex flex-col items-center text-center w-10/12 text-white">
                <h2 className="text-xl font-bold my-4 ">
                  In-Depth Performance Analysis
                </h2>
                <p className="m-2">
                  Gain a <span className="font-semibold">detailed report</span>{" "}
                  with data-driven insights and charts — helping students
                  understand their{" "}
                  <span className="font-semibold">strengths</span> and identify
                  key areas for improvement.
                </p>
              </div>
            </div>

            <div className="bg-[url('/images/olympiad/bggrid3.png')] bg-contain bg-no-repeat bg-center flex flex-col items-center p-4 w-[376px] h-[376px]">
              <Image
                src="images/olympiad/grid3.png"
                className="m-2"
                alt="grad1"
                width={110}
                height={130}
              />
              <div className="flex flex-col items-center text-center w-10/12 text-white">
                <h2 className="text-xl font-bold my-4 ">Cash Rewards</h2>
                <p className="m-2">
                  A massive <span className="font-semibold">₹31 Lakhs</span> in
                  cash prizes awaits top achievers across various categories.
                </p>
              </div>
            </div>

            <div className="bg-[url('/images/olympiad/bggrid4.png')] bg-contain bg-no-repeat bg-center flex flex-col items-center p-4 w-[376px] h-[376px]">
              <Image
                src="images/olympiad/grid4.png"
                className="m-2"
                alt="grad1"
                width={110}
                height={130}
              />
              <div className="flex flex-col items-center text-center w-10/12 text-white">
                <h2 className="text-xl font-bold my-4 ">
                  Free International Tour
                </h2>
                <p className="m-2">
                  The <span className="font-semibold">top 8</span> overall
                  rankers win an all-expenses-paid educational
                  <span className="font-semibold"> trip to Dubai</span>— a
                  global learning experience!
                </p>
              </div>
            </div>

            <div className="bg-[url('/images/olympiad/bggrid5.png')] bg-contain bg-no-repeat bg-center flex flex-col justify-center items-center p-4 w-[376px] h-[376px]">
              <Image
                src="images/olympiad/grid5.png"
                className="m-2"
                alt="grad1"
                width={110}
                height={130}
              />
              <div className="flex flex-col items-center text-center w-10/12 text-white">
                <h2 className="text-xl font-bold w-3/5 my-4 ">
                  Felicitation & Cash Prizes
                </h2>
                <p className="m-2">
                  Toppers will be honored with{" "}
                  <span className="font-semibold">
                    cash prizes, mementos, certificates, and public recognition
                  </span>{" "}
                  to celebrate their success and inspire others.
                </p>
              </div>
            </div>

            <div className=" bg-[url('/images/olympiad/bggrid6.png')] bg-contain bg-no-repeat bg-center flex flex-col justify-center items-center p-4 w-[376px] h-[376px]">
              <div className="m-4">
                <svg
                  width="50"
                  height="45"
                  viewBox="0 0 50 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.7758 9.31055L29.5478 19.5041L39.7413 23.2761L29.5478 27.048L25.7758 37.2416L22.0039 27.048L11.8103 23.2761L22.0039 19.5041L25.7758 9.31055Z"
                    fill="white"
                  />
                  <path
                    d="M44.3965 9.31055L45.6538 5.91269L49.0517 4.65537L45.6538 3.39806L44.3965 0.000202179L43.1392 3.39806L39.7413 4.65537L43.1392 5.91269L44.3965 9.31055Z"
                    fill="white"
                  />
                  <path
                    d="M5.60341 45L6.86073 41.6021L10.2586 40.3448L6.86073 39.0875L5.60341 35.6897L4.3461 39.0875L0.948242 40.3448L4.3461 41.6021L5.60341 45Z"
                    fill="white"
                  />
                  <path
                    d="M7.15512 10.8623L7.57422 9.72969L8.70684 9.31058L7.57422 8.89147L7.15512 7.75886L6.73601 8.89147L5.60339 9.31058L6.73601 9.72969L7.15512 10.8623Z"
                    fill="white"
                  />
                  <path
                    d="M42.8448 41.8965L43.2639 40.7639L44.3965 40.3448L43.2639 39.9257L42.8448 38.793L42.4257 39.9257L41.2931 40.3448L42.4257 40.7639L42.8448 41.8965Z"
                    fill="white"
                  />
                </svg>
              </div>

              <div className="flex flex-col items-center text-center w-10/12 text-white">
                <h2 className="text-2xl font-bold my-4 w-4/5 ">
                  Register Now For Free
                </h2>
                <p className="text-2xl">&#8594;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
