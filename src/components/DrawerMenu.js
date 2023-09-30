import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./DrawerMenu.module.css";

const DrawerMenu = ({ onClose }) => {
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
    <div className={styles.drawerMenu} data-animate-on-scroll>
      <div className={styles.pageLinks}>
        <Link className={styles.home} to="/">
          Home
        </Link>
        <Link className={styles.home} to="/aboutpage">
          About
        </Link>
        <Link className={styles.home} to="/withhaqqpage">
          WithHaqq
        </Link>
      </div>
    </div>
  );
};

export default DrawerMenu;
