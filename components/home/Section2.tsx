import Image from "next/image";
import styles from "../../styles/home/section2.module.scss";

const Section2 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.imageSection}>
        <Image
          src="/image6.svg"
          alt="Manila Graphic"
          width={505}
          height={278}
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
