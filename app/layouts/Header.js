import React from "react";
import Link from "next/link";
import { SmallLogo } from "../assets/Icons";

const Header = (props) => {
  return (
    <div
      style={{ position: "fixed", zIndex: "99", top: 0 }}
      className={`bg-sky-500 w-full py-1 relative `}
    >
      <div className=" hidden lg:block ">
        <div className="flex justify-between px-8">
          <div className="w-full py-2 flex items-center ">
            <Link href="/">
              <div className=" flex items-center cursor-pointer ">
                <div className=" h-12 w-12 rounded-full flex items-center justify-center bg-white">
                  <SmallLogo className=" h-full w-full" />
                </div>
                <h3 className=" font-semibold text-xl ml-5 text-white">
                  SCENIC TECHNO WORLD
                </h3>
              </div>
            </Link>
            <div className=" w-1/3 flex ml-6 justify-between px-24">
              <Link href="/products">
                <button className=" pr-12 text-white transition-all duration-500 ease-in-out hover:underline hover:underline-offset-8">
                  Products
                </button>
              </Link>
              <Link href="/blogs">
                <button className=" text-white transition-all duration-500 ease-in-out hover:underline hover:underline-offset-8">
                  Blogs
                </button>
              </Link>
            </div>
          </div>
          <div className=" w-1/3  justify-center items-center flex ">
            <Link href="/about-us">
              <button className="  text-white transition-all duration-500 ease-in-out hover:underline hover:underline-offset-8">
                About
              </button>
            </Link>
            <Link href="/contact">
              <button className=" bg-yellow-400 px-5 py-1 text-white rounded ml-6">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" lg:hidden    ">
        <div className=" flex items-center justify-between px-2 md:px-8">
          <div className=" flex items-center">
            <div className=" bg-sky-100 p-1 lg:p-1.5 rounded-full ml-2">
              <SmallLogo />
            </div>
            <h3 className=" text-white font-semibold ml-2 lg:text-xl relative">
              Scenic Techno World
            </h3>
          </div>
          {/*  Mobile Menu Icon */}
          <div className=" w-7 mr-4  cursor-pointer " onClick={props.onOpen}>
            <div
              className={` h-[2px] ${
                props.NavBar ? ` rotate-45 translate-y-0 ` : ``
              } transform transition duration-500 ease-in-out border-gray-700 bg-white mt-1`}
            ></div>
            <div
              className={` h-[2px] ${
                props.NavBar ? ` hidden` : ``
              } transform transition duration-500 ease-in-out border-gray-700 bg-white mt-1`}
            ></div>
            <div
              className={` h-[2px] ${
                props.NavBar ? ` -rotate-45 -translate-y-1.5` : ``
              } transform transition duration-500 ease-in-out border-gray-700 bg-white mt-1`}
            ></div>
          </div>
        </div>
        <div
          className={` bg-sky-500 absolute top-12 h-screen transition-all w-full duration-500  translate-x-full ease-in-out ${
            props.NavBar && ` translate-x-0  `
          }`}
        >
          dhruv
        </div>
      </div>
    </div>
  );
};
export default Header;
