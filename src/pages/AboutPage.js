import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./AboutPage.module.css";

const AboutPage = () => {
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
    <div className={styles.aboutpage}>
      <Header />
      <section className={styles.aboutSectionContent} data-animate-on-scroll>
        <div className={styles.aboutSectionDiv}>
          <div className={styles.aboutSectionContent1}>
            <h2 className={styles.aboutWithhikmah}>About withHikmah</h2>
            <div className={styles.alImranQuote}>
              <p className={styles.youAreTheContainer}>
                <span className={styles.youAreTheContainer1}>
                  <span className={styles.youAreThe}>
                    You are the best community ever raised for humanity —
                  </span>
                  <span className={styles.youAreThe}>
                    you encourage good, forbid evil, and believe in Allah. 
                  </span>
                </span>
              </p>
              <p className={styles.aliImran3110}>Ali 'Imran 3:110</p>
            </div>
            <div className={styles.creationresondiv}>
              <p className={styles.withhikmahWasCreatedContainer}>
                <span className={styles.youAreTheContainer1}>
                  <span className={styles.youAreThe}>
                    <span className={styles.commandsAllMuslims}>
                      <i className={styles.withhikmah}>withHikmah</i>
                      <span>{` was created as a space for me to do what this `}</span>
                      <i className={styles.withhikmah}>ayah</i>
                    </span>
                  </span>
                  <span className={styles.youAreThe}>
                    <span>
                      <span className={styles.commandsAllMuslims}>
                        commands all Muslims to do - to enjoin good and forbid
                        evil.
                      </span>
                    </span>
                  </span>
                  <span className={styles.iHopeToUseThisWebsiteAs}>
                    <span>
                      <span
                        className={styles.iHopeTo}
                      >{`I hope to use this website as a hub for Islamic resources to help `}</span>
                    </span>
                  </span>
                  <span className={styles.youAreThe}>
                    <span>
                      <span className={styles.iHopeTo}>all of</span>
                      <span className={styles.span}> </span>
                      <span
                        className={styles.usGetCloser}
                      >{`us get closer to `}</span>
                    </span>
                    <span className={styles.usGetCloser}>
                      <i className={styles.withhikmah}>Allah SWT</i>
                      <span className={styles.withhikmah}>{` and His `}</span>
                      <i className={styles.withhikmah}>deen</i>
                      <span className={styles.withhikmah}>.</span>
                    </span>
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.aboutsectionpicturediv}>
          <img
            className={styles.mosqueimgaboutsectionIcon}
            alt=""
            src="/assets/images/mosqueimgaboutsection.png"
          />
        </div>
      </section>
      <Footer footerPadding="var(--padding-xl) 0rem var(--padding-3xs)" />
    </div>
  );
};

export default AboutPage;
