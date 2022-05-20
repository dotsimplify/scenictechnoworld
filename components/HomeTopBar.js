import React from "react";
import Link from "next/link";

const HomeTopBar = () => {
  return (
    <div className=" lg:px-1 py-8 container  mx-auto">
      <div className=" lg:flex lg:flex-row-reverse lg:mt-12 lg:justify-between lg:items-center  ">
        <img
          src="/images/hero.svg"
          alt="hero with all cloud providers"
          className=" lg:w-1/2  "
        />
        <div className="  lg:w-full px-5 lg:px-8">
          <h3 className=" text-white font-semibold lg:ml-8 mt-4 lg:text-5xl  lg:pb-4 text-2xl   ">
            One point for all your cloud needs
          </h3>
          <h3 className=" text-gray-100 font-medium   lg:ml-8">
            A successful website does three things: It attracts the right kinds
            of visitors. Guides them to the main services or product you offer.
            Collect Contact details for future ongoing relation.
          </h3>
          <div className=" mt-8 lg:mt-10 lg:ml-2  lg:pb-10 ">
            <Link href="/products">
              <a>
                <button className="inline-block ml-3 bg-orange-400 text-white px-5 py-3 font-semibold tracking-wider text-center rounded hover:scale-95 transition-transform duration-300 ease-in-out">
                  Explore Products
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTopBar;
