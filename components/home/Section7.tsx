import Image from "next/image";
import styles from "../../styles/home/section7.module.scss";
import ourMission from "../../public/ourMission.svg";

const Section7 = () => {
  return (
    <section className={styles.section} id="about-us">
      <h2>About Us</h2>
      <p>
        First Soar Education guides you through every step of process to study
        in the Philippines, from the point of application to enrollment at your
        chosen school. We have easy and direct access to admission teams of
        universities making your application process easier.
      </p>
      <p>
        We work with various international universities in the Philippines,
        offering Undergraduate, Postgraduate and Masters programs. Our Culture
        of love and support allows students to explore new interest and try new
        experiences, knowing that we are in their corner at all times.
      </p>
      <div>
        <Image
          src={ourMission}
          alt="Our Mission Logo"
          // width={60}
          //  height={60}
          quality={100}
          priority
        />
        <h3>Our Mission</h3>
      </div>
      <p>
        We are committed to providing students with equitable access to quality
        education in accredited educational institutions and programs in the
        Philippines.
      </p>
    </section>
  );
};

export default Section7;
