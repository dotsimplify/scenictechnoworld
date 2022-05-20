import React from "react";
import { FaFacebookSquare, FaTelegram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { Logo } from "../assets/Icons";

const Footer = () => {
  return (
    <div className="px-4 pt-16 mt-20 md:px-24 lg:px-8 bg-gray-200">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <div className="flex items-center">
            <Logo />
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              Scenic Technoworld
            </span>
          </div>
        </div>
        <div className="space-y-2 text-sm ml-5">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Phone:</p>
            <a
              href="tel:850-123-5021"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              850-123-5021
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            <a
              href="mailto:info@lorem.mail"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              info@lorem.mail
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              312 Lovely Street, NY
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-900">
            Social
          </span>
          <div className="flex items-center mt-2 space-x-6 ">
            <a
              href="/"
              className="text-gray-500 transition-all duration-300 ml-5   hover:text-sky-500 hover:scale-125"
            >
              <BsTwitter className=" text-xl" />
            </a>
            <a
              href="/"
              className="text-gray-500 transition-all duration-300   hover:text-pink-600 hover:scale-125"
            >
              <RiInstagramFill className=" text-xl" />
            </a>
            <a
              href="/"
              className="text-gray-500 transition-all duration-300 hover:text-blue-800 hover:scale-125"
            >
              <FaFacebookSquare className=" text-xl" />
            </a>
            <a
              href="/"
              className="text-gray-500 transition-all duration-300 hover:text-blue-600 hover:scale-125"
            >
              <FaTelegram className=" text-xl" />
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken
            spare ribs salami.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2020 Lorem Inc. All rights reserved.
        </p>
        <div className="flex   items-center justify-center mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <a
            href="/"
            className="text-sm text-gray-600 transition-colors  ml-4 duration-300 hover:text-deep-purple-accent-400"
          >
            F.A.Q
          </a>
          <a
            href="/"
            className="text-sm text-gray-600 transition-colors ml-4 duration-300 hover:text-deep-purple-accent-400"
          >
            Privacy Policy
          </a>
          <a
            href="/"
            className="text-sm text-gray-600 transition-colors ml-4 duration-300 hover:text-deep-purple-accent-400"
          >
            Terms &amp; Conditions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
