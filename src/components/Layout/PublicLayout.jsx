import React from "react";
import { Outlet } from "react-router";

import { NavBar, NavHamburger, NavLinks, NavLogo } from "../Navigation";
import { Button } from "../Buttons";

export default function PublicLayout() {
  return (
    <>
      <div className="d-flex flex-column overflow-hidden">
        <NavBar>
          <NavHamburger />
          <NavLogo />
          <NavLinks />
          <Button variant="solid" color={"red"}>
            Try Flipboard
          </Button>
        </NavBar>
        <Outlet />
      </div>
    </>
  );
}
