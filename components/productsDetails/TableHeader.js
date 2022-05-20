import React from "react";

const TableHeader = (props) => {
  return (
    <div className=" flex mt-5  ">
      {props.headerData &&
        props.headerData.length > 0 &&
        props.headerData.map((item, index) => (
          <div key={index} className="flex py-1  items-center mx-7 ">
            {item.icon}
            <div className=" px-2 py-2">
              <h3 className=" font-semibold text-sm text-gray-800">
                {item.Title}
              </h3>
              <h4 className=" text-xs text-gray-600 font-normal">
                {item.subText}
              </h4>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TableHeader;
