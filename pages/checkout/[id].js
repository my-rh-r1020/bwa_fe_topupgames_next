// Library
import Head from "next/head";

// Component
import CheckoutPage from "../../components/Pages/Checkout";

export default function Checkout() {
  return (
    <>
      <Head>
        <title>StoreGG || Checkout</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Checkout Page */}
      <CheckoutPage />
    </>
  );
}
