import React from "react";
import CustomButton from "./CustomButton";

const ProductsDescription = () => {
  return (
    <section className="px-8">
      <div className="  space-y-12 ">
        <div className="flex flex-col overflow-hidden rounded-md border border-gray-300  lg:flex-row ">
          <img
            src="/images/AWS.jpg"
            alt=""
            className="h-[21rem]  aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 ">
            <h3 className="text-3xl font-bold">Amazone AWS Cloud</h3>
            <p className="my-6 ">
              CloudFirst's Consulting Services can help you make your business
              critical applications ready for the cloud. We, at CloudFirst,
              provide exceptional services that demonstrate scalability,
              flexibility, and the potential of AWS.
            </p>
            <CustomButton className="w-28 py-2" buttonText="Action" />
          </div>
        </div>
        <div className="flex flex-col justify-between  overflow-hidden rounded-md border  border-gray-300 lg:flex-row">
          <div className="flex flex-col justify-center flex-1 px-4 ">
            <h3 className="text-3xl font-bold">Microsoft Azure</h3>
            <p className="my-6 ">
              Azure Automation provides a way for users to automate the manual,
              long-running, error-prone, and frequently repeated tasks that are
              commonly performed in a cloud and enterprise environment. It saves
              time and increases the reliability of regular administrative tasks
              and even schedules them to be automatically performed at regular
              intervals. You can automate processes using runbooks or automate
              configuration management using Desired State Configuration
            </p>
            <CustomButton className="w-28 py-2" buttonText="Action" />
          </div>
          <img src="/images/az.png" alt="" className="h-[21rem] " />
        </div>
      </div>
    </section>
  );
};

export default ProductsDescription;
