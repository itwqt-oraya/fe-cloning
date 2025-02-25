import React from "react";
import styles from "./footer.module.scss";

export default function FooterImage() {
  return (
    <img
      className={styles["footer--image"]}
      src="https://about.flipboard.com/wp-content/themes/flipboard/dist/img/badge-white.svg"
    />
  );
}
