import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/choosing-philippines/section4.module.scss";
import Img1 from "../../public/choosing-philippines/section4-img1.svg";
import Img2 from "../../public/choosing-philippines/section4-img2.svg";
import Img3 from "../../public/choosing-philippines/section4-img3.svg";
import { useNavbarObserver } from "../../customHooks";
import { useEffect, useState } from "react";

const Section4 = () => {
  const width = useNavbarObserver();
  const [textArea, settextArea] = useState("fade-up");

  useEffect(() => {
    settextArea(width >= 800 ? "fade-left" : "fade-up");
  }, [width]);

  const block = [
    {
      image: Img1,
      alt: "Philippines medical students",

      width: 322,
    },
    {
      image: Img2,
      alt: "Doctor Naya",
      width: 265,
    },
    {
      image: Img3,
      alt: "Philippines medical students",
      width: 361,
    },
  ];
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1 data-aos="fade-up">Do you want to study Medicine in the Philippines?</h1>
      </div>
      <div className={styles.body}>
        <section className={styles.images}>
          {block.map((b, i) => (
            <div className={styles.img} key={i} data-aos={textArea} data-aos-delay={i * 200}>
              <Image
                src={b.image}
                alt={b.alt}
                priority
                quality={100}
              />
            </div>
          ))}
        </section>
        <Link data-aos="fade-up" href={"/medicine"}>Click Here</Link>
      </div>
    </section>
  );
};

export default Section4;
