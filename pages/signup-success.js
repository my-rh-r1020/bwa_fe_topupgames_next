// Library
import React from "react";
import Head from "next/head";

// Component
import SignUpSuccessPage from "../components/Pages/SignUp/signup-success";

export default function SignupSuccess() {
  return (
    <>
      <Head>
        <title>StoreGG || Signup Success</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Signup Success */}
      <SignUpSuccessPage />
    </>
  );
}
