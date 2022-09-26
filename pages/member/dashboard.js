// Library
import Head from "next/head";

import DashboardPage from "../../components/Pages/Member/dashboard";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>StoreGG || Dashboard</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Dashboard */}
      <DashboardPage />
    </>
  );
}

// Private Route
export async function getServerSideProps(context) {
  const { xpToken } = context.req.cookies;

  // Check Token Player
  if (!xpToken) {
    return { redirect: { destination: "/signin", permanent: false } };
  }

  return { props: { data: [] } };
}
