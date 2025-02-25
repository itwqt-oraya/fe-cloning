import React from "react";
import styles from "./buttons.module.scss";
import classNames from "classnames";

export default function ButtonImage({ children }) {
  return (
    <button className={classNames(styles["button--image"], "rounded")}>
      {children}
    </button>
  );
}
