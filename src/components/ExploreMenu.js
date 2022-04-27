import React, { useState } from "react";
import { Link } from "react-router-dom";
import { exploreData } from "../dummy/ExploreData";
import { office } from "../dummy/MsOficeList";

const ExploreMenu = (props) => {
  const [ms365, setMs365] = useState(false);
  return (
    <div
      style={{ top: "100%", left: "-20%" }}
      className=" lg:absolute lg:bg-white w-40  drop-shadow"
    >
      {exploreData &&
        exploreData.map((item, index) => (
          <Link to={item.path}>
            <h3
              onMouseOver={() => {
                if (index === 0) {
                  setMs365(true);
                } else {
                  setMs365(false);
                }
              }}
              key={index}
              className=" pl-4 py-2 text-sm hover:text-white  hover:bg-sky-500/80 font-normal  text-gray-600"
            >
              {item.name}
            </h3>
          </Link>
        ))}
      {ms365 && (
        <div className=" lg:absolute lg:bg-white w-40 lg:ml-[9.9rem] -mt-36 drop-shadow">
          {office &&
            office.map((item, index) => (
              <Link to={item.path}>
                <h3
                  key={index}
                  className=" pl-4 py-2 text-sm hover:text-white  hover:bg-sky-500/80 font-normal  text-gray-600"
                >
                  {item.name}
                </h3>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default ExploreMenu;
