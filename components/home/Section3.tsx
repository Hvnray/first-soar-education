import Image from "next/image";
import styles from "../../styles/home/section3.module.scss";

const Section3 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.textArea}>
        <h1>We are always the students choice</h1>
        <h2>
          We provide the best for students Nationwide. First Soar Education is
          committed to provide easy and stress-free process for your study
          abroad with no consultation fee.
        </h2>
        <button className={styles.connect}>Connect With Us {"  "}&#8594;</button>
      </div>
      <div className={styles.photoArea}>
      <button className={styles.connect}>Connect With Us {"  "}&#8594;</button>
        <Image className={styles.image} src="/image7.svg" alt="Vercel Logo" width={503} height={567} />
      </div>
    </section>
  );
};

export default Section3;
