"use client";
import Image from "next/image";
import React, { useState } from "react";
import OtpVerificationModal from "./OtpVerificationModal";
import RegisterForm from "./RegisterForm";

const formText = ''

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
            <RegisterForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default NextChampion;
