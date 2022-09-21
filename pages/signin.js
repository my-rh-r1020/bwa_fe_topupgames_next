import React from "react";
import Head from "next/head";

// Component
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

// Check Token Player
export async function getServerSideProps(context) {
  const { token } = context.req.cookies;

  if (token) {
    return { redirect: { destination: "/", permanent: false } };
  }

  return { props: { data: [] } };
}
