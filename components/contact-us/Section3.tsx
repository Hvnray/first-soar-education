import styles from "../../styles/medicine/section3.module.scss";

const Section3 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1>Eligibility</h1>
      </div>
      <div className={styles.body}>
        <p>
          In line with the American standard, Medicine in the Philippines is a
          postgraduate course. Students who do not have an undergraduate degree
          such as degrees in chemistry, biochemistry, biotechnology and others
          can enroll starting with a 2-year pre-med course before proceeding to
          medicine.
        </p>
        <ul>
          <li>
            <p><span>As a graduate,</span> You can directly proceed  to study Medicine required you have your undergraduate degree.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Section3;
