import Link from "next/link";
import styles from "../../styles/choosing-philippines/section1.module.scss";

const Section1 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1>Why you should choose Philippines</h1>
      </div>
      <div className={styles.body}>
        <h2>
          Philippines is a tropical paradise and popular study destination for
          international students from around the globe. It attracts students
          from various continents who are looking for an affordable education.
          Not forgetting that English is the official language, which makes the
          government invest in study programs which is very attractive for
          international students. Are you thinking of applying for a degree in
          the Philippines?
        </h2>
      </div>
      <Link href={"/contact-us"}>Contact Us</Link>
    </section>
  );
};

export default Section1;
