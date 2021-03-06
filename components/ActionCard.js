import React from "react";

const ActionCard = () => {
  return (
    <div className="p-4  lg:flex md:flex  container mx-auto ">
      <div className="  w-full ">
        <div>
          <img
            alt="failed??"
            className=" object-fill  w-full h-3/4"
            src="/images/cloud.svg"
          />
        </div>
        <h3 className=" text-gray-800 text-sm mt-4">
          Providing Customers Trust in the New World of Cloud Solutions
        </h3>
      </div>
      <div className="mx-4 w-full ">
        <img
          alt="failed??"
          className=" object-fill w-full h-3/4"
          src="/images/cloud-2.jpg"
        />
        <h3 className=" text-gray-800 text-sm mt-4 ">
          We do more than sell IT infrastructure: we help you reach your goals.
        </h3>
      </div>
      <div className=" w-full">
        <img
          alt="failed??"
          className=" object-fill w-full h-3/4"
          src="/images/cloud-3.png"
        />
        <h3 className=" text-gray-800 text-sm mt-4 text-justify">
          Helping you make your ideas a reality
        </h3>
      </div>
    </div>
  );
};

export default ActionCard;
