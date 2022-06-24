import React from "react";
import SeoHeadTags from "../components/SeoHeadTags";
import Link from "next/link";
import { blogList } from "../usefulData/BlogListData";
import { seo } from "../usefulSeo";
import { formateDate, smallString } from "../utils/helper";

const Blogs = () => {
  return (
    <>
      <SeoHeadTags
        title={seo.blogs.title}
        description={seo.blogs.description}
        url={seo.blogs.cenonicalUrl}
        keyword={seo.blogs.keyword}
      />
      <div>
        <div className=" bg-white w-full py-10 flex items-center justify-center lg:mt-20">
          <h3 className=" font-bold text-3xl text-gray-500">Read Our Blogs</h3>
        </div>
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <div className=" border border-gray-200 rounded">
            <Link href={`/blogs/${blogList[0].id}`}>
              <div className="block max-w-sm gap-3 mx-auto  cursor-pointer sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-coolGray-900">
                <img
                  src={blogList[0].image}
                  alt=""
                  className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-coolGray-500"
                />
                <div className="p-6 space-y-2 lg:col-span-5">
                  <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                    {smallString(blogList[0].heading, 35)}
                  </h3>
                  <span className="text-xs dark:text-coolGray-400">
                    {formateDate(blogList[0].createdAt)}
                  </span>
                  <p>{smallString(blogList[0].subText, 200)}</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="grid  justify-center  grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogList.slice(1).map((item, index) => (
              <Link href={`/blogs/${item.id}`}>
                <div
                  key={index}
                  className=" group hover:no-underline cursor-pointer focus:no-underline border border-gray-200 rounded "
                >
                  <img
                    role="presentation"
                    className="object-cover w-full rounded h-60 "
                    src={item.image}
                  />
                  <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                      {smallString(item.heading, 35)}
                    </h3>
                    <span className="text-xs ">
                      {" "}
                      {formateDate(item.createdAt)}
                    </span>
                    <p>{smallString(item.subText, 200)}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
