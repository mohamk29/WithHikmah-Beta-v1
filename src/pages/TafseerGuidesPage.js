import React from "react";
import { useEffect } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import SubscriptionForm from "../components/SubscriptionForm";
import Footer from "../components/Footer";
import styles from "./TafseerGuidesPage.module.css";

function TafseerGuidesPage() {
  useEffect(() => {
    document.querySelector("." + styles.content).classList.add(styles.animate);
  }, []);

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <h1 className={styles.mainHeading}>
            Tafseer
            <br />
            Resources
          </h1>
          <p className={styles.firstParagraph}>
            These documents were created to help those who take Tafseer notes
            digitally!
            <br />
            Each Juz is created as its own document (PDF) and contains the
            Arabic verses, word-to-word translations, and a running translation
            beneath each verse. Ample space is provided for each verse to allow
            you to note down root words, word descriptions, and any necessary
            grammar rules, along with the exegesis <i>(tafseer)</i> of each
            verse.
          </p>
          <p className={styles.secondParagraph}>
            Note that although these resources are offered for free, they are
            copyrighted and cannot be copied or edited in any way or form. If
            there is a mistake or error somewhere, please bring it to my
            attention by contacting me and I will fix it immediately!
          </p>

          <a
            href="mailto:contactwithHikmah@gmail.com"
            className={styles.emailLink}
          >
            <Button
              label="Send an Email"
              className={styles.emailButton}
              color="dark"
            />
          </a>
        </div>

        <div className={styles.middleColumn}>
          <Button label="Juz 1" className={styles.juzButton} color="grey" />
          <Button label="Juz 2" className={styles.juzButton} color="grey" />
          <Button label="Juz 3" className={styles.juzButton} color="grey" />
          <Button label="Juz 4" className={styles.juzButton} color="grey" />
          <Button label="Juz 5" className={styles.juzButton} color="grey" />
          <Button label="Juz 6" className={styles.juzButton} color="grey" />
          <Button label="Juz 7" className={styles.juzButton} color="grey" />
          <Button label="Juz 8" className={styles.juzButton} color="grey" />
          <Button label="Juz 9" className={styles.juzButton} color="grey" />
          <Button label="Juz 10" className={styles.juzButton} color="grey" />
          <Button label="Juz 11" className={styles.juzButton} color="grey" />
          <Button label="Juz 12" className={styles.juzButton} color="grey" />
          <Button label="Juz 13" className={styles.juzButton} color="grey" />
          <Button label="Juz 14" className={styles.juzButton} color="grey" />
          <Button label="Juz 15" className={styles.juzButton} color="grey" />
        </div>

        <div className={styles.rightColumn}>
          <Button label="Juz 16" className={styles.juzButton} color="grey" />
          <Button label="Juz 17" className={styles.juzButton} color="grey" />
          <Button label="Juz 18" className={styles.juzButton} color="grey" />
          <Button label="Juz 19" className={styles.juzButton} color="grey" />
          <Button label="Juz 20" className={styles.juzButton} color="grey" />
          <Button label="Juz 21" className={styles.juzButton} color="grey" />
          <Button label="Juz 22" className={styles.juzButton} color="grey" />
          <Button label="Juz 23" className={styles.juzButton} color="grey" />
          <Button label="Juz 24" className={styles.juzButton} color="grey" />
          <Button label="Juz 25" className={styles.juzButton} color="grey" />
          {/* <Button label="Juz 26" className={styles.juzButton} color="light" /> */}
          <p className={styles.upcomingText}>Juz 26 Tafseer Guide</p>
          <p className={styles.progressText}>Work in Progress!</p>
          <Button label="Juz 27" className={styles.juzButton} color="light" />
          <Button label="Juz 28" className={styles.juzButton} color="light" />
          <Button label="Juz 29" className={styles.juzButton} color="light" />
          <Button label="Juz 30" className={styles.juzButton} color="light" />
        </div>
      </div>

      <SubscriptionForm />
      <Footer />
    </div>
  );
}

export default TafseerGuidesPage;
