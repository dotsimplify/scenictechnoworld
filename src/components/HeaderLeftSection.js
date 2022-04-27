import React from "react";
import { BiMenu } from "react-icons/bi";
import { IoMdCube } from "react-icons/io";
import { Link } from "react-router-dom";
import { Logo, SmallLogo } from "../app/assets/Icons";
import NavBar from "./NavBar";

const HeaderLeftSection = (props) => {
  return (
    <div className=" flex items-center lg:ml-8 py-4 lg:py-0 ">
      {!props.search && (
        <div className=" flex items-center ">
          <BiMenu
            onClick={props.onShow}
            className=" text-white text-2xl ml-3 lg:hidden"
          />
          <Link to="/">
            <div className=" flex items-center">
              <div className=" bg-sky-100 p-1 lg:p-1.5 rounded-full ml-2">
                <SmallLogo />
              </div>
              <h3 className=" text-white font-semibold ml-2 lg:text-xl">
                Scenic Technoworld
              </h3>
            </div>
          </Link>
          <NavBar />
        </div>
      )}
    </div>
  );
};

export default HeaderLeftSection;
