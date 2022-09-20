import Head from "next/head";
import React from "react";
import SignInPage from "../components/Pages/SignIn";

export default function Signin() {
  return (
    <>
      <Head>
        <title>StoreGG || Sign In</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* SignIn Page */}
      <SignInPage />
    </>
  );
}
