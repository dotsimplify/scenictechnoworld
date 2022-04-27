import React from "react";
import f from "../app/assets/images/join.svg";
import s from "../app/assets/images/store.svg";
import t from "../app/assets/images/disc.svg";
import CustomButton from "./CustomButton";

const ActionCard = () => {
  return (
    <div className=" px-4 lg:flex md:flex py-4  ">
      <div className=" flex flex-col items-center  my-2 mx-4  ">
        <img alt="failed??" className=" object-fill" src={f} />
        <h3 className=" text-gray-800 mt-4">
          Join millions of 3D creators and showcase your work
        </h3>
        <CustomButton buttonText="JOIN" />
      </div>
      <div className=" flex flex-col items-center my-2 mx-4 ">
        <img alt="failed??" className=" object-fill" src={s} />
        <h3 className=" text-gray-800 mt-4">
          Join millions of 3D creators and showcase your work
        </h3>
        <CustomButton buttonText="JOIN" />
      </div>
      <div className=" flex flex-col items-center my-2 mx-4">
        <img alt="failed??" className=" object-fill" src={t} />
        <h3 className=" text-gray-800 mt-4">
          Join millions of 3D creators and showcase your work
        </h3>
        <CustomButton buttonText="JOIN" />
      </div>
    </div>
  );
};

export default ActionCard;
