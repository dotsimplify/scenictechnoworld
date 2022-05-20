import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { blogList } from "../../dummy/BlogListData";
import { formateDate } from "../../utils/helper";

const SingleBlog = () => {
  const param = useParams();
  const blogId = param.id;
  const [singleBlog, setSingleBlog] = useState(
    blogList.filter((blog) => blog.id == blogId)
  );

  console.log(blogId);

  return (
    <div className=" md:mx-10 mx-1 lg:mx-60 lg:py-10">
      <div className=" flex items-center lg:mx-7 mb-4 ">
        <img
          src={singleBlog[0].authorImage}
          className=" rounded-full h-16 w-16"
        />
        <div className=" ml-3 mt-3">
          <h3 className=" text-gray-700 font-semibold">
            {singleBlog[0].author}
          </h3>
          <h3 className=" text-gray-400 text-sm">
            {formateDate(singleBlog[0].createdAt)}
          </h3>
        </div>
      </div>
      <div className="lg:mx-7">
        <h3 className=" font-extrabold text-gray-800 text-3xl">
          {singleBlog[0].heading}
        </h3>
        <div className=" flex justify-center h-96 mt-3">
          <img src={singleBlog[0].image} className=" w-full  " />
        </div>
        <h3 className=" mt-9 text-lg">{singleBlog[0].subText}</h3>
      </div>
    </div>
  );
};

export default SingleBlog;
