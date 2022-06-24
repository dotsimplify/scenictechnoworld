import Link from "next/link";
import React from "react";
import ActionCard from "../components/ActionCard";
import CustomButton from "../components/CustomButton";
import Features from "../components/Features";
import HomeTopBar from "../components/HomeTopBar";
import ProductsDescription from "../components/ProductsDescription";
import SeoHeadTags from "../components/SeoHeadTags";
import SharingSection from "../components/SharingSection";
import { sharingData } from "../usefulData/sharingData";
import { seo } from "../usefulSeo";

const Home = () => {
  return (
    <>
      <SeoHeadTags
        title={seo.index.title}
        keyword={seo.index.keyword}
        description={seo.index.description}
        Url={seo.index.cenonicalUrl}
      />
      <div className=" bg-white w-full ">
        <div className=" bg-sky-500  lg:pb-10 ">
          <HomeTopBar />
        </div>
        <div className=" relative">
          <div className=" absolute  left-[10rem] -bottom-[13rem] right-1/12 right-[10rem] bg-gray-50 rounded-md border">
            <ActionCard />
          </div>
        </div>
        <div className=" bg-sky-100 pb-16 mt-[40rem] md:mt-80 lg:mt-32 pt-24 justify-center  md:flex md:flex-col md:items-center px-8 ">
          <h3 className=" text-xl pt-10 md:text-[2rem] text-sky-500">
            Step up your business with Cloud solutions
          </h3>
          <div className=" md:flex justify-center lg:flex lg:justify-between items-center lg:px-40 sm:justify-center ">
            <div className="">
              {sharingData.first &&
                sharingData.first.length > 0 &&
                sharingData.first.map((item, index) => (
                  <div key={index} className=" flex items-center">
                    <div className=" px-4  py-4   bg-slate-100 text-3xl lg:text-6xl text-sky-900 rounded-full ">
                      {item.icon}
                    </div>
                    <h3 className=" ml-6 mt-2 text-gray-400 text-xs">
                      {item.title}
                    </h3>
                  </div>
                ))}
            </div>
            <div className="lg:px-12">
              {sharingData.second &&
                sharingData.second.length > 0 &&
                sharingData.second.map((item, index) => (
                  <div key={index} className=" flex items-center">
                    <div className=" px-4  py-4  mt-6 text-3xl lg:text-6xl bg-slate-100  text-sky-900 rounded-full ">
                      {item.icon}
                    </div>
                    <h3 className=" ml-6 mt-2 text-gray-400 text-xs">
                      {item.title}
                    </h3>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <Features />
        <div className=" flex  flex-col items-center">
          <div className=" text-3xl font-extrabold flex items-center py-20 my-8 justify-center w-full  bg-sky-100">
            <h2 className=" text-gray-800 tracking-wider">Cloud Products</h2>
          </div>
          <ProductsDescription />
        </div>
        <div className="py-6 px-8 ">
          <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
            <h1 className="text-3xl font-semibold leading-tight text-center lg:text-left">
              <section className="py-6 px-8">
                <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
                  <h1 className="text-3xl font-semibold leading-tight text-center lg:text-left">
                    Ready to talk ? Feel free to contact
                  </h1>
                </div>
              </section>
            </h1>
            <Link href="/contact">
              <CustomButton buttonText="Contact" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
