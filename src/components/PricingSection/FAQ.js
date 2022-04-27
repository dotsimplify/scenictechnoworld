import axios from "axios";
import React, { useState, useEffect } from "react";

const FAQ = () => {
  const [faqsData, setFaqsData] = useState();
  useEffect(() => {
    axios.get(process.env.REACT_APP_BASE_API_URL + "/faqs").then((res) => {
      setFaqsData(res.data);
    });
  }, []);
  return (
    <section className=" text-gray-700">
      <div className="container  p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
          How it works
        </p>
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="max-w-xl mx-auto">
          <div className="divide-y w-full">
            {faqsData &&
              faqsData.length > 0 &&
              faqsData.map((item, index) => (
                <details key={index} className="w-full">
                  <summary className="py-2 outline-none cursor-pointer focus:underline text-sky-500 ">
                    {item.question}
                  </summary>
                  <div className=" px-4 pb-4">
                    <p>{item.answer}</p>
                  </div>
                </details>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
