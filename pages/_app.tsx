import "../styles/globals.scss";
import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Index.module.scss";
import Footer from "../components/Footer";
import { CustomAppProps } from "../utils";

function MyApp({ Component, pageProps }: CustomAppProps) {
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
