import Image from "next/image";
import styles from "../../styles/choosing-philippines/section3.module.scss";
import Img1 from "../../public/choosing-philippines/section3-img1.svg";
import Img2 from "../../public/choosing-philippines/section3-img2.svg";
import Img3 from "../../public/choosing-philippines/section3-img3.svg";
const Section3 = () => {
  const block = [
    {
      image: Img1,
      alt: "El nido 7 Commandos Beach Bacuit Bay",
    },
    {
      image: Img2,
      alt: "chapel",
    },
    {
      image: Img3,
      alt: "mountains",
    },
  ];
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1>Discover Philippines</h1>
      </div>
      <div className={styles.body}>
        <section className={styles.images}>
          {block.map((b, i) => (
            <div className={styles.img} key={i}>
              <Image
                src={b.image}
                alt={b.alt}
                priority
                quality={100}
              />
            </div>
          ))}
        </section>
        <section className={styles.texts}>
          <p>
            This beautiful country is made up of over 7,107 Islands, which makes
            up big and small cities. It is surrounded by the Pacific Ocean to
            the West, Bash Channel to the North, The Lulu and Celebs Seas to the
            South. Offering a completely new experience to students.
          </p>
          <p>
            The USA, China, Thailand, India and Nigeria are some countries from
            which students come to study in the Philippines. The country has the
            highest literacy rate of over 94%.
          </p>
          <p>
            Apart from quality education at its best, It has wonderful Tourist
            Attractions. Top of the list include
          </p>
          <ul>
            <li>Chocolate Hills</li>
            <li>Malapascula Island</li>
            <li>Banaue Rice Terraces</li>
            <li>Borocay</li>
            <li>Palawan Island</li>
            <li>Puerto Princesa Underground River</li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Section3;
