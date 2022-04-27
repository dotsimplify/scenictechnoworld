import React from "react";
import CustomButton from "./CustomButton";

const CTASection = () => {
  return (
    <section className="py-6 px-8">
      <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
        <h1 className="text-3xl font-semibold leading-tight text-center lg:text-left">
          Nobis a dolores, quia sit ad quasi dolorem in?
        </h1>
        <CustomButton buttonText="Contact" />
      </div>
    </section>
  );
};

export default CTASection;
