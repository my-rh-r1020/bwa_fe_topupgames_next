// Library
import React from "react";
import Head from "next/head";

// Components
import Navbar from "../../components/Parts/Navbar";
import Footer from "../../components/Parts/Footer";
import DetailGamePage from "../../components/Pages/Detail";

export default function DetailGame() {
  return (
    <>
      <Head>
        <title>StoreGG || Game</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Detail Game */}
      <DetailGamePage />

      {/* Footer */}
      <Footer />
    </>
  );
}
