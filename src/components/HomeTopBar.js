import React from "react";
import heroImage from "../app/assets/images/hero.svg";

const HomeTopBar = () => {
  return (
    <div className=" lg:px-1 py-8 ">
      <div className=" lg:flex lg:flex-row-reverse lg:justify-between lg:items-center  ">
        <img
          src={heroImage}
          alt="hero with all cloud providers"
          className=" lg:w-1/2  "
        />
        <div className="  lg:w-full px-5 lg:px-8">
          <h3 className=" text-white font-semibold lg:ml-8 mt-4 lg:text-5xl  lg:pb-4 text-2xl   ">
            We don't just build websites, we build websites that SELLS
          </h3>
          <h3 className=" text-gray-300 font-medium   lg:ml-8">
            A successful website does three things: It attracts the right kinds
            of visitors. Guides them to the main services or product you offer.
            Collect Contact details for future ongoing relation.
          </h3>
          <div className=" flex justify-start items-center  mt-8 lg:mt-10 lg:ml-8  lg:pb-10 ">
            <button
              rel="noopener noreferrer"
              href="#"
              className="inline-block w-44 bg-white text-sky-500 px-5 py-3 font-bold tracking-wider text-center rounded hover:scale-95 transition-transform duration-300 ease-in-out"
            >
              SEE PLANS
            </button>
            <button
              rel="noopener noreferrer"
              href="#"
              className="inline-block w-36 ml-3 bg-orange-400 text-white px-5 py-3 font-bold tracking-wider text-center rounded hover:scale-95 transition-transform duration-300 ease-in-out"
            >
              JOIN FREE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTopBar;
