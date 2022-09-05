import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, forwardRef } from "react";
import styles from "../styles/Navbar.module.scss";
import cn from "classnames";
import { mobileMenuSocials } from "../utils";
import { useNavbarObserver } from "../customHooks";

type Logos = "/logo.svg" | "/logo_white.svg";

const Navbar = () => {
  const [open, SetOpen] = useState(false);
  const [logo, SetLogo] = useState<Logos>("/logo.svg");
  const [navHasScroll, SetNavHasScroll] = useState(false);
  const windowSize = useNavbarObserver();

  const handleMenuClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    SetOpen(!open);
  };

  const windowOnScroll = () => {
    SetNavHasScroll(window.scrollY > 30 ? true : false);
  };

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", windowOnScroll);
    }
    return () => {
      if (window) {
        window.removeEventListener("scroll", windowOnScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (windowSize >= 800) {
      SetLogo("/logo.svg");
    } else {
      if (windowSize <= 800) {
        SetLogo("/logo_white.svg");
      }

      if (windowSize < 800 && navHasScroll) {
        SetLogo("/logo.svg");
      }
      if (open) {
        SetLogo("/logo.svg");
      }
    }
  }, [open, navHasScroll, windowSize]);
  return (
    <div className={styles.container}>
      <header
        id="navHeader"
        className={cn(styles.header, {
          [styles.menuOpened]: open || navHasScroll,
        })}
      >
        <Link href={"/"}>
          <>
            <Image
              className={styles.logo}
              src={logo}
              alt="Vercel Logo"
              width={185}
              height={60}
            />
          </>
        </Link>
        <button
          name="menubutton"
          className={cn({
            [styles.menuOpened]: open,
            [styles.navHasScroll]: navHasScroll,
          })}
          onClick={handleMenuClick}
        ></button>

        <nav>
          <a href="#">Home</a>
          <a href="#">Medicine</a>
          <a href="#">About Us</a>
          <Link href="#">Contact Us</Link>
        </nav>
        {open && (
          <div className={styles.mobileMenu}>
            <Link href="/">Home</Link>
            <Link href="/choosing-philippines">Why Choose Philippines</Link>
            <a href="#">Study Medicine In Philippines</a>
            <Link href="#">Enquiry</Link>
            <Link href="#">FAQs</Link>
            <div className={styles.mobileMenuSocials}>
              <ul>
                {mobileMenuSocials.map((b, i) => (
                  <li key={i}>
                    <a href={b.link}>
                      <Image
                        className={styles.logo}
                        src={b.image}
                        alt={b.alt}
                        width={38}
                        height={38}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
