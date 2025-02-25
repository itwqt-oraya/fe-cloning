import React from "react";
import styles from "./buttons.module.scss";

export default function ButtonCircle({ children }) {
  return <button className={styles["button--circle"]}>{children}</button>;
}
