// Library
import Head from "next/head";

// Component
import TransactionDetailPage from "../../components/Pages/Member/transaction-detail";

export default function TransactionDetail() {
  return (
    <>
      <Head>
        <title>StoreGG || Detail Transactions</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Transaction Detail */}
      <TransactionDetailPage />
    </>
  );
}
