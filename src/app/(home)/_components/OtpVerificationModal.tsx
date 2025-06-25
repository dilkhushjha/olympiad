"use client";
import React, { useState } from "react";

const OtpVerificationModal = ({ onClose }) => {
  const [regKey, setRegKey] = useState("2257");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegKey("2258");
    console.log("Clicked on Next", regKey);
  };

  return (
    <div>
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50  flex justify-center items-center z-50">
        <div className="bg-white w-max rounded-3xl shadow-lg z-999 ">
          <div className=" py-10 px-14 flex flex-col items-center justify-center rounded-2xl text-center gap-6 relative bg-white">
            <div className="">
              {/*  */}

              <button
                onClick={onClose}
                className="absolute top-4 right-4 border px-2 rounded text-gray-500 hover:text-red-500"
              >
                ×
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 flex flex-col text-black"
            >
              <div className="flex flex-col gap-10">
                <h2 className="text-2xl font-semibold text-black">
                  Please Enter your <br />
                  M-SAT Registration No.
                </h2>
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-left text-Grey-Shade_1">
                    Matrix - SAT Registration No.
                  </p>
                  <input
                    type="text"
                    name="registraionNo"
                    id=""
                    placeholder="E.g, 2275"
                    className="border p-4 rounded-lg form-control"
                    required
                  />
                </div>
              </div>
              <div className="pt-4 m-auto">
                <button
                  type="submit"
                  className="w-max flex gap-[10] items-center bg-Primary-Shade_1 text-white py-3 px-6 rounded-full font-semibold hover:bg-green-700 transition text-lg"
                >
                  Next{" "}
                  <svg
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.0625 13.0107L10.5378 8.48623L6.01333 4.01088"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerificationModal;
