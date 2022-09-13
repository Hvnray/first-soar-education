import Image from "next/image";
import { useEffect, useState } from "react";
import { useNavbarObserver } from "../../customHooks";
import styles from "../../styles/home/section9.module.scss";
import { FAQ } from "../../utils";

interface DetailsParams {
  title: string;
  body: string;
  aos: string;
  delay: string | number;
}
type IconState =
  | ["/plusIcon.svg", "Open Icon"]
  | ["/minusIcon.svg", "Close Icon"];

const Details = ({ title, body, delay, aos }: DetailsParams) => {
  const [iconUrl, setIconUrl] = useState<IconState>([
    "/plusIcon.svg",
    "Open Icon",
  ]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onChange = () => {
    setIsOpen((opened) => !opened);
  };

  useEffect(() => {
    if (isOpen === true) {
      setIconUrl(["/minusIcon.svg", "Close Icon"]);
    } else {
      setIconUrl(["/plusIcon.svg", "Open Icon"]);
    }
  }, [isOpen]);

  return (
    <div className={styles.details} data-aos={aos} data-aos-delay={delay}>
      <div className={styles.summary} onClick={onChange}>
        <p>{title}</p>
        <Image
          src={iconUrl[0]}
          alt={iconUrl[1]}
          width={50}
          height={50}
          priority
        />
      </div>
      {isOpen && <p className={styles.body}>{body}</p>}
    </div>
  );
};

const Section9 = () => {
  const width = useNavbarObserver();
  const [photoArea, setphotoArea] = useState("fade-up");

  useEffect(() => {
    setphotoArea(width >= 800 ? "fade-left" : "fade-up");
  }, [width]);
  return (
    <section className={styles.section} id="FAQS">
      <h2 data-aos={width >= 800 ? "fade-up" : ""} data-aos-delay="100">
        FAQ
      </h2>
      <h4 data-aos={width >= 800 ? "fade-up" : ""} data-aos-delay="100">
        Frequently Asked Questions
      </h4>
      {FAQ.map((b, i) => (
        <Details
          key={i}
          title={b.title}
          body={b.body}
          aos={photoArea}
          delay={i * 150}
        />
      ))}
    </section>
  );
};

export default Section9;
