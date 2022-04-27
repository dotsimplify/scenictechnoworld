import React from "react";
import { Link } from "react-router-dom";

const HeaderRightSection = (props) => {
  return (
    <div className=" ">
      <div className=" lg:flex items-center justify-end gap-3">
        <div className=" hidden lg:block lg:mr-8">
          <div className="flex font-semibold text-xs gap-3 ">
            <Link to="/contact">
              <h3 className=" cursor-pointer  transition-colors duration-300 ease-in-out  bg-orange-400 hover:bg-white hover:text-orange-400  rounded text-white px-6 py-2">
                Contact Us
              </h3>
            </Link>
            <Link to="/aboutUs">
              <h3 className=" cursor-pointer  transition-colors duration-300 ease-in-out border-sky-800 hover:bg-white hover:text-sky-800  rounded text-white px-6 py-2 bg-sky-800">
                About Us
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderRightSection;
