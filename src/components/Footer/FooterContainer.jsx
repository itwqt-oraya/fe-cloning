import React from "react";
import styles from "./footer.module.scss";
import classNames from "classnames";
export default function FooterContainer({ children }) {
  return (
    <footer
      className={classNames(
        "justify-content-start",
        styles["footer-container"]
      )}
    >
      <div className="p-5 gap-4 d-flex flex-column flex-lg-row flex-lg-row-reverse justify-content-start justify-content-lg-between align-items-start">
        {children}
      </div>
    </footer>
  );
}
