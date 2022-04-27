import React from "react";

const SecurityTable = (props) => {
  return (
    <div className=" w-full border animate-fade-in-down">
      <div className="">
        {props.TableData &&
          props.TableData.length > 0 &&
          props.TableData.map((item, index) => (
            <div
              key={index}
              className={`flex ${index % 2 && `bg-gray-200`} border-b`}
            >
              <div className=" w-full border-r pl-10 h-12 flex items-center ">
                {item.type}
              </div>
              <div className=" w-1/4 flex justify-center items-center">
                {item.status}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SecurityTable;
