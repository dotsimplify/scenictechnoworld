import React from "react";

const TableTopRow = (props) => {
  return (
    <div className="  h-auto flex">
      {props.firstRow &&
        props.firstRow.length > 0 &&
        props.firstRow.map((item, index) => (
          <div
            className={`bg-sky-500 ${
              item.id === 0 ? `w-1/3` : "w-1/6"
            } h-16 flex flex-col items-center justify-center border-r border-r-white`}
          >
            <h2 className=" text-white font-medium text-sm">{item.item}</h2>
            <h2 className=" text-white font-medium text-sm">{item.version}</h2>
          </div>
        ))}
    </div>
  );
};

export default TableTopRow;
