import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/home/section3.module.scss";
import Image7 from "../../public/image7.svg";
import { useNavbarObserver } from "../../customHooks";
import { useEffect, useState } from "react";

const Section3 = () => {
  const width = useNavbarObserver();
  const [photoArea, setphotoArea] = useState("fade-up");

  useEffect(() => {
    setphotoArea(width >= 800 ? "fade-left" : "fade-up");
  }, [width]);
  return (
    <section className={styles.section}>
      <div className={styles.textArea} >
        <h1  data-aos="fade-right" data-aos-offset="250">We are always the students choice</h1>
        <p  data-aos="fade-right">
          We provide the best for students Nationwide. First Soar Education is
          committed to provide easy and stress-free process for your study
          abroad with no consultation fee.
        </p>
        <Link href={"/contact-us"}>
          <button className={styles.connect}  data-aos="fade-up" data-aos-delay="100">Connect With Us</button>
        </Link>
      </div>
      <div className={styles.photoArea} data-aos={photoArea} data-aos-offset="400">
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
