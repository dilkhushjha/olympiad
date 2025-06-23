"use client";

import Lottie from "lottie-react";
import loadingAnimation from "../../public/loader/loader.json"; // Place the Lottie file in the public folder

const Loader = ({loading, children}) => {
  return (
    <>
    {loading && (<div className="fixed inset-0 flex items-center justify-center bg-white/95 z-50">
      <Lottie animationData={loadingAnimation} loop={true} className="w-40 h-40" />
    </div>)}
    {children}
    </>
  );
};

export default Loader;
