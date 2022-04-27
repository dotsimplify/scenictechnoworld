import React from "react";
import ContactCard from "./ContactCard";

const ContactUs1 = () => {
  return (
    <div className="lg:px-20 py-6">
      <div className=" mx-3">
        <div className=" lg:px-10">
          <h3 className=" font-extrabold text-gray-800 px-2 py-2 text-xl">
            GET IN TOUCH
          </h3>
          <h3 className=" font-normal text-gray-500 px-2 lg:w-1/2 text-sm md:w-2/3">
            A curated collection of contact screens to inspire you and spark new
            ideas in your design process. This constantly-updated list featuring
            what find on the always-fresh Muzli inventory
          </h3>
        </div>
        <ContactCard />
      </div>
    </div>
  );
};

export default ContactUs1;
