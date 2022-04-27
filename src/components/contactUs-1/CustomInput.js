import React from "react";

const CustomInput = (props) => {
  return (
    <div className=" flex flex-col  py-1">
      <label className=" text-sm font-medium mb-1">{props.title}</label>
      <input
        placeholder={props.placeholder}
        className=" outline-none px-2   transition-all duration-100 caret-sky-600 ring-1 focus:ring-green-500 placeholder:text-gray-400 ease-in-out text-sm  focus:px-4 border py-2 border-gray-200 rounded "
      />
    </div>
  );
};

export default CustomInput;
