import styles from "../../styles/medicine/section1.module.scss";

const Section1 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1 data-aos="fade-up">MD IN THE PHILIPPINES</h1>
      </div>
      <div className={styles.body}>
        <p data-aos="fade-up">Doctor of Medicine</p>
      </div>
    </section>
  );
};

export default Section1;
