import React from "react";

const CustomButton = (props) => {
  return (
    <button
      type={props.type}
      disabled={props.disabled}
      onSubmit={props.onSubmit}
      onClick={props.onClick}
      className={` bg-sky-400 px-6 ${props.className}  transition-colors duration-300 ease-in-out  font-semibold py-3 mt-4 rounded text-white border hover:border-sky-600 hover:bg-transparent hover:text-gray-800`}
    >
      {props.buttonText}
    </button>
  );
};

export default CustomButton;
