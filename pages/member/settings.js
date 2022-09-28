// Library
import Head from "next/head";

// Component
import SettingPage from "../../components/Pages/Member/settings";

export default function Settings() {
  return (
    <>
      <Head>
        <title>StoreGG || Settings</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Setting Page */}
      <SettingPage />
    </>
  );
}
