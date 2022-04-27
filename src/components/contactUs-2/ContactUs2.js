import React from "react";
import map from "../../app/assets/images/map.jpg";
import { MdLocationOn, MdEmail, MdCall } from "react-icons/md";

const ContactUs2 = () => {
  return (
    <div className="px-10  py-6">
      <div className=" relative">
        <div className=" flex h-[35rem] rounded-md border overflow-hidden border-purple-500 ">
          <div className=" w-1/2  bg-purple-900 h-full "></div>
          <div className=" w-1/3  bg-white h-full "></div>
        </div>
        <div className=" absolute flex flex-row px-10  top-2 py-12 w-full ">
          <div className=" w-1/2 bg-white h-full ">
            <div className=" px-20 py-4 pt-10">
              <h3 className=" font-semibold text-gray-800 ">
                Want us to Contact You
              </h3>
              <form>
                <div>
                  <h3 className=" font-medium text-sm mt-4">leave a message</h3>
                  <input
                    className=" outline-none border py-1.5 mt-2 w-2/3 pl-2 focus:pl-4 ring-1 focus:ring-purple-600 "
                    placeholder="Name"
                  />
                  <input
                    className=" outline-none border py-1.5 mt-5 w-2/3 pl-2 focus:pl-4 ring-1 focus:ring-purple-600  "
                    placeholder=" Email"
                  />
                  <textarea
                    placeholder=" max-150"
                    className=" outline-none border h-40 py-1 mt-5  pl-2 focus:pl-4w-2/3 ring-1 focus:ring-purple-600 "
                  />
                </div>
              </form>
              <button className=" px-10 py-2 bg-purple-900 text-white font-bold ">
                Send
              </button>
            </div>
          </div>
          <div className=" w-1/3 h-ful bg-BgShape overflow-hidden">
            <div className=" bg-opacity-70 bg-purple-900 h-full">
              <h3 className=" px-28 bg-white mt-10 absolute py-2 ml-20 text-sm font-semibold">
                Contact Us
              </h3>
              <div className=" absolute mt-24 ml-12 px-8">
                <div className=" flex items-center">
                  <MdLocationOn className=" text-white text-2xl bg-purple-900 rounded-full px-1 py-0.5" />
                  <h3 className=" w-56 text-sm font-medium ml-3 text-white">
                    Hareram Chauraha, Sirasiya - Mairwa Rd, Hata, Uttar Pradesh
                  </h3>
                </div>
                <div className=" flex items-center mt-4">
                  <MdEmail className=" text-white text-2xl bg-purple-900 rounded-full px-1 py-0.5" />
                  <h3 className=" w-56 text-sm font-medium ml-3 text-white">
                    supportdk@gmail.com
                  </h3>
                </div>
                <div className=" flex items-center mt-4">
                  <MdCall className=" text-white text-2xl bg-purple-900 rounded-full px-1 py-0.5" />
                  <h3 className=" w-56 text-sm font-medium ml-3 text-white">
                    +918268269233
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs2;
