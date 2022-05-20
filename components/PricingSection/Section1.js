import React from "react";
import ComparisonSection from "../ComparisonSection";

const Section1 = () => {
  return (
    <div>
      <div className=" flex flex-col items-center mt-8">
        <h3 className=" text-gray-400 font-semibold">
          HIGH QUALITY WEBSITE HOSTING
        </h3>
        <h3 className=" text-3xl lg:text-4xl text-gray-800 flex self-center font-extrabold mt-6">
          Shared Web Hosting Plans
        </h3>
        <h3 className=" text-gray-400 font-medium   lg:w-1/2 mt-4">
          Shared hosting means that multiple different websites are all hosted
          on the same server, with each user being allocated a certain amount of
          storage space and a certain amount of resources.
        </h3>
      </div>
      <ComparisonSection />
    </div>
  );
};

export default Section1;
