"use client";
import React, { useState } from "react";
import OtpVerifiedSuccessfully from "./OtpVerifiedSuccessfully";
import { getCourseName } from "@/utils/utils";

const otpData = [1, 2, 3, 4, 5, 7];

const ScholarshpForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState({
    otp_1: "",
    otp_2: "",
    otp_3: "",
    otp_4: "",
    otp_5: "",
    otp_6: "",
  });

  const [formData, setFormData] = useState({
    quota: "",
    neetRankAvailable: "",
    allIndiaRank: "",
    mobile: "",
    alternateMobile: "",
    fullName: "",
    fatherName: "",
    course: "",
    examDate: "",
    medium: "",
    emailId: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOtpValidation = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setOtp({ ...otp, [e.target.name]: e.target.value });
  };

  const handleOtpSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isOtpMatching = otpData.every(
      (num, index) => num === Number(otp[`otp_${index + 1}`])
    );
    if (isOtpMatching) {
      console.log("OTP Matching");
      setStep(3); // Move to Success Message
    } else {
      alert("OTP Mismatch! Please try again.");
    }
  };

  const handleCloseModal = () => {
    setIsSubmitted(false); // Hide modal
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setStep(2);
  };

  return (
    <>
      {isSubmitted && step === 2 && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 rounded-3xl flex justify-center items-center">
          <div className="bg-white w-max rounded-3xl shadow-lg z-999">
            <div className=" py-10 px-14 flex flex-col items-center justify-center rounded-2xl text-center gap-6 relative bg-white">
              <div className="">
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 border px-2 rounded text-gray-500 hover:text-red-500"
                >
                  ×
                </button>
              </div>
              <div className="flex flex-col gap-6">
                <svg
                  width="84"
                  height="85"
                  viewBox="0 0 84 85"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_6370_27068)">
                    <path
                      d="M60.1992 1.8999H23.7992C20.7064 1.8999 18.1992 4.40711 18.1992 7.4999V77.4999C18.1992 80.5927 20.7064 83.0999 23.7992 83.0999H60.1992C63.292 83.0999 65.7992 80.5927 65.7992 77.4999V7.4999C65.7992 4.40711 63.292 1.8999 60.1992 1.8999Z"
                      fill="#1A64C6"
                    />
                    <path
                      d="M54.5984 1.8999V6.0999C54.5984 7.21381 54.1559 8.2821 53.3683 9.06975C52.5806 9.8574 51.5123 10.2999 50.3984 10.2999H33.5984C32.4845 10.2999 31.4162 9.8574 30.6286 9.06975C29.8409 8.2821 29.3984 7.21381 29.3984 6.0999V1.8999H54.5984Z"
                      fill="#101823"
                    />
                    <path
                      d="M46.1992 38.3V31.3C46.1992 30.1861 45.7567 29.1178 44.9691 28.3302C44.1814 27.5425 43.1131 27.1 41.9992 27.1C40.8853 27.1 39.817 27.5425 39.0294 28.3302C38.2417 29.1178 37.7992 30.1861 37.7992 31.3V38.3L32.1992 39.014V31.3C32.1992 28.7009 33.2317 26.2082 35.0696 24.3704C36.9074 22.5325 39.4001 21.5 41.9992 21.5C44.5983 21.5 47.091 22.5325 48.9289 24.3704C50.7667 26.2082 51.7992 28.7009 51.7992 31.3V39.014L46.1992 38.3Z"
                      fill="#FF7D05"
                    />
                    <path
                      d="M42.0016 66.3C50.5068 66.3 57.4016 59.4052 57.4016 50.9C57.4016 42.3948 50.5068 35.5 42.0016 35.5C33.4964 35.5 26.6016 42.3948 26.6016 50.9C26.6016 59.4052 33.4964 66.3 42.0016 66.3Z"
                      fill="#FFD334"
                    />
                    <path
                      d="M44.8009 55.1V52.622C45.3233 52.1547 45.7205 51.5641 45.9563 50.904C46.192 50.2438 46.2587 49.5352 46.1505 48.8427C46.0422 48.1502 45.7623 47.4957 45.3363 46.9391C44.9103 46.3824 44.3518 45.9412 43.7116 45.6557C43.0715 45.3702 42.37 45.2494 41.6713 45.3045C40.9725 45.3595 40.2986 45.5885 39.711 45.9707C39.1234 46.3528 38.6408 46.876 38.3071 47.4924C37.9735 48.1089 37.7995 48.7991 37.8009 49.5C37.7967 50.0903 37.9195 50.6747 38.1611 51.2134C38.4027 51.752 38.7573 52.2325 39.2009 52.622V55.1C39.2009 55.8426 39.4959 56.5548 40.021 57.0799C40.5461 57.605 41.2583 57.9 42.0009 57.9C42.7435 57.9 43.4557 57.605 43.9808 57.0799C44.5059 56.5548 44.8009 55.8426 44.8009 55.1Z"
                      fill="#DB9C1F"
                    />
                    <path
                      d="M64.4008 77.5V7.5C64.4008 6.38609 63.9583 5.3178 63.1706 4.53015C62.383 3.7425 61.3147 3.3 60.2008 3.3H23.8008C22.6869 3.3 21.6186 3.7425 20.8309 4.53015C20.0433 5.3178 19.6008 6.38609 19.6008 7.5V77.5H16.8008V7.5C16.803 5.64417 17.5412 3.86498 18.8535 2.55271C20.1658 1.24043 21.9449 0.502223 23.8008 0.5L60.2008 0.5C62.0566 0.502223 63.8358 1.24043 65.1481 2.55271C66.4604 3.86498 67.1986 5.64417 67.2008 7.5V77.5H64.4008Z"
                      fill="#101823"
                    />
                    <path
                      d="M75.5992 57.8999H8.39922C6.07962 57.8999 4.19922 59.7803 4.19922 62.0999V78.8999C4.19922 81.2195 6.07962 83.0999 8.39922 83.0999H75.5992C77.9188 83.0999 79.7992 81.2195 79.7992 78.8999V62.0999C79.7992 59.7803 77.9188 57.8999 75.5992 57.8999Z"
                      fill="#04DC86"
                    />
                    <path
                      d="M47.1898 65.3103C46.9273 65.0478 46.5712 64.9004 46.2 64.9004C45.8288 64.9004 45.4728 65.0478 45.2102 65.3103L42 68.5205L38.7898 65.3103C38.5258 65.0553 38.1721 64.9142 37.8051 64.9173C37.438 64.9205 37.0868 65.0678 36.8273 65.3273C36.5677 65.5869 36.4205 65.9381 36.4173 66.3051C36.4141 66.6722 36.5552 67.0258 36.8102 67.2899L40.0204 70.5001L36.8102 73.7103C36.6765 73.8394 36.5698 73.9939 36.4965 74.1647C36.4231 74.3355 36.3845 74.5192 36.3829 74.7051C36.3813 74.891 36.4167 75.0754 36.4871 75.2474C36.5575 75.4195 36.6614 75.5758 36.7929 75.7072C36.9243 75.8387 37.0806 75.9426 37.2527 76.013C37.4247 76.0834 37.6091 76.1189 37.795 76.1172C37.9809 76.1156 38.1646 76.077 38.3354 76.0036C38.5062 75.9303 38.6607 75.8236 38.7898 75.6899L42 72.4797L45.2102 75.6899C45.4743 75.9449 45.8279 76.086 46.195 76.0828C46.5621 76.0796 46.9132 75.9324 47.1728 75.6728C47.4323 75.4133 47.5796 75.0621 47.5828 74.6951C47.586 74.328 47.4448 73.9743 47.1898 73.7103L43.9796 70.5001L47.1898 67.2899C47.4523 67.0274 47.5997 66.6713 47.5997 66.3001C47.5997 65.9289 47.4523 65.5728 47.1898 65.3103Z"
                      fill="#5FFCBD"
                    />
                    <path
                      d="M33.1898 65.3103C32.9273 65.0478 32.5712 64.9004 32.2 64.9004C31.8288 64.9004 31.4728 65.0478 31.2102 65.3103L28 68.5205L24.7898 65.3103C24.5258 65.0553 24.1721 64.9142 23.8051 64.9173C23.438 64.9205 23.0868 65.0678 22.8273 65.3273C22.5677 65.5869 22.4205 65.9381 22.4173 66.3051C22.4141 66.6722 22.5552 67.0258 22.8102 67.2899L26.0204 70.5001L22.8102 73.7103C22.6765 73.8394 22.5698 73.9939 22.4965 74.1647C22.4231 74.3355 22.3845 74.5192 22.3829 74.7051C22.3813 74.891 22.4167 75.0754 22.4871 75.2474C22.5575 75.4195 22.6614 75.5758 22.7929 75.7072C22.9243 75.8387 23.0806 75.9426 23.2527 76.013C23.4247 76.0834 23.6091 76.1189 23.795 76.1172C23.9809 76.1156 24.1646 76.077 24.3354 76.0036C24.5062 75.9303 24.6607 75.8236 24.7898 75.6899L28 72.4797L31.2102 75.6899C31.4743 75.9449 31.8279 76.086 32.195 76.0828C32.5621 76.0796 32.9132 75.9324 33.1728 75.6728C33.4323 75.4133 33.5796 75.0621 33.5828 74.6951C33.586 74.328 33.4448 73.9743 33.1898 73.7103L29.9796 70.5001L33.1898 67.2899C33.4523 67.0274 33.5997 66.6713 33.5997 66.3001C33.5997 65.9289 33.4523 65.5728 33.1898 65.3103Z"
                      fill="#5FFCBD"
                    />
                    <path
                      d="M19.1898 65.3103C18.9273 65.0478 18.5712 64.9004 18.2 64.9004C17.8288 64.9004 17.4728 65.0478 17.2102 65.3103L14 68.5205L10.7898 65.3103C10.5258 65.0553 10.1721 64.9142 9.80505 64.9173C9.43798 64.9205 9.08684 65.0678 8.82727 65.3273C8.5677 65.5869 8.42046 65.9381 8.41727 66.3051C8.41408 66.6722 8.55519 67.0258 8.81022 67.2899L12.0204 70.5001L8.81022 73.7103C8.6765 73.8394 8.56985 73.9939 8.49647 74.1647C8.4231 74.3355 8.38448 74.5192 8.38287 74.7051C8.38125 74.891 8.41667 75.0754 8.48707 75.2474C8.55746 75.4195 8.66141 75.5758 8.79286 75.7072C8.92431 75.8387 9.08063 75.9426 9.25268 76.013C9.42474 76.0834 9.60909 76.1189 9.79498 76.1172C9.98087 76.1156 10.1646 76.077 10.3354 76.0036C10.5062 75.9303 10.6607 75.8236 10.7898 75.6899L14 72.4797L17.2102 75.6899C17.4743 75.9449 17.8279 76.086 18.195 76.0828C18.5621 76.0796 18.9132 75.9324 19.1728 75.6728C19.4323 75.4133 19.5796 75.0621 19.5828 74.6951C19.5859 74.328 19.4448 73.9743 19.1898 73.7103L15.9796 70.5001L19.1898 67.2899C19.4523 67.0274 19.5997 66.6713 19.5997 66.3001C19.5997 65.9289 19.4523 65.5728 19.1898 65.3103Z"
                      fill="#5FFCBD"
                    />
                    <path
                      d="M71.9796 70.5003L75.1898 67.2901C75.4448 67.026 75.5859 66.6724 75.5828 66.3053C75.5796 65.9382 75.4323 65.5871 75.1728 65.3275C74.9132 65.068 74.5621 64.9207 74.195 64.9175C73.8279 64.9143 73.4743 65.0555 73.2102 65.3105L70 68.5207L66.7898 65.3105C66.5258 65.0555 66.1721 64.9143 65.8051 64.9175C65.438 64.9207 65.0868 65.068 64.8273 65.3275C64.5677 65.5871 64.4205 65.9382 64.4173 66.3053C64.4141 66.6724 64.5552 67.026 64.8102 67.2901L68.0204 70.5003L64.8102 73.7105C64.6765 73.8396 64.5698 73.9941 64.4965 74.1649C64.4231 74.3357 64.3845 74.5194 64.3829 74.7053C64.3813 74.8912 64.4167 75.0756 64.4871 75.2476C64.5575 75.4197 64.6614 75.576 64.7929 75.7074C64.9243 75.8389 65.0806 75.9428 65.2527 76.0132C65.4247 76.0836 65.6091 76.119 65.795 76.1174C65.9809 76.1158 66.1646 76.0772 66.3354 76.0038C66.5062 75.9304 66.6607 75.8238 66.7898 75.6901L70 72.4799L73.2102 75.6901C73.4743 75.9451 73.8279 76.0862 74.195 76.083C74.5621 76.0798 74.9132 75.9326 75.1728 75.673C75.4323 75.4135 75.5796 75.0623 75.5828 74.6952C75.5859 74.3282 75.4448 73.9745 75.1898 73.7105L71.9796 70.5003Z"
                      fill="#5FFCBD"
                    />
                    <path
                      d="M61.1898 65.3103C60.9273 65.0478 60.5712 64.9004 60.2 64.9004C59.8288 64.9004 59.4728 65.0478 59.2102 65.3103L56 68.5205L52.7898 65.3103C52.5258 65.0553 52.1721 64.9142 51.8051 64.9173C51.438 64.9205 51.0868 65.0678 50.8273 65.3273C50.5677 65.5869 50.4205 65.9381 50.4173 66.3051C50.4141 66.6722 50.5552 67.0258 50.8102 67.2899L54.0204 70.5001L50.8102 73.7103C50.6765 73.8394 50.5698 73.9939 50.4965 74.1647C50.4231 74.3355 50.3845 74.5192 50.3829 74.7051C50.3813 74.891 50.4167 75.0754 50.4871 75.2474C50.5575 75.4195 50.6614 75.5758 50.7929 75.7072C50.9243 75.8387 51.0806 75.9426 51.2527 76.013C51.4247 76.0834 51.6091 76.1189 51.795 76.1172C51.9809 76.1156 52.1646 76.077 52.3354 76.0036C52.5062 75.9303 52.6607 75.8236 52.7898 75.6899L56 72.4797L59.2102 75.6899C59.4743 75.9449 59.8279 76.086 60.195 76.0828C60.5621 76.0796 60.9132 75.9324 61.1728 75.6728C61.4323 75.4133 61.5796 75.0621 61.5828 74.6951C61.5859 74.328 61.4448 73.9743 61.1898 73.7103L57.9796 70.5001L61.1898 67.2899C61.4523 67.0274 61.5997 66.6713 61.5997 66.3001C61.5997 65.9289 61.4523 65.5728 61.1898 65.3103Z"
                      fill="#5FFCBD"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6370_27068">
                      <rect
                        width="84"
                        height="84"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <form
                onSubmit={handleOtpSubmit}
                className="space-y-4 flex flex-col text-black"
              >
                <div className="flex flex-col gap-10">
                  <h2 className="text-2xl font-semibold text-black">
                    Please Enter OTP <br />
                    Received on &nbsp;{formData.mobile}
                  </h2>
                  <div className="flex flex-col gap-2 w-[460px]">
                    <p className="text-sm text-Grey-Shade_1 text-left">
                      Enter OTP
                    </p>
                    <div className="flex gap-2 text-black">
                      <div className="flex basis-1/6">
                        <input
                          name="otp_1"
                          type="text"
                          maxLength={1}
                          value={otp["otp_1"]}
                          onChange={handleOtpValidation}
                          className="border-2 px-6 py-4 font-bold rounded-xl w-[100%]"
                        ></input>
                      </div>
                      <div className="flex basis-1/6">
                        <input
                          name="otp_2"
                          type="text"
                          maxLength={1}
                          value={otp["otp_2"]}
                          onChange={handleOtpValidation}
                          className="border-2 px-6 py-4 font-bold rounded-xl w-[100%]"
                        ></input>
                      </div>
                      <div className="flex basis-1/6">
                        <input
                          name="otp_3"
                          type="text"
                          maxLength={1}
                          value={otp["otp_3"]}
                          onChange={handleOtpValidation}
                          className="border-2 px-6 py-4 font-bold rounded-xl w-[100%]"
                        ></input>
                      </div>
                      <div className="flex basis-1/6">
                        <input
                          name="otp_4"
                          type="text"
                          maxLength={1}
                          value={otp["otp_4"]}
                          onChange={handleOtpValidation}
                          className="border-2 px-6 py-4 font-bold rounded-xl w-[100%]"
                        ></input>
                      </div>
                      <div className="flex basis-1/6">
                        <input
                          name="otp_5"
                          type="text"
                          maxLength={1}
                          value={otp["otp_5"]}
                          onChange={handleOtpValidation}
                          className="border-2 px-6 py-4 font-bold rounded-xl w-[100%]"
                        ></input>
                      </div>
                      <div className="flex basis-1/6">
                        <input
                          name="otp_6"
                          type="text"
                          maxLength={1}
                          value={otp["otp_6"]}
                          onChange={handleOtpValidation}
                          className="border-2 px-6 py-4 font-bold rounded-xl w-[100%] text-black"
                        ></input>
                      </div>
                    </div>
                    <p className="text-sm text-left">
                      You can resend OTP in 30 seconds
                    </p>
                  </div>
                </div>
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-max bg-Primary-Shade_1 text-white py-3 px-6 rounded-full font-semibold hover:bg-green-700 transition text-lg"
                  >
                    Verify OTP ›
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {isSubmitted && step == 3 && (
        <OtpVerifiedSuccessfully onClose={handleCloseModal} />
      )}
      <div className="w-[596px] h-max flex flex-col  mx-auto px-6 py-6 bg-white rounded-3xl shadow-xl">
        <h2 className="text-2xl font-bold mb-4 text-black">
          Please Fill the Form
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 flex flex-col text-black"
        >
          {/* Dropdowns */}
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="gap-2">
                <label className="block text-Grey-Shade_1 pb-2">
                  Students&nbsp; Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="E.g, John Doe"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 font-semibold"
                />
              </div>
              <div className="gap-2">
                <label className="block text-Grey-Shade_1 pb-2">
                  Students&nbsp; Father Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  placeholder="E.g, John Doe"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 font-semibold"
                />
              </div>
            </div>

            {/* Mobile Numbers */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-Grey-Shade_1 pb-2">
                  Mobile No.
                </label>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="E.g, +91 9595959595"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 font-semibold"
                />
              </div>
              <div>
                <label className="block text-Grey-Shade_1 pb-2">
                  Alternate Mobile No.
                </label>
                <input
                  type="text"
                  name="alternateMobile"
                  value={formData.alternateMobile}
                  onChange={handleChange}
                  placeholder="E.g, +91 8585959595"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 font-semibold"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-Grey-Shade_1 pb-2">
                  Course applying for
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                >
                  <option value="" className="font-semibold">
                    Select course
                  </option>
                  {getCourseName().map((data) => (
                    <option key={data}>
                      {data}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-Grey-Shade_1 pb-2">
                  Exam Date
                </label>
                <input
                  type="date"
                  name="alternateMobile"
                  value={formData.examDate}
                  onChange={handleChange}
                  placeholder="Select Date"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-Grey-Shade_1 pb-2">Medium</label>
                <select
                  name="course"
                  value={formData.medium}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                >
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                </select>
              </div>
              <div>
                <label className="block text-Grey-Shade_1 pb-2">Email ID</label>
                <input
                  type="text"
                  name="alternateMobile"
                  value={formData.emailId}
                  onChange={handleChange}
                  placeholder="E.g, sahil123@gmail.com"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 font-semibold"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-Primary-Shade_1 text-white py-4 px-6 rounded-full font-semibold hover:bg-green-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ScholarshpForm;
