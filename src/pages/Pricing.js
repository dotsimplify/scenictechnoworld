import React, { useEffect, useState } from "react";
import FAQ from "../components/PricingSection/FAQ";
import PricingComparison from "../components/PricingSection/PricingComparison";
import PricingPlan from "../components/PricingSection/PricingPlan";

const Pricing = () => {
  return (
    <div className=" lg:px-9">
      <PricingPlan />
      {/*  <PricingComparison /> */}
      <FAQ />
    </div>
  );
};

export default Pricing;
