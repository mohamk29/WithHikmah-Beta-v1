import { useEffect } from "react";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import SubscriptionForm from "../components/SubscriptionForm";
import Footer from "../components/Footer";
import styles from "./HomePage.module.css";

const HomePage = () => {
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
    <div className={styles.homepage}>
      <Header />
      <section className={styles.heroSection}>
        <img
          className={styles.heroBackgroundImage}
          alt=""
          src="/assets/images/hero-background-image.png"
          data-animate-on-scroll
        />
        <div className={styles.heroContent} data-animate-on-scroll>
          <h2 className={styles.ifAllahIntendsContainer}>
            <p className={styles.ifAllahIntends}>
              If Allah intends good for someone,
            </p>
            <p className={styles.heGivesHim}>
              He gives him understanding of the religion
            </p>
          </h2>
          <p className={styles.sahhAlBukhari71}>Sahīh al-Bukhari 71</p>
        </div>
      </section>
      <section className={styles.contactFormSection}>
        <ContactForm />
      </section>
      <div className={styles.copyrightSection}>
        <h4 className={styles.copyrightStatement}>Copyright Statement</h4>
        <p className={styles.allRightsReservedContainer}>
          <span
            className={styles.allRightsReserved}
          >{`All rights reserved. The withHikmah site may not be copied or duplicated in whole `}</span>
          <span className={styles.allRightsReserved}>
            or part by any means without express prior aggreement by withHikmah.
          </span>
        </p>
        <p className={styles.copyright2022Container}>
          <span>Copyright © 2022 by withHikmah</span>
        </p>
      </div>
      <SubscriptionForm />
      <Footer footerPadding="var(--padding-xl) 0rem var(--padding-3xs)" />
    </div>
  );
};

export default HomePage;
