// Library
import Head from "next/head";

// Component
import TransactionsPage from "../../components/Pages/Member/transactions";

export default function Transactions() {
  return (
    <>
      <Head>
        <title>StoreGG || Transactions</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* List Transactions */}
      <TransactionsPage />
    </>
  );
}
