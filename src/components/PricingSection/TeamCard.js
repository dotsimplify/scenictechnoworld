import React from "react";
import CustomButton from "../CustomButton";

const TeamCard = () => {
  return (
    <div className="p-6 space-y-6 rounded drop-shadow-2xl bg-white sm:p-8 dark:bg-coolGray-900">
      <div className="space-y-2">
        <h4 className="text-2xl font-bold">Team</h4>
        <span className="text-6xl font-bold">
          $72
          <span className="text-sm tracking-wide">/month</span>
        </span>
      </div>
      <p className="leading-relaxed dark:text-coolGray-400">
        Phasellus ultrices bibendum nibh in vehicula.
      </p>
      <ul className="space-y-2 dark:text-coolGray-400 ">
        <li className="flex items-start space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="flex-shrink-0 w-6 h-6 dark:text-sky-500"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>Everything in Pro</span>
        </li>
        <li className="flex items-start space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="flex-shrink-0 w-6 h-6 dark:text-sky-500"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>Fusce sem ligula</span>
        </li>
        <li className="flex items-start space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="flex-shrink-0 w-6 h-6 dark:text-sky-500"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>Curabitur dictum</span>
        </li>
        <li className="flex items-start space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="flex-shrink-0 w-6 h-6 dark:text-sky-500"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>Duis odio eros</span>
        </li>
        <li className="flex items-start space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="flex-shrink-0 w-6 h-6 dark:text-sky-500"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>Vivamus ut lectus ex</span>
        </li>
      </ul>
      <CustomButton className=" w-full" buttonText="Get Started" />
    </div>
  );
};

export default TeamCard;
