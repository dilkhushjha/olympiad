"use client";
import Image from "next/image";
import React, { useState } from "react";
import OtpVerificationModal from "./OtpVerificationModal";

const NextChampion = () => {
  const [formData, setFormData] = useState({
    mobileNo: "",
  });

  const [otpModal, setOtpModal] = useState(false);

  const handleFormData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      {otpModal && <OtpVerificationModal onClose={() => setOtpModal(false)} />}
      <section className="p-6 md:p-10 flex flex-col md:flex-row items-center justify-between text-white relative ">
        {/* Left Content */}
        <div className="my-4">
          <h1 className="text-2xl md:text-3xl text-white font-bold mb-4">
            Be the Next Matrix Champion
          </h1>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-md">Achieve more. Start today!</h2>
            <p className=" bg-white text-green-700 font-semibold rounded p-1">
              Registration is Free
            </p>
          </div>
        </div>

        {/* Right Card */}
        <div>
          <div className="col w-full flex">
            <div className="bg-white p-8 rounded-3xl w-full max-w-[480px] flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <h1 className="text-xl font-bold  text-gray-800">
                  Register Now
                </h1>
                <div className="flex flex-row gap-4 items-center">
                  <Image
                    src={"/images/olympiad/registered-img.png"}
                    alt="registered"
                    height={100}
                    width={100}
                  ></Image>
                  <p className="text-black">
                    <strong>10000+</strong> students have already registered.
                  </p>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-control my-2">
                  {/* Phone Input Group */}
                  <div className="flex items-center rounded-lg border border-gray-300 hover:border-gray-500 focus-within:border-gray-500 px-4 py-3 transition-colors w-full max-w-md gap-2">
                    {/* Flag Image */}
                    <Image
                      src="/images/olympiad/flag.png"
                      alt="India Flag"
                      className="w-6 h-4 object-cover rounded-sm"
                      width={24}
                      height={16}
                    />

                    {/* Country Code */}
                    <span className="text-gray-600 text-sm font-medium">
                      +91
                    </span>

                    {/* Divider */}
                    <div className="h-5 w-px bg-gray-300 md:mx-2" />

                    {/* Phone Number Input */}
                    <input
                      name="mobileNo"
                      type="tel"
                      onChange={handleFormData}
                      value={formData.mobileNo}
                      placeholder="Enter your mobile no"
                      className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-4">
                  <button
                    type="submit"
                    className="btn-secondary w-full text-white rounded-full"
                    onClick={() => setOtpModal(true)}
                  >
                    GET OTP
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NextChampion;
