import React from "react";
import ActionCard from "../components/ActionCard";
import CTASection from "../components/CTASection";
import Features from "../components/Features";
import HomeTopBar from "../components/HomeTopBar";
import ProductsDescription from "../components/ProductsDescription";
import SharingSection from "../components/SharingSection";

const Home = () => {
  return (
    <div className=" bg-white w-full  h-Auto  ">
      <div className=" bg-primary  lg:pb-20  ">
        <HomeTopBar />
      </div>
      <div className=" relative">
        <div
          style={{ left: "10%", right: "10%", bottom: "-15rem" }}
          className=" absolute bg-white rounded-md drop-shadow-lg"
        >
          <ActionCard />
        </div>
      </div>

      <div className=" bg-sky-100 pb-12 mt-[58rem] md:mt-80 lg:mt-72 justify-center  md:flex md:flex-col md:items-center px-8 ">
        <h3 className=" text-xl pt-10 md:text-[2rem] text-sky-500">
          Share Embaded 3D modeles AnyWhere online
        </h3>
        <SharingSection />
      </div>
      <Features />
      <div className=" flex  flex-col items-center">
        <div className=" text-3xl font-extrabold flex items-center py-20 my-8 justify-center w-full  bg-sky-100">
          <h2 className=" text-gray-800 tracking-wider">ProductsDescription</h2>
        </div>
        <ProductsDescription />
      </div>

      <CTASection />
    </div>
  );
};

export default Home;
