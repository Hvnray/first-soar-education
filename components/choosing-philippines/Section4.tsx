import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/choosing-philippines/section4.module.scss";

const Section4 = () => {
  const block = [
    {
      image: "/choosing-philippines/section4-img1.svg",
      alt: "Philippines medical students",

      width: 322,
    },
    {
      image: "/choosing-philippines/section4-img2.svg",
      alt: "Doctor Naya",
      width: 265,
    },
    {
      image: "/choosing-philippines/section4-img3.svg",
      alt: "Philippines medical students",
      width: 361,
    },
  ];
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1>Do you want to study Medicine in the Philippines?</h1>
      </div>
      <div className={styles.body}>
        <section className={styles.images}>
          {block.map((b, i) => (
            <div className={styles.img} key={i}>
              <Image src={b.image} alt={b.alt} width={b.width} height={247} priority/>
            </div>
          ))}
        </section>
        <Link href={'/medicine'}>Click Here</Link>
      </div>
    </section>
  );
};

export default Section4;
