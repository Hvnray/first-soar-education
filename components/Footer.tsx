import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.scss";
import { SocialMedia, footerNavLinks } from "../utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <h2>First Soar Education </h2>
      <nav>
        <ul>
          {footerNavLinks.map((b, i) => (
            <li key={i}>
              <Link href={b.route}>{b.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <ul className={styles.socialMedia}>
        {SocialMedia.map((b, i) => (
          <li key={i}>
            <a href={b.url} target="_blank" rel="noreferrer">
              <Image src={b.logo} alt={b.name} quality={100} />
            </a>
          </li>
        ))}
      </ul>
      <ul className={styles.legal}>
        <li>
          <a href="#">Copyright &#169; {currentYear}</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
