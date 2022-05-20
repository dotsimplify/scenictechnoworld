import React from "react";

const Cookie = () => {
  return (
    <div class="w-72 bg-white rounded-lg shadow-md p-6">
      <div class="w-16 mx-auto relative -mt-10 mb-3">
        <img class="-mt-1" src="/icons/cookie.svg" alt="cookie" />
      </div>
      <span class="w-full sm:w-48  block leading-normal text-gray-800 text-md mb-3">
        We care about your data, and we&#x27;d love to use cookies to make your
        experience better.
      </span>
      <div class="flex items-center justify-between">
        <a class="text-xs text-gray-400 mr-1 hover:text-gray-800" href="#">
          Privacy Policy
        </a>
        <div class="w-1/2">
          <button
            type="button"
            class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            See more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cookie;
