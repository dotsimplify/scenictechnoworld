import React from "react";
import axios from "axios";
import HeroImage from "../../components/productsDetails/HeroImage";
import ProductDesc from "../../components/productsDetails/ProductDesc";
import ProductKeyPoints from "../../components/productsDetails/ProductKeyPoints";

const ProductsDetails = (props) => {
  return (
    <div className=" mt-10">
      <HeroImage />
      <ProductDesc ProductList={props.data && props.data.usp} />
      <div className="mb-12">
        <ProductKeyPoints />
      </div>
    </div>
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
