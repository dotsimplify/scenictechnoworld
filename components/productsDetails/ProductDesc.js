import React from "react";
import PricingPlan from "../PricingSection/PricingPlan";

export const ProductDesc = (props) => {
  return (
    <div className="bg-gray-100">
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
          <svg
            viewBox="0 0 88 88"
            className="w-full max-w-screen-xl text-indigo-100"
          >
            <circle fill="currentColor" cx="44" cy="44" r="15.5" />
            <circle
              fillOpacity="0.2"
              fill="currentColor"
              cx="44"
              cy="44"
              r="44"
            />
            <circle
              fillOpacity="0.2"
              fill="currentColor"
              cx="44"
              cy="44"
              r="37.5"
            />
            <circle
              fillOpacity="0.3"
              fill="currentColor"
              cx="44"
              cy="44"
              r="29.5"
            />
            <circle
              fillOpacity="0.3"
              fill="currentColor"
              cx="44"
              cy="44"
              r="22.5"
            />
          </svg>
        </div>
        <div className="relative grid grid-cols-1 space-x-4 lg:grid-cols-4 ">
          {props.ProductList &&
            props.ProductList.length > 0 &&
            props.ProductList.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl"
              >
                <div className="p-5">
                  <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-sky-50">
                    <svg
                      className="w-8 h-8 text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                  <p className="mb-2 font-bold">{item.title}</p>
                  <p className="text-sm leading-5 text-gray-900">
                    {item.shortText}
                  </p>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDesc;
