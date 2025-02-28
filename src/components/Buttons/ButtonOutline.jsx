import React from "react";
import styles from "./buttons.module.scss";
import classNames from "classnames";

export default function ButtonOutline({ children }) {
  return (
    <button className={classNames(styles["button--outline"], "rounded")}>
      {children}
    </button>
  );
}
