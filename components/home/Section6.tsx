import Image from "next/image";
import { useEffect, useState } from "react";
import { useNavbarObserver } from "../../customHooks";
import styles from "../../styles/home/section6.module.scss";
import { studentsFeedBack } from "../../utils";

const Section6 = () => {
  const width = useNavbarObserver();
  const [photoArea, setphotoArea] = useState("");

  useEffect(() => {
    setphotoArea(width >= 800 ? "fade-left" : "");
  }, [width]);
  return (
    <section className={styles.section}>
      <h2 data-aos="fade-up" data-aos-delay="300">
        Feedback From Students
      </h2>
      <div className={styles.feedbacks}>
        {studentsFeedBack.map((b, i) => (
          <div
            className={styles.feedback}
            key={i}
            data-aos={photoArea}
            data-aos-offset="300"
            data-aos-delay={i * 150}
          >
            <Image
              src={b.image}
              alt={`Photo of ${b.name}`}
              quality={100}
              width={100}
              height={100}
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
