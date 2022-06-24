import React from "react";
import SeoHeadTags from "../components/SeoHeadTags";
import { about } from "../usefulData/AboutUsData";
import { BsCheck2Circle } from "react-icons/bs";
import { seo } from "../usefulSeo";

const AboutUs = () => {
  return (
    <>
      <SeoHeadTags
        title={seo.about.title}
        description={seo.about.description}
        Url={seo.about.cenonicalUrl}
        keyword={seo.about.keyword}
      />
      <div className=" lg:mx-40 lg:mt-20">
        <div>
          <div className="container p-4 mx-auto my-6 space-y-1 text-center">
            <span className="text-xs font-semibold tracking-wider uppercase ">
              shortcut to your dream ui
            </span>
            <h2 className="pb-3 text-3xl font-bold md:text-4xl">
              Create a stylish website in minutes
            </h2>
            <p>
              Get a jumpstart to creating your new webpage! With our fully
              responsive and carefully styled components you can get the
              structure of your website done with just a couple of clicks.
            </p>
          </div>
          <div className="container grid justify-center gap-4 mx-auto lg:grid-cols-2 xl:grid-cols-4">
            {about.map((item, index) => (
              <div className="flex flex-col px-8 py-6">
                <div className=" flex items-center my-4">
                  <BsCheck2Circle className=" text-green-600 text-3xl" />

                  <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font ml-4 ">
                    {item.heading}
                  </h2>
                </div>
                <p className="flex-1 mb-4 text-base leading-relaxed ">
                  {item.subheading}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex flex-wrap w-full">
              <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      STEP 1
                    </h2>
                    <p className="leading-relaxed">
                      VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                      Kinfolk bespoke try-hard cliche palo santo offal.
                    </p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      STEP 2
                    </h2>
                    <p className="leading-relaxed">
                      Vice migas literally kitsch +1 pok pok. Truffaut hot
                      chicken slow-carb health goth, vape typewriter.
                    </p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="5" r="3"></circle>
                      <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      STEP 3
                    </h2>
                    <p className="leading-relaxed">
                      Coloring book nar whal glossier master cleanse umami.
                      Salvia +1 master cleanse blog taiyaki.
                    </p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      STEP 4
                    </h2>
                    <p className="leading-relaxed">
                      VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                      Kinfolk bespoke try-hard cliche palo santo offal.
                    </p>
                  </div>
                </div>
                <div className="flex relative">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      FINISH
                    </h2>
                    <p className="leading-relaxed">
                      Pitchfork ugh tattooed scenester echo park gastropub
                      whatever cold-pressed retro.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="lg:w-3/5 lg:h-2/3 flex self-center md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
                src="https://dummyimage.com/1200x500"
                alt="step"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
