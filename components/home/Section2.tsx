import Image from "next/image";
import styles from "../../styles/home/section2.module.scss";
import Image6 from '../../public/image6.png'
import { useNavbarObserver } from "../../customHooks";
import { useEffect, useState } from "react";

const Section2 = () => {
  const width = useNavbarObserver();
  const [textArea, settextArea] = useState("fade-up");
  const [imgArea, setimgArea] = useState("fade-up");
  const [offset, setoffset] = useState("300");

  useEffect(() => {
    setimgArea(width >= 800 ? "fade-right" : "fade-up");
    settextArea(width >= 800 ? "fade-left" : "fade-up");
    setoffset(width >= 800 ? "300" : "100");
  }, [width]);
  return (
    <section className={styles.section}>
      <div className={styles.imageSection} data-aos={imgArea} data-aos-offset={offset}>
        <Image
          src={Image6}
          alt="Manila Graphic"
          layout="responsive"
          priority
          quality={100}
          />
      </div>
      <div className={styles.textSection} >
        <h1 data-aos={textArea} data-aos-offset={width >= 800?300:0}>we bring you the right connections From the Philippines</h1>
        <p data-aos={textArea} data-aos-delay="100">
          Accredited Higher Institutions, low tuition fees, easy admission
          requirements and overall student life quality at your fingertips which
          makes it an excellent place to pursue your studies.
        </p>
      </div>
    </section>
  );
};

export default Section2;
