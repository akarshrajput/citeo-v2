import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-[1000px] w-full">
        <p className="font-semibold text-violet-300 text-center text-8xl">
          We build websites that turn visitors into paying customers.
        </p>
      </div>
      <div className="max-w-[800px] text-gray-300 mt-10 font-medium text-center w-full">
        <p className="text-xl">
          High-converting websites designed with strategic copy and seamless
          development to attract ready-to-buy customers—helping brands worldwide
          turn visitors into loyal clients and drive growth.
        </p>
      </div>
    </div>
  );
};

export default Hero;
