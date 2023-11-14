import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import DrawerMenu from "./DrawerMenu";
import PortalDrawer from "./PortalDrawer";
import styles from "./Header.module.css";

const Header = () => {
  const [isDrawerMenuOpen, setDrawerMenuOpen] = useState(false);

  const openDrawerMenu = useCallback(() => {
    setDrawerMenuOpen(true);
  }, []);

  const closeDrawerMenu = useCallback(() => {
    setDrawerMenuOpen(false);
  }, []);

  return (
    <>
      <section className={styles.navigationContainer}>
        <button className={styles.hamburgebutton} onClick={openDrawerMenu}>
          <div className={styles.hamburgebuttonChild} />
          <div className={styles.hamburgebuttonChild} />
          <div className={styles.hamburgebuttonChild} />
        </button>
        <div className={styles.navigationBar}>
          <div className={styles.pageLinks}>
            <h2 className={styles.withhikmahLogo}>
              <p className={styles.withhikmah}>withHikmah</p>
            </h2>
            <div className={styles.container}>
              <div className={styles.links}>
                <Link className={styles.home} to="/">
                  <p className={styles.withhikmah}>Home</p>
                </Link>
                <Link className={styles.about} to="/about">
                  <p className={styles.withhikmah}>About</p>
                </Link>
                <Link className={styles.withhaqq} to="/withhaqq">
                  WithHaqq
                </Link>
                <Link className={styles.tafseerGuides} to="/tafseerguides">
                  Tafseer Guides
                </Link>
                <Link className={styles.hadiths} to="/hadiths">
                  Hadiths
                </Link>
              </div>
              <input
                className={styles.navsearch}
                placeholder="Search..."
                type="text"
              />
            </div>
          </div>
        </div>
      </section>
      {isDrawerMenuOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top"
          onOutsideClick={closeDrawerMenu}
        >
          <DrawerMenu onClose={closeDrawerMenu} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Header;
