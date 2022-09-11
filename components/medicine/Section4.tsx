import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/medicine/section4.module.scss";
import Img from "../../public/medicine-footer-banner.svg";

const Section4 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.body}>
        <div className={styles.img}>
          <Image
            src={Img}
            alt={"photo group of medical students"}
            quality={100}
            // width={1200}
            // height={320}
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
        <Link href={"/contact-us"}>Fill Form</Link>
      </div>
    </section>
  );
};

export default Section4;
