import React from "react";
import CustomButton from "../CustomButton";

const BeginnerCard = () => {
  return (
    <div className="flex flex-col p-6 space-y-6 rounded drop-shadow-2xl bg-white   ">
      <div className="space-y-2 ">
        <h4 className="text-2xl font-bold">Beginner</h4>
        <span className="text-6xl font-bold">Free</span>
      </div>
      <p className="mt-3 leading-relaxed dark:text-coolGray-400">
        Etiam ac convallis enim, eget euismod dolor.
      </p>
      <ul className="flex-1 mb-6 dark:text-coolGray-400">
        <li className="flex mb-2 space-x-2">
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
          <span>Aenean quis</span>
        </li>
        <li className="flex mb-2 space-x-2">
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
          <span>Morbi semper</span>
        </li>
        <li className="flex mb-2 space-x-2">
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
          <span>Tristique enim nec</span>
        </li>
      </ul>
      <CustomButton buttonText="Get Started" />
    </div>
  );
};

export default BeginnerCard;
