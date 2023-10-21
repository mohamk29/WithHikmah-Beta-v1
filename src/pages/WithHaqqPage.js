import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./WithHaqqPage.module.css";

const WithHaqqPage = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className={styles.withhaqqpage}>
      <Header />
      <section className={styles.heroSection} data-animate-on-scroll>
        <div className={styles.withhaqqlogoimgdiv}>
          <img
            className={styles.withhaqqlogoimgIcon}
            alt="With Haqq Logo"
            src="/assets/images/withhaqqlogoimg.png"
          />
        </div>
        <div className={styles.heroContent} data-animate-on-scroll>
          <h1 className={styles.withhaqq}>WithHaqq</h1>
          <p className={styles.anInstagramPageContainer}>
            <span className={styles.anInstagramPageContainer1}>
              <span className={styles.anInstagramPageDedicatedTo}>
                <span className={styles.anInstagramPage}>
                  An instagram page dedicated to spreading the 
                </span>
                <i className={styles.anInstagramPage}>deen</i>
                <span>{` of `}</span>
              </span>
              <span className={styles.anInstagramPageDedicatedTo}>
                <span>{`Allah SWT through verses of the Qur’an, ahadeeth of the `}</span>
              </span>
              <span className={styles.anInstagramPageDedicatedTo}>
                <span>{`Prophet ﷺ, and wise sayings of the Sahabah and `}</span>
              </span>
              <span className={styles.anInstagramPageDedicatedTo}>
                <span>Scholars of Islam.</span>
              </span>
            </span>
          </p>
          <div className={styles.instagramhandlediv}>
            <p className={styles.instagram}>Instagram:</p>
            <a
              className={styles.withhaqq1}
              href="https://www.instagram.com/withhaqq/"
              target="_blank"
            >
              @withHaqq
            </a>
          </div>
        </div>
      </section>
      <section className={styles.withhaqqmaincontent} data-animate-on-scroll>
        <div className={styles.adhkarcontentdiv}>
          <h2 className={styles.morningEveningAnd}>
            Morning, Evening, and After-Salāh Adhkār
          </h2>
          <div className={styles.adhkarexplanationdiv}>
            <p className={styles.theseAdhkrAreContainer}>
              <span className={styles.anInstagramPageContainer1}>
                <span className={styles.anInstagramPageDedicatedTo}>
                  These adhkār are from the Sunnah of the Prophet, may Allah’s
                  peace and blessings me upon him, his
                </span>
                <span className={styles.anInstagramPageDedicatedTo}>
                  family, and his companions. Great care was taken to only
                  include adhkār that are proven through
                </span>
                <span className={styles.anInstagramPageDedicatedTo}>
                  authentic narrations. 
                </span>
              </span>
            </p>
            <p className={styles.theseAdhkrServeContainer}>
              <span className={styles.anInstagramPageContainer1}>
                <span className={styles.anInstagramPageDedicatedTo}>
                  These adhkār serve as a source of protection for the Muslim in
                  this life and are treasures for him in the
                </span>
                <span className={styles.anInstagramPageDedicatedTo}>
                  next, inshaAllah! Thus, one should read them with conviction,
                  understanding, and sincerity.
                </span>
              </span>
            </p>
          </div>
          <p className={styles.clickThePicturesContainer}>
            <span>{`Click the pictures below to download a `}</span>
            <b>free PDF</b>
            <span> of the adhkār!</span>
          </p>
        </div>
        <div className={styles.adhkaralbumdiv}>
          <a
            href="/assets/pdfs/MorningAdhkār.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.morningadhkarimgIcon}
              alt="Morning Adhkar"
              src="/assets/images/morningadhkarimg.png"
            />
          </a>
          <a
            href="/assets/pdfs/EveningAdhkār.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.eveningadhkarimgIcon}
              alt="Evening Adhkar"
              src="/assets/images/eveningadhkarimg.png"
            />
          </a>
          <a
            href="/assets/pdfs/AfterSalahAdhkār.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.eveningadhkarimgIcon}
              alt="After Salah Adhkar"
              src="/assets/images/aftersalahadhkarimg.png"
            />
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default WithHaqqPage;
