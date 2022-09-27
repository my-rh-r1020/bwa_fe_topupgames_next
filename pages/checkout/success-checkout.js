// Library
import Head from "next/head";

import SuccessCheckoutPage from "../../components/Pages/Checkout/success-checkout";

export default function SuccessCheckout() {
  return (
    <>
      <Head>
        <title>StoreGG || Success Checkout</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Success Checkout */}
      <SuccessCheckoutPage />
    </>
  );
}
