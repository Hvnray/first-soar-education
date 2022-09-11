import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/home/section3.module.scss";
import Image7 from "../../public/image7.svg";

const Section3 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.textArea}>
        <h1>We are always the students choice</h1>
        <p>
          We provide the best for students Nationwide. First Soar Education is
          committed to provide easy and stress-free process for your study
          abroad with no consultation fee.
        </p>
        <Link href={"/contact-us"}>
          <button className={styles.connect}>Connect With Us</button>
        </Link>
      </div>
      <div className={styles.photoArea}>
        <Image
          className={styles.image}
          src={Image7}
          alt="Vercel Logo"
          priority
          quality={100}
        />
      </div>
    </section>
  );
};

export default Section3;
