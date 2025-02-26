import styles from "./navigation.module.scss";
import React from "react";
import classNames from "classnames";
import { Navbar } from "reactstrap";

export default function NavBar({ children }) {
  return (
    <Navbar
      fixed="top"
      className={classNames(styles["nav-bar"], "border-bottom")}
    >
      <div className="d-flex align-items-center justify-content-lg-center p-2 justify-content-between w-100 mx-auto gap-5">
        {children}
      </div>
    </Navbar>
  );
}
