import Image from "next/image";
import styles from "../../styles/home/section2.module.scss";
import Image6 from '../../public/image6.svg'

const Section2 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.imageSection}>
        <Image
          src={Image6}
          alt="Manila Graphic"
          layout="responsive"
          priority
          quality={100}
          />
      </div>
      <div className={styles.textSection}>
        <h1>we bring you the right connections From the Philippines</h1>
        <p>
          Accredited Higher Institutions, low tuition fees, easy admission
          requirements and overall student life quality at your fingertips which
          makes it an excellent place to pursue your studies.
        </p>
      </div>
    </section>
  );
};

export default Section2;
