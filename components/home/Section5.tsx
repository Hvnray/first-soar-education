import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/home/section5.module.scss";

const Section5 = () => {
  return (
    <section className={styles.section}>
    <div className={styles.imageSection}>
      <Image
        src="/image8.svg"
        alt="Manila Graphic"
        width={358}
        height={538}
      />
    </div>
      <div className={styles.textSection}>
        <div className={styles.hOne}>
        <h1>Studying medicine in The Philippines is a great opportunity.</h1></div>
        <p>
          With us by your side, you will be on the right track in achieving your
          dreams to become a Medical Doctor. Philippines is the best affordable
          country you can study medicine.
        </p>
        <Link href={'/choosing-philippines'}>Read More</Link>
      </div>
    </section>
  );
};

export default Section5;
