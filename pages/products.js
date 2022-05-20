import React from "react";
import axios from "axios";
import Link from "next/link";

const products = (props) => {
  console.log(props, "props");
  return (
    <section className=" pt-12 mx-auto max-w-screen-xl pb-4 px-6 sm:px-8">
      <div className="text-center space-y-4 mt-12">
        <h1 className="text-gray-800 font-bold text-4xl md:text-3xl">
          Grow your business without worrying about
          <span className="text-sky-500"> Cloud Services</span>
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto leading-relaxed pb-12">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum
        </p>
        <div className="grid grid-cols-1 md:space-x-4 md:grid-cols-2 lg:grid-cols-3 grid-flow-row ">
          {props.data &&
            props.data.length > 0 &&
            props.data.map((product) => {
              return (
                <Link href={`/products/${product.slug}`}>
                  <article class=" max-w-sm pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl border mb-4">
                    <img class="object-cover" src={product.images.url} alt="" />
                    <h2 class="text-center text-3xl mt-8 font-bold min-h-18 px-12">
                      {product.title}
                    </h2>
                    <p class=" text-lg p-4 leading-relaxed  ">
                      {product.description}
                    </p>
                  </article>
                </Link>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default products;

export async function getStaticProps() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/products`
  );
  const data = await res.data.data;
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    },
    revalidate: 60,
  };
}
