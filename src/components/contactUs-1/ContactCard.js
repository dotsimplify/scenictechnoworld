import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { BsTwitter, BsGithub, BsFacebook } from "react-icons/bs";
import CustomInput from "./CustomInput";

const ContactCard = () => {
  return (
    <div className=" lg:px-10  mt-4 lg:mt-6 w-full">
      <div className="  lg:flex w-full drop-shadow-md bg-white">
        <div className=" bg-gray-700 sm:rounded-t-md lg:rounded-none  lg:rounded-l-md lg:w-1/2  ">
          <div className=" px-4 lg:px-7 pt-5 text-2xl font-semibold py-4  font-Sans text-white">
            <h2 className=" ">Contact Information</h2>
            <h3 className=" text-sm mt-4 leading-6 font-normal ">
              we are happy to answer any questions you might have, explore
              potential partnerships and receive requests from interested
              affiliates. Simply choose from one of the options of getting in
              touch with us below.
            </h3>
            <div className=" flex items-center mt-7">
              <FiPhoneCall />
              <h3 className=" ml-3 text-sm">+918349738627</h3>
            </div>
            <div className=" flex items-center mt-4">
              <MdOutlineEmail />
              <h3 className=" ml-3 text-sm">support@gamil.com</h3>
            </div>
            <div className=" flex  items-center mt-4 py-5">
              <BsFacebook />
              <BsGithub className=" ml-10" />
              <BsTwitter className=" ml-10" />
            </div>
          </div>
        </div>
        <div className=" px-5 lg:px-12 lg:w-1/2  border border-gray-200">
          <div className=" pb-3">
            <h3 className="  py-4  font-semibold text-xl text-gray-800">
              Send us a Message
            </h3>
            <form>
              <div className=" ">
                <CustomInput title="Name" placeholder="Enter Name" />
                <CustomInput title="Work-Email" placeholder="Enter Email" />
                <CustomInput title="Phone" placeholder="Enter Phone" />
                <CustomInput title="Company Name" placeholder="Enter Name" />
                <div className=" flex justify-end mt-2">
                  <button className=" bg-sky-800 px-8 py-2 transition-all scale-100 rounded-md text-white ">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
