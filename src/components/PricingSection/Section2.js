import React from "react";
import ComparisonSection from "../ComparisonSection";

const Section2 = () => {
  return (
    <div>
      <div className=" flex flex-col items-center mt-8">
        <h3 className=" text-gray-400 font-semibold">
          SIMPLICITY MEETS PERFORMANCE
        </h3>
        <h3 className=" text-3xl lg:text-4xl text-gray-800 flex self-center font-extrabold mt-6">
          Cloud Hosting Plans
        </h3>
        <h3 className=" text-gray-400 font-medium  lg:w-1/2 mt-4">
          Cloud hosting provides a virtual server that you have all the control
          over. Just like in a dedicated server, you receive allocated resources
          that you do not need to share with anyone, a dedicated IP address and
          much more.
        </h3>
      </div>
      <ComparisonSection />
    </div>
  );
};

export default Section2;
