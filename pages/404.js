// Library
import React from "react";
import Head from "next/head";
import NotFoundPage from "../components/Pages/NotFound";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>StoreGG || 404</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Not Found */}
      <NotFoundPage />
    </>
  );
}
