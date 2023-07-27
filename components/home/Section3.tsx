import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/home/section3.module.scss";
import Image7 from "../../public/image7.png";
import { useNavbarObserver } from "../../customHooks";
import { useEffect, useState } from "react";

const Section3 = () => {

  const imageStyle = {
    objectFit: 'cover',
  };

  const width = useNavbarObserver();
  const [photoArea, setphotoArea] = useState("fade-up");

  useEffect(() => {
    setphotoArea(width >= 800 ? "fade-left" : "fade-up");
  }, [width]);
  return (
    <section className={styles.section}>
      <div className={styles.textArea}>
        <h1
          data-aos={width >= 800 ? "fade-right" : "fade-up"}
          data-aos-offset={width >= 800 ? 250 : 50}
        >
          We are always the students choice
        </h1>
        <p data-aos={width >= 800 ? "fade-right" : "fade-up"}>
          We provide the best for students Nationwide. First Soar Education is
          committed to provide easy and stress-free process for your study
          abroad with no consultation fee.
        </p>
        <Link href={"/contact-us"}>
          <button
            className={styles.connect}
            data-aos="fade-up"
            data-aos-delay={width >= 800 ? 100 : 0}
          >
            Connect With Us
          </button>
        </Link>
      </div>
      <div
        className={styles.photoArea}
        data-aos={photoArea}
        data-aos-offset={width >= 800 ? 400 : 150}
      >
        <Image
          className={styles.image}
          src={Image7}
          alt="Student giving a thumbs up on blue background"
          priority
          quality={100}
          style={imageStyle as React.CSSProperties}
        />
      </div>
    </section>
  );
};

export default Section3;
