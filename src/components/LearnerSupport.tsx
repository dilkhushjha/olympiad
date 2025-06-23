import Image from "next/image";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const LearnerSupport = () => {
  return (
    <div className="container mx-auto text-left md:text-center lg:text-left">
      {/* Title Section */}
      <h2 className="heading-2 font-bold text-gray-800">
        Matrix Learner Support
      </h2>
      <p className="mt-2 text-Black-Shade_-2 font-medium">
        Talk to our experts. We&apos;re available 24/7.
      </p>

      {/* Support Options */}
      <div className="mt-8 flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8 gap-5 md:gap-[88px] justify-between">
        {/* Option 1 */}
        <div className="flex flex-col md:flex-row items-start md:items-center space-x-0 md:space-x-4 basis-full md:basis-1/2 w-full">
          <div className="flex items-center gap-4">
            <Image
              height={60}
              width={60}
              src="/images/india-flag.png"
              alt="India Flag"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <h3 className="text-gray-800 font-medium text-lg">
                Matrix Learner Support
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-0 md:space-x-3 px-4 py-3 mt-4 md:mt-0 bg-white border border-gray-200 rounded-[20px] shadow-sm min-w-[248px] gap-4">
            <FaPhoneAlt className="text-green-500" />
            <span className="text-gray-800 font-semibold text-[20px]">
              +91 909090 23232
            </span>
          </div>
        </div>

        {/* Option 2 */}

        <div className="flex flex-col md:flex-row items-start md:items-center space-x-0 md:space-x-4 basis-full md:basis-1/2 w-full">
          <div className="flex items-center gap-4">
            <Image
              height={60}
              width={60}
              src="/images/globe-icon.png"
              alt="India Flag"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <h3 className="text-gray-800 font-medium text-lg">
              Foreign Nationals
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-0 md:space-x-3 px-4 py-3 mt-4 md:mt-0 bg-white border border-gray-200 rounded-[20px] shadow-sm min-w-[248px] gap-4">
            <FaPhoneAlt className="text-green-500" />
            <span className="text-gray-800 font-semibold text-[20px]">
            +91 909090 23232
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnerSupport;
