import React from "react";
import HeroImage from "../components/productsDetails/HeroImage";
import ProductDesc from "../components/productsDetails/ProductDesc";
import ProductKeyPoints from "../components/productsDetails/ProductKeyPoints";
import { desc } from "../dummy/ProductDescData";

const ProductsDetails = () => {
  return (
    <div>
      <HeroImage />
      <ProductDesc ProductList={desc} />
      <ProductKeyPoints />
    </div>
  );
};

export default ProductsDetails;
