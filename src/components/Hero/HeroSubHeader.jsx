import styles from "./hero.module.css";
import classNames from "classnames";
import React from "react";

export default function HeroSubHeaderText({ children }) {
  return (
    <h1 className={classNames([styles["hero-text--subheader"], "fw-bold"])}>
      {children}
    </h1>
  );
}
