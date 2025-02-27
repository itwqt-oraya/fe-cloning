import styles from "./navigation.module.scss";

import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import NavSideBar from "./NavSideBar";
import { ButtonHamburger } from "@components/Buttons";

export default function NavHamburger({ className }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={`d-flex align-items-center gap-2 ${className}`}>
        <ButtonHamburger onClick={() => setOpen(!open)}>
          <FaBars />
        </ButtonHamburger>
        <div className="d-md-none d-block">
          <img
            className={styles["nav--logo-small"]}
            src="https://about.flipboard.com/wp-content/themes/flipboard/dist/img/logomark.png"
          />
        </div>
        {open && <NavSideBar open={open} setOpen={setOpen} />}
      </div>
    </>
  );
}
