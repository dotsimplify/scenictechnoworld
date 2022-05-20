import React from "react";
import ComparisonSection from "../ComparisonSection";

const Section3 = () => {
  return (
    <div>
      <div className=" flex flex-col items-center mt-8">
        <h3 className=" text-gray-400 font-semibold">
          BUY VPS USA WITH HOSTINGER AND BREATHE NEW LIFE INTO YOUR WEBSITE
        </h3>
        <h3 className=" text-3xl lg:text-4xl text-gray-800 flex self-center font-extrabold mt-6">
          VPS Hosting Plans
        </h3>
        <h3 className=" text-gray-400 font-medium   lg:w-1/2 mt-4">
          Up to 30x faster than most powerful shared web hosting services.
          Blazing fast speed and no-downtime policy are the key factors of 100%
          cloud-based VPS hosting technology.
        </h3>
      </div>
      <ComparisonSection />
    </div>
  );
};

export default Section3;
