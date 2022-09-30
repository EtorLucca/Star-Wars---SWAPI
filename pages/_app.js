import React from "react";
import Head from "next/head";
import { LoadProvider } from "../contexts/LoadContext";
import "../styles/reset.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Star Wars Universe</title>
      </Head>
      <LoadProvider>
        <Component {...pageProps} />
      </LoadProvider>
    </>
  );
}

export default MyApp;