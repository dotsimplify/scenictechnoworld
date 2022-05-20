import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoMdCube } from "react-icons/io";
import Link from "next/link";
import { Logo, SmallLogo } from "../app/assets/Icons";
import NavBar from "./NavBar";

const HeaderLeftSection = (props) => {
  const [explore, setExplore] = useState(false);

  return (
    <div className=" flex items-center lg:ml-8 py-4 lg:py-0 ">
      {!props.search && (
        <div className=" flex items-center ">
          <BiMenu
            onClick={props.onShow}
            className=" text-white text-2xl ml-3 lg:hidden"
          />

          <div className=" flex items-center cursor-pointer">
            <div className=" bg-sky-100 p-1 lg:p-1.5 rounded-full ml-2">
              <Link href="/">
                <SmallLogo />
              </Link>
            </div>
            <Link href="/">
              <h3 className=" text-white font-semibold ml-2 lg:text-xl">
                Scenic Technoworld
              </h3>
            </Link>
          </div>
          <div className="ml-28 hidden lg:block">
            <div className=" flex font-semibold text-xs items-center h-full">
              <div
                className=" flex  cursor-pointer lg:py-5 items-center  relative "
                onMouseOver={() => {
                  setExplore(true);
                }}
                onMouseLeave={() => {
                  setExplore(false);
                }}
              >
                <h3 className=" font-semibold  text-base text-white ">
                  Explore
                </h3>
                {explore ? (
                  <TiArrowSortedUp className=" text-white text-xl  pl-1  " />
                ) : (
                  <TiArrowSortedDown className=" text-white text-xl  pl-1 " />
                )}
                {explore && <ExploreMenu navItems={props.navItems} />}
              </div>
              <Link href="/pricing">
                <div className="   ml-8 cursor-pointer  px-4 py-1 rounded  text-white">
                  <h3 className=" font-semibold  text-base text-white  ">
                    Pricing
                  </h3>
                </div>
              </Link>
              <Link href="/blogs">
                <div className="   ml-8 cursor-pointer  px-4 py-1 rounded  text-white">
                  <h3 className=" font-semibold  text-base text-white  ">
                    Blogs
                  </h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderLeftSection;
