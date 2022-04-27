import React from "react";
import ComparisonSection from "../ComparisonSection";

const Section4 = () => {
  return (
    <div>
      <div className=" flex flex-col items-center mt-8">
        <h3 className=" text-gray-400 font-semibold">
          EMAIL HOSTING HANDCRAFTED JUST FOR YOU
        </h3>
        <h3 className=" text-3xl lg:text-4xl text-gray-800 flex self-center font-extrabold mt-6">
          Email Hosting Plans
        </h3>
        <h3 className=" text-gray-400 font-medium   lg:w-1/2 mt-4">
          Email hosting is a unique solution focused primarily on email servers.
          This service works independently from website hosting, hence your
          business will still operate at full scale even while you're setting
          everything up.
        </h3>
      </div>
      <ComparisonSection />
    </div>
  );
};

export default Section4;
