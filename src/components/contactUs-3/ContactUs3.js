import React, { useState } from "react";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import CustomButton from "../CustomButton";

const ContactUs3 = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [errormsg, setErrormsg] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState(false);
  const [buttonState, setButtonState] = useState(true);

  const onSendLead = () => {
    if (name == "") {
      setNameError(true);
    } else {
      if (email == "") {
        setEmailError(true);
      } else {
        if (phone == "") {
          setPhoneError(true);
        } else {
          if (message == "") {
            setMessageError(true);
          } else {
            alert("empty");
          }
        }
      }
    }
  };
  // console.log(buttonState, "start");
  return (
    <div className=" mx-40 mt-8 animate-fade-in-down">
      <div className=" bg-sky-800 flex py-10  rounded-md">
        <div className=" w-1/2 ">
          <div className=" px-8">
            <h3 className="  text-2xl font-bold text-white">GET IN TOUCH</h3>
            <h3 className=" text-sm text-gray-200 w-3/4 ">
              we are happy to answer any questions you might have, explore
              potential partnerships and receive requests from interested
              affiliates. Simply choose from one of the options of getting in
              touch with us below.
            </h3>
            <div className=" flex items-center mt-20">
              <BsFillTelephoneFill className=" text-white text-xl" />
              <h3 className=" text-white mx-2">+96299292846268</h3>
            </div>
            <div className=" flex items-center mt-8">
              <MdEmail className=" text-white text-xl" />
              <h3 className=" text-white mx-2">support@email.com</h3>
            </div>
            <div className=" flex items-center mt-8">
              <MdLocationOn className=" text-white text-2xl" />
              <h3 className=" text-white mx-2 w-1/2">
                Hareram Chauraha, Sirasiya - Mairwa Rd, Hata, Uttar Pradesh
              </h3>
            </div>
            <div className=" flex items-center mt-20  gap-8">
              <div className=" bg-white rounded-full cursor-pointer  p-2">
                <FaFacebookSquare className=" text-blue-800 text-lg " />
              </div>
              <div className=" bg-white rounded-full cursor-pointer p-2">
                <BsTwitter className=" text-sky-600 text-lg" />
              </div>
              <div className=" bg-white rounded-full cursor-pointer p-2">
                <RiInstagramFill className="  text-lg text-pink-600" />
              </div>
            </div>
          </div>
        </div>
        <div className=" w-1/2 bg-white rounded-md px-6 mx-8 py-5">
          <form>
            <div className="  ">
              <div className=" flex items-center">
                <h2 className=" pb-2">Name </h2>
                <h4 className=" text-red-600 pl-1 text-sm">*</h4>
              </div>
              <div
                className={` border ${
                  nameError ? `border-red-400` : `border-gray-400`
                } flex items-center rounded-md px-3`}
              >
                <BsFillPersonFill className=" text-xl text-gray-400" />
                <input
                  onChange={(e) => {
                    if (e.target.value != "") {
                      setNameError(false);
                      setName(e.target.value);
                    }
                  }}
                  onBlur={(e) => e.target.value == "" && setNameError(true)}
                  type="text"
                  className=" outline-none py-2 pl-1 transition-all duration-200 ease-in-out focus:pl-2 w-full"
                  placeholder=" Enter name"
                />
              </div>
              <h3 className=" h-5 text-sm text-red-500 pl-2">{}</h3>
            </div>
            <div className="  ">
              <div className=" flex items-center">
                <h2 className=" pb-2"> Work Email </h2>
                <h4 className=" text-red-600 pl-1 text-sm">*</h4>
              </div>
              <div
                className={` border ${
                  emailError ? `border-red-400` : `border-gray-400`
                } flex items-center rounded-md px-3`}
              >
                <MdEmail className=" text-xl text-gray-400" />
                <input
                  onChange={(e) => {
                    if (e.target.value != "") {
                      setEmailError(false);
                      setEmail(e.target.value);
                    }
                  }}
                  onBlur={(e) => {
                    if (e.target.value == "") {
                      setEmailError(true);
                    } else {
                      if (
                        e.target.value.includes("@gmail") ||
                        e.target.value.includes("@yahoo")
                      ) {
                        setErrormsg("Only Work Email Allow");
                      } else {
                        setErrormsg("");
                      }
                    }
                  }}
                  className=" outline-none py-2 pl-1 transition-all duration-200 ease-in-out focus:pl-2 w-full"
                  placeholder=" Enter email"
                />
              </div>
              <h3 className=" h-5 text-[12px] text-red-500 pl-2">{errormsg}</h3>
            </div>
            <div className="  ">
              <div className=" flex items-center">
                <h2 className=" pb-2">Phone </h2>
                <h4 className=" text-red-600 pl-1 text-sm">*</h4>
              </div>
              <div
                className={` border ${
                  phoneError ? `border-red-400` : `border-gray-400`
                } flex items-center rounded-md px-3`}
              >
                <BsFillTelephoneFill className=" text-lg text-gray-400" />
                <input
                  onChange={(e) => {
                    if (e.target.value != "") {
                      setPhoneError(false);
                      setPhone(e.target.value);
                    }
                  }}
                  onBlur={(e) => e.target.value == "" && setPhoneError(true)}
                  className=" outline-none py-2 pl-1 transition-all duration-200 ease-in-out focus:pl-2 w-full"
                  placeholder="Enter Number"
                  type="number"
                  maxLength={10}
                />
              </div>
              <h3 className=" h-5 text-sm text-red-500 pl-2">{}</h3>
            </div>
            <div className="  ">
              <div className=" flex items-center">
                <h2 className=" pb-2">Message </h2>
                <h4 className=" text-red-600 pl-1 text-sm">*</h4>
              </div>
              <div
                className={` border ${
                  messageError ? `border-red-400` : `border-gray-400`
                } flex items-center rounded-md px-3`}
              >
                <textarea
                  onChange={(e) => {
                    if (e.target.value != "") {
                      setMessage(e.target.value);
                      setMessageError(false);
                      setButtonState(false);
                    }
                  }}
                  onBlur={(e) => e.target.value == "" && setMessageError(true)}
                  className=" outline-none py-2 pl-2 rounded-md transition-all duration-200 ease-in-out focus:pl-4 w-full"
                  placeholder="Enter Your Message"
                />
              </div>
              <h3 className=" h-5 text-sm text-red-500 pl-2">{}</h3>
            </div>
            <CustomButton
              onClick={onSendLead}
              buttonText="SEND"
              className={`px-12 py-2 `}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs3;
