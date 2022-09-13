import styles from "../../styles/choosing-philippines/section2.module.scss";
import { degreesInPhillipines } from "../../utils";

const Section2 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1>Degrees you can study in the Philippines</h1>
      </div>
      <div className={styles.body}>
        <ul>
          {degreesInPhillipines.map((b) => (
            <li key={b}  data-aos="fade-up"> {b}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Section2;
