import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/home/section1.module.scss";

const Section1 = () => {
  return (
        <section className={styles.section}>
        <div className={styles.textArea}>
          <h1>Do you want to study in the Philippines?</h1>
          <h2>
            We are always happy to consult and guide you on every process to
            study in the Philippines.
          </h2>
          <Link href="/choosing-philippines">Read more...</Link>
          <button>Register Now {"  "}&#8594;</button>
        </div>
        <div className={styles.photoArea}>
          <div className={styles.portraits}>
            <div className={styles.img}>
              <Image
                src="/image1.svg"
                alt="Vercel Logo"
                width={188}
                height={236}
              priority
              />
            </div>
            <div className={styles.img}>
              <Image
                src="/image2.svg"
                alt="Vercel Logo"
                width={188}
                height={290}
                // className={styles.img}
              priority
              />
            </div>
          </div>
          <div className={styles.landscapes}>
            <div className={styles.img}>
              <Image
                src="/image3.svg"
                alt="Vercel Logo"
                width={295}
                height={224}
                className={styles.img}
              priority
              />
            </div>

            <div className={styles.img}>
              <Image
                src="/image4.svg"
                alt="Vercel Logo"
                width={295}
                height={196}
                className={styles.img}
              priority
              />
            </div>

            <div className={styles.img}>
              <Image
                src="/image5.svg"
                alt="Vercel Logo"
                width={295}
                height={181}
                className={styles.img}
              priority
              />
            </div>
          </div>
        </div>

        </section>

  );
};

export default Section1;
