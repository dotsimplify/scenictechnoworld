import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { List } from "../../dummy/comparisonList";
import ComparisonSection from "../ComparisonSection";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

const PricingComparison = () => {
  const [office1, setOffice1] = useState(true);
  const [office2, setOffice2] = useState(false);
  const [office3, setOffice3] = useState(false);
  const [office4, setOffice4] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Office1");

  return (
    <div className=" flex flex-col items-center">
      <div className=" lg:hidden relative">
        <div
          onClick={() => {
            setDropDown(true);
          }}
          className=" cursor-pointer border border-gray-300 rounded-xl flex items-center py-3 px-3 justify-between"
        >
          <h3 className=" font-semibold text-sky-500">{selectedCategory}</h3>
          {dropDown ? (
            <MdOutlineKeyboardArrowUp className=" ml-40 text-xl text-sky-500" />
          ) : (
            <MdOutlineKeyboardArrowDown className=" ml-40 text-xl text-sky-500" />
          )}
        </div>
        {dropDown && (
          <div className=" absolute bg-white w-full border border-gray-300 rounded-md">
            {List &&
              List.length > 0 &&
              List.map((item, index) => (
                <h3
                  key={index}
                  className=" py-2 my-1 px-3 text-gray-800 font-medium"
                  onClick={() => {
                    setDropDown(false);
                    setSelectedCategory(item.name);
                  }}
                >
                  {item.name}
                </h3>
              ))}
          </div>
        )}
      </div>
      <div className=" hidden lg:block">
        <div className=" flex  px-10 border border-gray-300 border-b-0 drop-shadow-camparisonShadow rounded rounded-b-none ">
          <div
            onClick={() => {
              setOffice1(true);
              setOffice2(false);
              setOffice3(false);
              setOffice4(false);
            }}
            className={` px-20 py-4 text-xl text-gray-800 font-semibold ${
              office1 && "border-b-2 border-b-sky-500 text-sky-500"
            }`}
          >
            Office1
          </div>
          <div
            onClick={() => {
              setOffice1(false);
              setOffice2(true);
              setOffice3(false);
              setOffice4(false);
            }}
            className={` px-20 py-4 text-xl text-gray-800 font-semibold ${
              office2 && "border-b-2 border-b-sky-500 text-sky-500"
            }`}
          >
            Office2
          </div>
          <div
            onClick={() => {
              setOffice1(false);
              setOffice2(false);
              setOffice3(true);
              setOffice4(false);
            }}
            className={` px-20 py-4 text-xl text-gray-800 font-semibold ${
              office3 && "border-b-2 border-b-sky-500 text-sky-500"
            }`}
          >
            Office3
          </div>
          <div
            onClick={() => {
              setOffice4(true);
              setOffice2(false);
              setOffice3(false);
              setOffice1(false);
            }}
            className={` px-20 py-4 text-xl text-gray-800 font-semibold ${
              office4 && "border-b-2 border-b-sky-500 text-sky-500"
            }`}
          >
            Office4
          </div>
        </div>
      </div>
      <div className=" hidden lg:block  w-full  lg:border-t lg:border-t-gray-300">
        {office1 && <Section1 />}
        {office2 && <Section2 />}
        {office3 && <Section3 />}
        {office4 && <Section4 />}
      </div>
      <div className=" lg:hidden  w-full  lg:border-t lg:border-t-gray-300">
        {selectedCategory == "Office1" && <Section1 />}
        {selectedCategory == "Office2" && <Section2 />}
        {selectedCategory == "Office3" && <Section3 />}
        {selectedCategory == "Office4" && <Section4 />}
      </div>
    </div>
  );
};

export default PricingComparison;
