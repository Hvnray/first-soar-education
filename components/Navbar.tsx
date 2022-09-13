import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import styles from "../styles/Navbar.module.scss";
import cn from "classnames";
import { mobileMenuSocials } from "../utils";
import { useNavbarObserver } from "../customHooks";
import { useRouter } from "next/router";
import DefaultLogo from '../public/logo.png'
import WhiteLogo from '../public/logo_white.png'

type Logos = typeof DefaultLogo | typeof WhiteLogo;

const Navbar = () => {
  const router = useRouter();
  const windowSize = useNavbarObserver();
  const aboutPage = useRef<HTMLElement | null>(null);

  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [logo, SetLogo] = useState<Logos>(DefaultLogo);
  const [navHasScroll, SetNavHasScroll] = useState(false);
  const [isMobileView, setisMobileView] = useState(false);
  const [currentPageAbout, setCurrentPageAbout] = useState(false);
  const [curentPageMedicine, setCurentPageMedicine] = useState(false);
  const [curentPageHome, setCurentPageHome] = useState(false);
  const [curentPageContactUs, setCurentPageContactUs] = useState(false);

  useEffect(() => {
    if (router.pathname == "/" && !currentPageAbout) {
      setCurentPageHome(true);
      setCurentPageMedicine(false);
      setCurentPageContactUs(false);
      setCurrentPageAbout(false);
      return;
    }
    if (router.pathname == "/" && currentPageAbout) {
      setCurentPageHome(false);
      setCurentPageMedicine(false);
      setCurentPageContactUs(false);
      setCurrentPageAbout(true);
      return;
    }
    if (router.pathname == "/medicine") {
      setCurentPageMedicine(true);
      setCurentPageHome(false);
      setCurentPageContactUs(false);
      setCurrentPageAbout(false);
      return;
    }
    if (router.pathname == "/contact-us") {
      setCurentPageMedicine(false);
      setCurentPageHome(false);
      setCurentPageContactUs(true);
      setCurrentPageAbout(false);
      return;
    }
  }, [router, router.pathname, currentPageAbout]);

  useEffect(() => {
    setisMobileView(windowSize <= 800);
  }, [windowSize]);

  const handleMenuClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setMobileMenuIsOpen(!mobileMenuIsOpen);
  };

  const windowOnScroll = () => {
    SetNavHasScroll(window.scrollY > 30);
    if (aboutPage.current) {
      const topPosition = aboutPage.current.offsetTop - 80; //subtract 80 to handle margin and padding
      const bottomPosition =
        aboutPage.current.offsetTop + aboutPage.current.offsetHeight - 30; //subtract 5 to handle margin and padding
      setCurrentPageAbout(
        window.scrollY > topPosition && window.scrollY < bottomPosition
      );
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
    if (!isMobileView) {
      SetLogo(DefaultLogo);
    } else if (isMobileView) {
      if (
        navHasScroll ||
        router.pathname == "/contact-us" ||
        mobileMenuIsOpen
      ) {
        SetLogo(DefaultLogo);
      } else {
        SetLogo(WhiteLogo);
      }
    }
  }, [isMobileView, navHasScroll, router, mobileMenuIsOpen]);

  return (
    <div className={styles.container}>
      <header
        id="navHeader"
        className={cn(styles.header, {
          [styles.menuOpened]: mobileMenuIsOpen || navHasScroll,
        })}
      >
        <Link href="/" passHref>
          <a className={styles.logowrapper}>
            <Image
              className={styles.logo}
              src={logo}
              alt="Vercel Logo"
              height={60}
              width={150}
              quality={100}
              priority
            />
          </a>
        </Link>
        <button
          name="menubutton"
          className={cn({
            [styles.menuOpened]: mobileMenuIsOpen,
            [styles.navHasScroll]:
              navHasScroll || router.pathname == "/contact-us",
          })}
          onClick={handleMenuClick}
        ></button>

        <nav>
          <Link href="/" passHref>
            <a className={curentPageHome ? styles.iscurrent : undefined}>
              Home
            </a>
          </Link>
          <Link href="/medicine" passHref>
            <a className={curentPageMedicine ? styles.iscurrent : undefined}>
              Medicine
            </a>
          </Link>
          <Link href="/#about-us" passHref>
            <a className={currentPageAbout ? styles.iscurrent : undefined}>
              About Us
            </a>
          </Link>
          <Link href="/contact-us" passHref>
            <a className={curentPageContactUs ? styles.iscurrent : undefined}>
              Contact Us
            </a>
          </Link>
        </nav>
        {mobileMenuIsOpen && (
          <div
            className={styles.mobileMenu}
            onClick={() => setMobileMenuIsOpen(false)}
          >
            <Link href="/">Home</Link>
            <Link href="/choosing-philippines">Why Choose Philippines</Link>
            <Link href="/medicine">Study Medicine In Philippines</Link>
            <Link href="/contact-us">Enquiry</Link>
            <Link href="/#FAQS">FAQs</Link>
            <div className={styles.mobileMenuSocials}>
              <ul>
                {mobileMenuSocials.map((b, i) => (
                  <li key={i}>
                    <a href={b.link} target="_blank" rel="noreferrer">
                      <Image
                        className={styles.logo}
                        src={b.image}
                        alt={b.alt}
                        quality={100}
                        priority
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
