import React from "react";

const ProCard = ({ title, desc, usp, price }) => {
  return (
    <div className="flex flex-col p-6 space-y-6 rounded drop-shadow-2xl sm:p-8 bg-sky-500 text-coolGray-900">
      <div className="space-y-2">
        <h4 className="text-2xl font-bold text-white">{title}</h4>
        <span className="text-6xl font-bold text-white">
          {price}
          <span className="text-sm tracking-wide text-white">/month</span>
        </span>
      </div>
      <p className="leading-relaxed text-white">{desc}</p>
      <ul className="flex-1 space-y-2">
        {usp &&
          usp.length > 0 &&
          usp.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="flex-shrink-0 w-6 h-6 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className=" text-white">{item.title}</span>
            </li>
          ))}
      </ul>
      <button
        rel="noopener noreferrer"
        href="#"
        className="inline-block w-full bg-white hover:text-sky-500 px-5 py-3 font-bold tracking-wider text-center rounded hover:scale-95 transition-transform duration-300 ease-in-out"
      >
        Get Started
      </button>
    </div>
  );
};

export default ProCard;
