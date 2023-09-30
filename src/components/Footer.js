import { useMemo } from "react";
import styles from "./Footer.module.css";

const Footer = ({ footerPadding }) => {
  const currentYear = new Date().getFullYear();

  const footerStyle = useMemo(() => {
    return {
      padding: footerPadding,
    };
  }, [footerPadding]);

  return (
    <section className={styles.footer} style={footerStyle}>
      <a
        className={styles.contactwithhikmahgmailcom}
        href="mailto:contactwithHikmah@gmail.com"
      >
        contactwithHikmah@gmail.com
      </a>
      <p className={styles.byWithhikmah}>©{currentYear} by withHikmah.</p>
    </section>
  );
};

export default Footer;
