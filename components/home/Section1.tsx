import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/home/section1.module.scss";

const Section1 = () => {
  const imgs = [
    {
      src: "/image1.svg",
      alt: "girl graduating from a school in Philippines",
      size: [188, 236],
    },
    {
      src: "/image2.svg",
      alt: "Nigerian girl graduating from medical school in Philippines",
      size: [188, 290],
    },
    {
      src: "/image3.svg",
      alt: "Boy with dreadlock smiling",
      size: [295, 224],
    },
    {
      src: "/image4.svg",
      alt: "Group of students colaborating",
      size: [295, 196],
    },
    {
      src: "/image5.svg",
      alt: "Photo of a School auditorium",
      size: [295, 181],
    },
  ];
  return (
    <section className={styles.section}>
      <div className={styles.textArea}>
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
            <div className={styles.img} key={i}>
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
        <div className={styles.landscapes}>
          {imgs.slice(2).map((b, i) => (
            <div className={styles.img} key={i}>
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
