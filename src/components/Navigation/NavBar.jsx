import React from "react";
import styles from "./navigation.module.scss";
import classNames from "classnames";
import { Navbar } from "reactstrap";

export default function NavBar({ children }) {
  return (
    <Navbar
      fixed="top"
      full="true"
      container={false}
      className={classNames(styles["nav-bar"], "p-0")}
    >
      <div className="w-100 mx-auto">{children}</div>
    </Navbar>
  );
}
