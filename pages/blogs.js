import React from "react";
import BlogsList from "../components/blogs/BlogsList";

const Blogs = () => {
  return (
    <div>
      <div className=" bg-white w-full py-10 flex items-center justify-center">
        <h3 className=" font-bold text-3xl text-gray-500">Read Our Blogs</h3>
      </div>
      <BlogsList />
    </div>
  );
};

export default Blogs;
