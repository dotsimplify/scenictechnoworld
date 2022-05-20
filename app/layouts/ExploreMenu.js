import React from "react";
import Link from "next/link";

const ExploreMenu = (props) => {
  return (
    <div
      style={{ top: "100%", left: "-20%" }}
      className=" lg:absolute lg:bg-white w-40  drop-shadow"
    >
      {props.navItems !== undefined &&
        props.navItems.length > 0 &&
        props.navItems.map((item, index) => (
          <Link href="/">
            <h3
              key={index}
              className=" pl-4 py-2 text-sm hover:text-white  hover:bg-sky-500/80 font-normal  text-gray-600"
            >
              {item.title}
            </h3>
          </Link>
        ))}
    </div>
  );
};

export default ExploreMenu;
