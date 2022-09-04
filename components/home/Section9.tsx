import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../../styles/home/section9.module.scss";
import { FAQ } from "../../utils";

interface DetailsParams {
  title: string;
  body: string;
}
type IconState =
  | ["/plusIcon.svg", "Open Icon"]
  | ["/minusIcon.svg", "Close Icon"];

const Details = ({ title, body }: DetailsParams) => {
  const [iconUrl, setIconUrl] = useState<IconState>(["/plusIcon.svg", "Open Icon"]);
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
    <div className={styles.details}>
      <div className={styles.summary} onClick={onChange}>
        <p>{title}</p>
        <Image src={iconUrl[0]} alt={iconUrl[1]} width={60} height={60} />
      </div>
      {isOpen && <p className={styles.body}>{body}</p>}
    </div>
  );
};

const Section9 = () => {
  return (
    <section className={styles.section}>
      <h2>FAQ</h2>
      <h4>Frequently Asked Questions</h4>
      {FAQ.map((b, i) => (
        <Details key={i} title={b.title} body={b.body} />
      ))}
    </section>
  );
};

export default Section9;
