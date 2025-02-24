import styles from "./hero.module.css";
import classNames from "classnames";
import React from "react";

export default function HeroHeaderText({ children }) {
  return (
    <h1
      className={classNames([
        styles["hero-text--header"],
        "text-uppercase fw-bold",
      ])}
    >
      {children}
    </h1>
  );
}
