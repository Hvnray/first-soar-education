import "aos/dist/aos.css";
import "../styles/globals.scss";

import AOS from "aos";
import { CustomAppProps } from "../utils";
import Footer from "../components/Footer";
import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Index.module.scss";
import { useEffect } from "react";
import { useFacebookPixelTracker } from "../customHooks";

function MyApp({ Component, pageProps }: CustomAppProps) {
  useFacebookPixelTracker()
  useEffect(() => {
    AOS.init({
      duration: 1000,
      // easing: "ease-out-cubic",
      // once: true,
      // offset: 50,
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>{`First Soar Education - ${Component.title}`}</title>
        <meta
          name="description"
          content={`First Soar Education  - ${Component.title} - Study abroad, study in the philippines`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
