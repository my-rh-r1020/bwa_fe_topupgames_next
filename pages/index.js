// Library
import Head from "next/head";

// Components
import HeaderPage from "../components/Pages/Header";
import Features from "../components/Parts/Features";
import Footer from "../components/Parts/Footer";
import ListGames from "../components/Parts/ListGames";
import Story from "../components/Parts/Story";

export default function Home() {
  return (
    <>
      <Head>
        <title>StoreGG</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />

        <script>AOS.init();</script>
      </Head>

      {/* Header */}
      <HeaderPage />

      {/* Feature */}
      <Features />

      {/* Game List */}
      <ListGames />

      {/* Story */}
      <Story />

      {/* Footer */}
      <Footer />
    </>
  );
}
