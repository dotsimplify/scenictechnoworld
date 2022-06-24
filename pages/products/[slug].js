import React from "react";
import axios from "axios";
import ProductDesc from "../../components/productsDetails/ProductDesc";
import ProductKeyPoints from "../../components/productsDetails/ProductKeyPoints";
import PricingPlan from "../../components/PricingSection/PricingPlan";
import { useRouter } from "next/router";
import SeoHeadTags from "../../components/SeoHeadTags";

const ProductsDetails = (props) => {
  const routes = useRouter();
  const path = routes.asPath;
  //console.log(props.data);
  console.log(path);
  return (
    <>
      <SeoHeadTags title={props.data.title} />
      <div className=" mt-10">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4 lg:py-20">
          <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  {props.data.title}
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  {props.data.description}
                </p>
              </div>
            </div>
            <div>
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src="/images/illu.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <ProductDesc ProductList={props.data && props.data.usp} />
        <PricingPlan productVarients={props.data && props.data.variations} />
        {path.includes(
          "/products/microsoft-office-for-business" ||
            "/products/microsoft-office-for-enterprise"
        ) && (
          <div className="mb-12">
            <ProductKeyPoints />
          </div>
        )}
      </div>
    </>
  );
};

export default ProductsDetails;

export async function getStaticProps({ params }) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/products/${params.slug}`
  );
  const data = await res.data;
  return {
    props: { data },
  };
}
export async function getStaticPaths() {
  // Call an external API endpoint to get posts

  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/products`
  );
  const posts = await res.data.data;
  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: "blocking" };
}
