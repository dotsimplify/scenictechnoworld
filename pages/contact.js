import React, { useState, useEffect } from "react";
import { MdLocationPin, MdOutlineEmail, MdLocalPhone } from "react-icons/md";
import {
  onblurHandler,
  onchangeHandler,
  onSubmitHandler,
} from "../utils/helper";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState(false);
  const [status, setStatus] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onSubmitHandler(
      name,
      setName,
      phone,
      setPhone,
      email,
      setEmail,
      message,
      setMessage,
      setNameError,
      setPhoneError,
      setEmailError,
      setMessageError,
      setStatus
    );
  };

  return (
    <div>
      <div className=" lg:px-10 xl:px-28 md:px-20 py-10 mt-24 md:mt-16 max-w-8xl">
        <div className=" lg:flex bg-green-200">
          <div className=" bg-sky-500 lg:w-1/2 ">
            <div className=" px-4 py-3  md:px-16 lg:px-8 xl:px-16  lg:py-10 xl:py-10 md:py-16">
              <div className=" ">
                <h3 className=" text-white font-extrabold text-3xl  ">
                  GET IN TOUCH
                </h3>
                <h3 className=" text-gray-50 font-medium ">
                  Showcase the company's thought leadership, whether by
                  including a list of recent blog posts or articles about the
                  company in the press.
                </h3>
              </div>
              <div>
                <form onSubmit={onSubmit}>
                  <div className=" lg:flex  mt-8">
                    <div className=" flex flex-col lg:w-1/2">
                      <label className=" text-sm font-semibold text-white">
                        Name
                      </label>
                      <input
                        value={name}
                        onChange={(e) => {
                          onchangeHandler(e, setName, setNameError);
                        }}
                        onBlur={(e) => {
                          onblurHandler(e, setNameError);
                        }}
                        className=" outline-none  pl-2 
                      shadow text-white transition-all ease-in-out duration-200 focus:pl-4  placeholder:text-white/60 bg-sky-400  mb-3 mt-2 py-2.5"
                        placeholder=" Enter your  name"
                      />
                      <h3 className=" text-red-400 h-3 text-sm -mt-2">
                        {nameError && "Name Required!!"}
                      </h3>
                    </div>
                    <div className=" flex flex-col mt-3 lg:mt-0 lg:ml-6 lg:w-1/2">
                      <label className=" text-sm font-semibold text-white">
                        Phone
                      </label>
                      <input
                        value={phone}
                        onChange={(e) => {
                          onchangeHandler(e, setPhone, setPhoneError);
                        }}
                        maxLength={10}
                        onBlur={(e) => {
                          onblurHandler(e, setPhoneError);
                        }}
                        className=" outline-none  pl-2 
                      shadow text-white transition-all ease-in-out duration-200 focus:pl-4  placeholder:text-white/60 bg-sky-400  mb-3 mt-2 py-2.5"
                        placeholder=" Enter your number"
                      />
                      <h3 className=" text-red-400 h-3 text-sm -mt-2">
                        {phoneError && "Phone Required!!"}
                      </h3>
                    </div>
                  </div>
                  <div className=" lg:flex mt-3  lg:mt-4">
                    <div className=" flex flex-col lg:w-full">
                      <label className=" text-sm font-semibold text-white">
                        Email
                      </label>
                      <input
                        value={email}
                        onChange={(e) => {
                          onchangeHandler(e, setEmail, setEmailError);
                        }}
                        onBlur={(e) => {
                          onblurHandler(e, setEmailError);
                        }}
                        className=" outline-none  pl-2 
                      shadow text-white transition-all ease-in-out duration-200 focus:pl-4  placeholder:text-white/60 bg-sky-400  mb-3 mt-2 py-2"
                        placeholder=" Enter your email"
                      />
                      <h3 className=" text-red-400 h-3 text-sm -mt-2">
                        {emailError && "email Required!!"}
                      </h3>
                    </div>
                  </div>
                  <div className=" flex flex-col mt-3  w-full lg:mt-4">
                    <label className=" text-sm font-semibold text-white">
                      Message
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => {
                        onchangeHandler(e, setMessage, setMessageError);
                      }}
                      onBlur={(e) => {
                        onblurHandler(e, setMessageError);
                      }}
                      className=" outline-none  pl-2 
                      shadow text-white transition-all resize-none w-full h-28 ease-in-out duration-200 focus:pl-4  placeholder:text-white/60 bg-sky-400  mb-3 mt-2 py-2.5"
                      placeholder=" Type your message"
                    />
                    <h3 className=" text-red-400 h-3 text-sm -mt-2">
                      {messageError && "Message Required!!"}
                    </h3>
                  </div>
                  <button
                    type="submit"
                    className=" mt-6 disabled:bg-gray-400 disabled:border-gray-400  text-sky-500 bg-white font-semibold px-4 py-2 rounded transition-colors border border-white duration-300 ease-in-out hover:bg-transparent hover:text-white  "
                  >
                    {status == "" ? "Send Message" : status}
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* kghdfjhg */}
          <div className=" bg-conttactUs bg-cover lg:w-1/2  lg:px-6 h-[40rem]  relative bg-center  ">
            <div className=" flex items-center pt-8 pl-4 ">
              <MdLocationPin />
              <h3 className=" ml-4 text-gray-800 ">New Delhi India</h3>
            </div>
            <div
              className="   absolute bottom-6 md:flex  right-0 left-0 mx-2 md:w-7/12
            py-3 bg-yellow-500/30 rounded-md  justify-between px-5"
            >
              <div className=" flex flex-col justify-center items-center">
                <MdOutlineEmail className=" text-gray-500 text-xl" />
                <h2 className=" text-gray-500">Support@youremail.com</h2>
              </div>
              <div className=" flex flex-col justify-center items-center mt-4  md:mt-0">
                <MdLocalPhone className=" text-gray-500 text-xl" />
                <h2 className=" text-gray-500 ">+91836375353</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
