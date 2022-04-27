import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchBar = (props) => {
  return (
    <div className=" flex items-center justify-end ">
      <div className="">
        {props.search && (
          <input
            className={`${
              props.search ? ` bg-sky-600 lg:w-[58rem] md:w-[42rem]  ` : ``
            } outline-none pl-2 text-xl py-2 `}
          />
        )}
      </div>
      <div className=" flex items-center ">
        {props.search ? (
          <h3 onClick={props.onSearchCancel} className="  cursor-pointer ">
            Cancel
          </h3>
        ) : (
          <BiSearch
            onClick={props.onSearch}
            className="mr-3 text-2xl cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
