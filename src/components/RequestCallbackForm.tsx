import Image from "next/image";
import React from "react";

const RequestCallbackForm = ({ paddingClass = "spacing-xy" }: {
  paddingClass?: string
}) => {
  return (
    <main className={`container ${paddingClass}`}>
      <div className='flex justify-between flex-col md:flex-row'>
        <div className="col w-full md:w-[40%]">
          <Image src="/images/contact_illustration.svg" width={350} height={457} alt='' quality={100} />
        </div>
        <div className="col w-full flex justify-end">
          <div className="bg-Primary-Shade_6 p-6 rounded-[24px] w-full max-w-[800px]">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Request a Callback</h1>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="form-control">
                  <label className="label">
                    Students&apos; Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="E.g, John Doe"
                  />
                </div>

                {/* Mobile Number */}
                <div className="form-control">
                  <label className="label">Mobile Number
                  </label>
                  <input
                    type="text"
                    placeholder="E.g, +91 9595959595"
                  />
                </div>

                {/* Class */}
                <div className="form-control">
                  <label className="label">Class
                  </label>
                  <select >
                    <option>10th</option>
                    <option>11th</option>
                    <option>12th</option>
                    <option>Dropper</option>
                  </select>
                </div>

                {/* Goals */}
                <div className="form-control">
                  <label className="label">Goals
                  </label>
                  <select >
                    <option>JEE Advanced</option>
                    <option>JEE Main</option>
                    <option>NEET</option>
                    <option>Olympiad</option>
                  </select>
                </div>

                {/* Preferred Courses */}
                <div className="form-control">
                  <label className="label">Preferred Courses
                  </label>
                  <select >
                    <option>Online Courses</option>
                    <option>Offline Courses</option>
                  </select>
                </div>

                {/* State */}
                <div className="form-control">
                  <label className="label">State
                  </label>
                  <select >
                    <option>Andhra Pradesh</option>
                    <option>Telangana</option>
                    <option>Karnataka</option>
                    <option>Tamil Nadu</option>
                    <option>Kerala</option>
                  </select>
                </div>
              </div>

              {/* Terms and Submit */}
              <div className="mt-6">
                <p className="text-sm text-Black-Shade_-2">
                  By continuing, you agree to our{" "}
                  <a href="#" className=" underline">
                    Terms & Conditions
                  </a>
                </p>
                <button className="btn-secondary w-full !py-4 text-white rounded-full mt-12">Submit</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
};

export default RequestCallbackForm;



