import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.scss";
import { SocialMedia, footerNavLinks } from "../utils";

const Footer = () => {
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
            <a href={b.url}>
              <Image src={b.logo} alt={b.name} width={65} height={65}  priority/>
            </a>
          </li>
        ))}
      </ul>
      <ul className={styles.legal}>
        <li>
          <a href="">Copyright 2022</a>
        </li>
        <li>
          <a href="">Terms of Use</a>
        </li>
        <li>
          <a href="">Privacy</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
