import styles from "./hero.module.scss";
import classNames from "classnames";
import React from "react";

export default function HeroRelativeHeader({ children }) {
  return (
    <h1
      className={classNames([
        styles["hero-text--subheader"],
        styles["hero-text--relative"],
        "fw-bold",
      ])}
    >
      {children}
    </h1>
  );
}
