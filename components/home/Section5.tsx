import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/home/section5.module.scss";
import Image8 from '../../public/image8.png'

const Section5 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.imageSection} data-aos="fade-up-right" data-aos-offet="500">
        <Image
          src={Image8}
          alt="Medical student holding her note book"
          height={538}
          width={408}
          quality={100}
          priority
        />
      </div>
      <div className={styles.textSection}>
        <div className={styles.hOne}  data-aos="fade-up" data-aos-offet="300">
          <h1>Studying medicine in The Philippines is a great opportunity.</h1>
        </div>
        <p  data-aos="fade-up" data-aos-delay="300">
          With us by your side, you will be on the right track in achieving your
          dreams to become a Medical Doctor. Philippines is the best affordable
          country you can study medicine.
        </p>
        <span data-aos="fade-up" data-aos-delay="300"><Link href={"/medicine"}>Read More</Link></span>
      </div>
    </section>
  );
};

export default Section5;
