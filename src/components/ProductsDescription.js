import React from "react";
import CustomButton from "./CustomButton";

const ProductsDescription = () => {
  return (
    <section className="">
      <div className="container  space-y-12 ">
        <div className="flex flex-col overflow-hidden rounded-md border border-gray-300  lg:flex-row ">
          <img
            src="https://source.unsplash.com/640x480/?1"
            alt=""
            className="h-[21rem]  aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 ">
            <span className="text-xs uppercase ">Join, it's free</span>
            <h3 className="text-3xl font-bold">
              We're not reinventing the wheel
            </h3>
            <p className="my-6 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aliquam possimus quas, error esse quos.
            </p>
            <CustomButton className="w-28 py-2" buttonText="Action" />
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md border px-8 border-gray-300 lg:flex-row-reverse">
          <img
            src="https://source.unsplash.com/640x480/?2"
            alt=""
            className="h-[21rem] aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 px-4 ">
            <span className="text-xs uppercase ">Join, it's free</span>
            <h3 className="text-3xl font-bold">
              We're not reinventing the wheel
            </h3>
            <p className="my-6 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aliquam possimus quas, error esse quos.
            </p>
            <CustomButton className="w-28 py-2" buttonText="Action" />
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md border border-gray-300  lg:flex-row">
          <img
            src="https://source.unsplash.com/640x480/?3"
            alt=""
            className="h-80 dark:bg-coolGray-500 aspect-video "
          />
          <div className="flex flex-col justify-center flex-1 p-6 ">
            <span className="text-xs uppercase ">Join, it's free</span>
            <h3 className="text-3xl font-bold">
              We're not reinventing the wheel
            </h3>
            <p className="my-6 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aliquam possimus quas, error esse quos.
            </p>
            <CustomButton className="w-28 py-2" buttonText="Action" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsDescription;
