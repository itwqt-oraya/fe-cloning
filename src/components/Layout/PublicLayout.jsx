import React from "react";
import { Outlet } from "react-router";

import {
  NavBar,
  NavHamburger,
  NavLinks,
  NavLogo,
} from "@components/Navigation";
import { Button } from "@components/Buttons";
import { Footer } from "@components/Footer";

export default function PublicLayout() {
  return (
    <>
      <div className="d-flex flex-column overflow-hidden">
        <NavBar>
          <NavHamburger className="d-lg-none d-block" />
          <NavLogo />
          <NavLinks />
          <Button variant="solid" color={"red"}>
            Try Flipboard
          </Button>
        </NavBar>
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
