import Image from "next/image";
import { useEffect, useState } from "react";
import { useNavbarObserver } from "../../customHooks";
import styles from "../../styles/home/section4.module.scss";
import { info } from "../../utils";

const Section4 = () => {
  const windowWidth = useNavbarObserver();
  const [size, setSize] = useState(90);
  useEffect(() => {
    setSize(windowWidth > 500 ? 90 : 70);
  }, [windowWidth]);
  return (
    <section className={styles.section}>
      <h2>Why We Are The Best</h2>
      <div className={styles.infoArea}>
        {info.map((b, i) => (
          <div className={styles.info} key={i}>
            <div className={styles.img}>
              <Image
                src={b.image}
                alt={b.imageAlt}
                quality={100}
                width={size}
                height={size}
                priority
              />
            </div>
            <p className={styles.title}>{b.title}</p>
            <p className={styles.text}>{b.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section4;
