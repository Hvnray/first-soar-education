import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import styles from "../styles/Navbar.module.scss";
import cn from "classnames";
import { mobileMenuSocials } from "../utils";
import { useNavbarObserver } from "../customHooks";
import { useRouter } from "next/router";

type Logos = "/logo.svg" | "/logo_white.svg";

const Navbar = () => {
  const [open, SetOpen] = useState(false);
  const [logo, SetLogo] = useState<Logos>("/logo.svg");
  const [navHasScroll, SetNavHasScroll] = useState(false);
  const [scrollOnAbout, setscrollOnAbout] = useState(false);
  const [curentPageMedicine, setCurentPageMedicine] = useState(false);
  const [curentPageHome, setCurentPageHome] = useState(false);
  const [curentPageContactUs, setCurentPageContactUs] = useState(false);
  let aboutPage = useRef<HTMLElement | null>(null);
  const router = useRouter();

  // useEffect(() => {
  //   const reloadRoute = () => {
  //     if (router.pathname == "/medicine") {
  //       setCurentPageMedicine(true);
  //       console.log("medicine yes");
  //     } else {
  //       console.log("medicine no");
  //       setCurentPageMedicine(false);
  //     }
  //     if (router.pathname === "/" && !scrollOnAbout) {
  //       console.log("home -no about yes");
  //       setCurentPageHome(true);
  //       setscrollOnAbout(false);
  //     } else if (router.pathname === "/" && scrollOnAbout) {
  //       console.log("home -no about no");
  //       setscrollOnAbout(true);
  //       setCurentPageHome(false);
  //     }
  //     if (router.pathname === "/contact-us") {
  //       console.log("contact-us yes");
  //       setCurentPageContactUs(true);
  //     } else {
  //       console.log("contact-us no");

  //       setCurentPageContactUs(false);
  //     }
  //     console.log("router", router);
  //   };
  //   reloadRoute();
  // }, [router, router.pathname, scrollOnAbout]);

  const windowSize = useNavbarObserver();

  const handleMenuClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    SetOpen(!open);
  };

  const windowOnScroll = () => {
    SetNavHasScroll(window.scrollY > 30 ? true : false);
    if (aboutPage.current) {
      const topPosition = aboutPage.current.offsetTop - 3; //subtract 5 to handle edge case
      const bottomPosition =
        aboutPage.current.offsetTop + aboutPage.current.offsetHeight - 5; //subtract 5 to handle edge case
      if (window.scrollY > topPosition && window.scrollY < bottomPosition) {
        setscrollOnAbout(true);
      } else {
        setscrollOnAbout(false);
      }
    }
  };

  useEffect(() => {
    aboutPage.current = document.getElementById("about-us");
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
        <Link href="/" passHref>
          <>
            <Image
              className={styles.logo}
              src={logo}
              alt="Vercel Logo"
              width={185}
              height={60}
              priority
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
          <Link
            href="/"
            className={cn({
              [styles.isCurrent]: curentPageHome,
            })}
          >
            Home
          </Link>
          <Link
            href="/medicine"
            className={curentPageMedicine ? styles.isCurrent : undefined}
          >
            Medicine
          </Link>
          <Link
            href="/#about-us"
            className={scrollOnAbout ? styles.isCurrent : undefined}
          >
            About Us
          </Link>
          <Link
            href="/contact-us"
            className={curentPageContactUs ? styles.isCurrent : undefined}
          >
            Contact Us
          </Link>
        </nav>
        {open && (
          <div className={styles.mobileMenu} onClick={() => SetOpen(false)}>
            <Link href="/">Home</Link>
            <Link href="/choosing-philippines">Why Choose Philippines</Link>
            <Link href="/medicine">Study Medicine In Philippines</Link>
            <Link href="/contact-us">Enquiry</Link>
            <Link href="/#FAQS">FAQs</Link>
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
