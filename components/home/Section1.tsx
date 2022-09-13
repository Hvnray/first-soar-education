import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/home/section1.module.scss";
import Image1 from "../../public/image1.svg";
import Image2 from "../../public/image2.svg";
import Image3 from "../../public/image3.svg";
import Image4 from "../../public/image4.svg";
import Image5 from "../../public/image5.svg";
import { useNavbarObserver } from "../../customHooks";
import { useEffect, useState } from "react";

const Section1 = () => {
  const width = useNavbarObserver();
  const [textArea, settextArea] = useState("");
  const [landscapes, setlandscapes] = useState("fade-left");
  const [portraits, setportraits] = useState("fade-up");

  useEffect(() => {
    settextArea(width >= 800 ? "fade-right" : "fade-up");
    setlandscapes(width >= 800 ? "fade-left" : "fade-up");
    setportraits(width >= 800 ? "fade-up" : "fade-up");
  }, [width]);

  const imgs = [
    {
      src: Image1,
      alt: "girl graduating from a school in Philippines",
      size: [188, 236],
    },
    {
      src: Image2,
      alt: "Nigerian girl graduating from medical school in Philippines",
      size: [188, 290],
    },
    {
      src: Image3,
      alt: "Boy with dreadlock smiling",
      size: [295, 224],
    },
    {
      src: Image4,
      alt: "Group of students colaborating",
      size: [295, 196],
    },
    {
      src: Image5,
      alt: "Photo of a School auditorium",
      size: [295, 181],
    },
  ];
  return (
    <section className={styles.section}>
      <div className={styles.textArea} data-aos={textArea}>
        <h1>Do you want to study in the Philippines?</h1>
        <h2>
          We are always happy to consult and guide you on every process to study
          in the Philippines.
        </h2>
        <Link href="/choosing-philippines">Read more...</Link>
        <Link href="/contact-us" passHref>
          <a className={styles.button}>Register Now</a>
        </Link>
      </div>
      <div className={styles.photoArea}>
        <div className={styles.portraits}>
          {imgs.slice(0, 2).map((b, i) => (
            <div
              className={styles.img}
              key={i}
              data-aos={portraits}
              data-aos-duration="1000"
              data-aos-delay={i * 150}
            >
              <Image
                src={b.src}
                alt={b.alt}
                priority
                quality={100}
                width={b.size[0]}
                height={b.size[1]}
              />
            </div>
          ))}
        </div>
        <div className={styles.landscapes}>
          {imgs.slice(2).map((b, i) => (
            <div
              className={styles.img}
              key={i}
              data-aos={landscapes}
              data-aos-duration="1000"
              data-aos-delay={i * 200}
            >
              <Image
                src={b.src}
                alt={b.alt}
                width={b.size[0]}
                height={b.size[1]}
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section1;
