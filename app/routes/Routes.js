import React from "react";
import { Routes, Route } from "react-router-dom";
import SingleBlog from "../../components/blogs/SingleBlog";
import AboutUs from "../../pages/AboutUs";
import Blogs from "../../pages/Blogs";
import ContactUs from "../../pages/ContactUs";
import Home from "../../pages/Home";
import Pricing from "../../pages/Pricing";
import ProductsDetails from "../../pages/ProductsDetails";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:id" element={<SingleBlog />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/Office365/:name" element={<ProductsDetails />} />
    </Routes>
  );
};

export default AllRoutes;
