import Image from "next/image";
import styles from "../../styles/home/section6.module.scss";
import { studentsFeedBack } from "../../utils";

const Section6 = () => {
  return (
    <section className={styles.section}>
      <h2>Feedback From Students</h2>
      <div className={styles.feedbacks}>
        {studentsFeedBack.map((b, i) => (
          <div className={styles.feedback} key={i}>
            <Image
              src={b.image}
              alt={`Photo of ${b.name}`}
              // width={100}
              // height={100}
              quality={100}
              priority
            />
            <h3>{b.name}</h3>
            <div className={styles.divider} />
            <p>{b.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section6;
