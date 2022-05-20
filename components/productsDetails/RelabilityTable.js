import React from "react";

const RelabilityTable = (props) => {
  return (
    <div className=" w-full animate-fade-in-down">
      <div className="">
        {props.List &&
          props.List.length > 0 &&
          props.List.map((item, index) => (
            <div
              className={`flex border  py-2 px-8 ${index % 2 && `bg-gray-200`}`}
            >
              <div className="w-full">{item.type}</div>
              <div className=" w-1/6 flex justify-center">{item.status}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RelabilityTable;
