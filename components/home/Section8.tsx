import Image from "next/image";
import { useEffect, useState } from "react";
import { useNavbarObserver } from "../../customHooks";
import styles from "../../styles/home/section8.module.scss";
import { meetTheTeam } from "../../utils";

const Section8 = () => {
  const windowSize = useNavbarObserver();
  const [imgSize, setImgSize] = useState(180);
  useEffect(() => {
    setImgSize(windowSize <= 800 ? 90 : 180);
  }, [windowSize]);

  return (
    <section className={styles.section}>
      <h2>Meet The Team</h2>
      <h4>
        We are led by a team that brings lots of experience and skills required
        in assisting students in every step of their journey in becoming
        professionals and being the best version of themselves.
      </h4>
      <div className={styles.infoArea}>
        {meetTheTeam.map((b, i) => (
          <div className={styles.info} key={i}>
            <div className={styles.img}>
              <Image
                src={b.image}
                alt={b.name}
                quality={100}
                width={imgSize}
                height={imgSize}
                priority
              />
            </div>
            <p className={styles.title}>{b.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section8;
