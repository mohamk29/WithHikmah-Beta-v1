import React from "react";
import styles from "./Button.module.css";

function Button({
  label,
  widthClass = styles.defaultWidth,
  heightClass = styles.defaultHeight,
  color = "dark",
  className = "",
}) {
  return (
    <button
      className={`${styles.button} ${styles[color]} ${widthClass} ${heightClass} ${className}`}
    >
      {label}
    </button>
  );
}

export default Button;
