import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../../styles/home/section4.module.scss";
import { info } from "../../utils";

const Section4 = () => {
  const [size, setSize]=useState(90)
  function navBarResizeObs(entries: ResizeObserverEntry[]) {
    for (const entry of entries) {
      if (entry.borderBoxSize) {
        const borderBoxSize = Array.isArray(entry.borderBoxSize)
          ? entry.borderBoxSize[0]?.inlineSize
          : entry.borderBoxSize;
          setSize(borderBoxSize > 500?90:70);
      }
    }
  }
  useEffect(() => {
    const resizeObserver = new ResizeObserver(navBarResizeObs);
    const navbar = document.getElementById("navHeader");
    if (navbar) {
      resizeObserver.observe(navbar);
    }
    return () => {
      if (navbar) {
        resizeObserver.disconnect();
      }
    };
  }, []);
  return (
    <section className={styles.section}>
      <h2>Why We Are The Best</h2>
      <div className={styles.infoArea}>
        {info.map((b, i) => (
          <div className={styles.info} key={i}>
            <div className={styles.img}>
              <Image src={b.image} alt={b.imageAlt} width={size} height={size} />
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
