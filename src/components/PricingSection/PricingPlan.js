import axios from "axios";
import React, { useState, useEffect } from "react";
import CustomButton from "../CustomButton";
import BeginnerCard from "./BeginnerCard";
import ProCard from "./ProCard";
import TeamCard from "./TeamCard";

const PricingPlan = () => {
  const [productData, setproductData] = useState([]);
  useEffect(() => {
    axios.get(process.env.REACT_APP_BASE_API_URL + "/products").then((res) => {
      setproductData(res.data.data);
    });
  }, []);

  return (
    <section className="py-20  lg:px-3">
      <div className="container lg:px-4 ">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <span className="font-bold tracking-wider uppercase text-2xl dark:text-sky-500">
            Pricing
          </span>
        </div>
        <div>
          <div className=" grid lg:grid-cols-4 md:grid-cols-2   lg:gap-6 md:gap-6 md:px-3 lg:px-5 px-1 grid-cols-1 w-full">
            {productData &&
              productData.length > 0 &&
              productData.map((item, index) => (
                <div
                  key={index}
                  className={` p-6 space-y-10 rounded border shadow-pricingShadow my-3  sm:p-8 ${
                    index == 3 ? `bg-sky-500 ` : "bg-white border-gray-200"
                  }`}
                >
                  <div className="space-y-2">
                    <h4
                      className={`text-2xl font-bold ${
                        index == 3 ? `text-white` : `text-black`
                      }`}
                    >
                      {item.title}
                    </h4>
                    <span
                      className={`text-6xl font-bold ${
                        index == 3 ? `text-white` : `text-black`
                      }`}
                    >
                      {item.price}
                      <span
                        className={`text-sm tracking-wide  ${
                          index == 3 ? `text-white` : `text-black`
                        }`}
                      >
                        /month
                      </span>
                    </span>
                  </div>
                  <p
                    className={`leading-relaxed ${
                      index == 3 ? `text-white` : `text-gray-800`
                    }`}
                  >
                    {item.description}
                  </p>
                  <ul className="flex-1 space-y-2">
                    {item.usp &&
                      item.usp.length > 0 &&
                      item.usp.map((item2, index2) => (
                        <li
                          key={index2}
                          className="flex items-center space-x-2"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className={`flex-shrink-0 w-6 h-6 ${
                              index == 3 ? `text-white` : `text-sky-500`
                            }`}
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span className=" text-gray-800">{item2.title}</span>
                        </li>
                      ))}
                  </ul>
                  {index == 3 ? (
                    <button
                      rel="noopener noreferrer"
                      href="#"
                      className="inline-block w-full bg-white hover:text-sky-500 px-5 py-3 font-bold tracking-wider text-center rounded hover:scale-95 transition-transform duration-300 ease-in-out"
                    >
                      Get Started
                    </button>
                  ) : (
                    <CustomButton
                      className=" w-full"
                      buttonText="Get Started"
                    />
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
