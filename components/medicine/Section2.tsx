import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/medicine/section2.module.scss";
import Img from "../../public/medicine-docs.svg";

const Section2 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1>Study Medicine in the Philippines</h1>
      </div>
      <div className={styles.body}>
        <p>
          The best affordable country that comes into mind when thinking of
          studying medicine abroad is the Philippines.The Philippines has been a
          major destination for students looking to study Medicine abroad. The
          Medical colleges and Medical courses offered are recognized worldwide,
          and they give high quality education to students from practical
          knowledge with exposure to clinical cases and 1 year internship
          program in private and government hospitals, building up experience,
          attaining professional skills to enable them soar globally in the
          medical field. This makes Nigerian students show passionate interest
          to study Medicine in the Philippines.
        </p>
        <div className={styles.textAndImgSection}>
          <p>
            Philippines Medical Universities offers excellent facilities for
            students from abroad which makes international students study
            experience comfortable and safe. It is the most affordable country
            to study Medicine compared to other foreign countries that offer
            quality education. This makes most parents and students choose the
            Philippines for their children to study Medicine.
            <Link href={''}>start your Application process &#8594;</Link>
          </p>
          <Image
            src={Img}
            alt={"Medical Doctors' group photo"}
            // width={610}
            // height={402}
            quality={100}
            priority
          />
        </div>
        <Link href={'/contact-us'}>start your Application process &#8594;</Link>
      </div>
    </section>
  );
};

export default Section2;
