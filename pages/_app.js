import React from "react";
import "../styles/global.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import Layout from "../app/layouts/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta http-equiv="content-language" content="en-us" />
        <meta
          name="keywords"
          content="Google workspace , google cloud , amazon web services"
        />
      </Head>
      <div className="container mx-auto">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}

export default MyApp;
