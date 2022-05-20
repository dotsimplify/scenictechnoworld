import React from "react";
import { VerifiedIcon } from "../../app/assets/Icons";
import { about } from "../../dummy/AboutUsData";
import Verified from "../../app/assets/images/verified.png";
import { BsCheck2Circle } from "react-icons/bs";

const TopSections = () => {
  return (
    <section className="">
      <div className="container p-4 mx-auto my-6 space-y-1 text-center">
        <span className="text-xs font-semibold tracking-wider uppercase ">
          shortcut to your dream ui
        </span>
        <h2 className="pb-3 text-3xl font-bold md:text-4xl">
          Create a stylish website in minutes
        </h2>
        <p>
          Get a jumpstart to creating your new webpage! With our fully
          responsive and carefully styled components you can get the structure
          of your website done with just a couple of clicks.
        </p>
      </div>
      <div className="container grid justify-center gap-4 mx-auto lg:grid-cols-2 xl:grid-cols-4">
        {about.map((item, index) => (
          <div className="flex flex-col px-8 py-6">
            <div className=" flex items-center my-4">
              <BsCheck2Circle className=" text-green-600 text-3xl" />

              <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font ml-4 ">
                {item.heading}
              </h2>
            </div>
            <p className="flex-1 mb-4 text-base leading-relaxed ">
              {item.subheading}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopSections;
