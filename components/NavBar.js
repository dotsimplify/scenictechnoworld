import React, { useState } from "react";
import Link from "next/link";
import ExploreMenu from "./ExploreMenu";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { office } from "../dummy/MsOficeList";

const NavBar = (props) => {
  const [explore, setExplore] = useState(false);
  return (
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
          <h3 className=" font-semibold  text-base text-white ">Explore</h3>
          {explore ? (
            <TiArrowSortedUp className=" text-white text-xl  pl-1  " />
          ) : (
            <TiArrowSortedDown className=" text-white text-xl  pl-1 " />
          )}
          {explore && <ExploreMenu navItems={props.navItems} />}
        </div>
        <Link href="/pricing">
          <div className="   ml-8 cursor-pointer  px-4 py-1 rounded  text-white">
            <h3 className=" font-semibold  text-base text-white  ">Pricing</h3>
          </div>
        </Link>
        <Link href="/blogs">
          <div className="   ml-8 cursor-pointer  px-4 py-1 rounded  text-white">
            <h3 className=" font-semibold  text-base text-white  ">Blogs</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
