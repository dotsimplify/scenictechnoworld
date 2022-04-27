import React from "react";
import { data } from "../../dummy/sideMenu";

const SideDrawer = (props) => {
  // console.log(props, "sidebar");
  return (
    <div
      className={` bg-sky-700 ${
        props.show ? "w-full" : "w-0"
      } h-screen sticky top-0  `}
    >
      {props.show ? (
        <div>
          <div className=" flex flex-col px-8 py-3 bg-sky-400 ">
            <button className=" block px-12 bg-sky-200 py-1 rounded text-sky-500 font-semibold">
              Login
            </button>
            <button className=" block px-12 bg-orange-400 py-1 rounded mt-3 text-white font-semibold">
              Signup
            </button>
          </div>
          <div className={`flex flex-col`}>
            {data.map((item) => (
              <div className=" border-b-[1px] border-sky-200 flex  pl-4 py-4">
                <h3 className=" font-semibold text-sky-200 text-xl">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SideDrawer;
