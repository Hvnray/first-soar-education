import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/medicine/section4.module.scss";

const Section4 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.body}>
        <div className={styles.img}>
          <Image
            src={"/medicine-footer-banner.svg"}
            alt={"photo group of medical students"}
            width={1200}
            height={320}
            priority
          />
        </div>
        <p className={styles.highlight}>
          “Wherever the art of Medicine is loved, there is also a love of
          Humanity”
        </p>
        <p>
        Begin your journey by filling our contact form. We will help you take that bold step.
        </p>
        <Link href={"/"}>Fill Form</Link>
      </div>
    </section>
  );
};

export default Section4;
