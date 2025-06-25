"use client";

import RegisterForm from "./RegisterForm";


const NextChampion = () => {




  return (
    <>

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
            <RegisterForm studentFeedBack={false} />
          </div>
        </div>
      </section>
    </>
  );
};

export default NextChampion;
