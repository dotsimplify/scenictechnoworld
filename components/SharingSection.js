import React from "react";
import { sharingData } from "../usefulData/sharingData";

const SharingSection = () => {
  return (
    <div className=" md:flex justify-center lg:flex lg:justify-between items-center lg:px-40 sm:justify-center ">
      <div className="">
        {sharingData.first &&
          sharingData.first.length > 0 &&
          sharingData.first.map((item, index) => (
            <div key={index} className=" flex items-center">
              <div className=" px-4  py-4  mt-6  bg-slate-100 text-3xl lg:text-6xl text-sky-900 rounded-full ">
                {item.icon}
              </div>
              <h3 className=" ml-6 mt-2 text-gray-400 text-xs">{item.title}</h3>
            </div>
          ))}
      </div>
      <div className="lg:px-12">
        {sharingData.second &&
          sharingData.second.length > 0 &&
          sharingData.second.map((item, index) => (
            <div key={index} className=" flex items-center">
              <div className=" px-4  py-4  mt-6 text-3xl lg:text-6xl bg-slate-100  text-sky-900 rounded-full ">
                {item.icon}
              </div>
              <h3 className=" ml-6 mt-2 text-gray-400 text-xs">{item.title}</h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SharingSection;
