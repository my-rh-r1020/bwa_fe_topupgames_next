import React from "react";
import Head from "next/head";

// Component
import SignUpPage from "../components/Pages/SignUp";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>StoreGG || Sign Up</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* SignUp */}
      <SignUpPage />
    </>
  );
}
