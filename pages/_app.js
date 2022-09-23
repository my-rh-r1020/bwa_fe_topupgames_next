import Head from "next/head";

// Import CSS
import "../styles/globals.css";
import "../styles/myweb.css";
import "../styles/utilities.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Bootstrap */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" />
        <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"></script>

        {/* Google Font */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        {/* AOS Animation */}
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <script async src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      </Head>
      <Component {...pageProps} />
      <ToastContainer position="top-right" autoClose={2500} />
    </>
  );
}

export default MyApp;
