import React from "react";
import { Outlet } from "react-router";

import { NavBar, NavHamburger, NavLinks, NavLogo } from "../Navigation";
import { ButtonSolid } from "../Buttons";

export default function PublicLayout() {
  return (
    <>
      <div className="d-flex flex-column">
        <NavBar>
          <NavHamburger />
          <NavLogo />
          <NavLinks />
          <ButtonSolid color={"red"} text={"Try Flipboard"} />
        </NavBar>
        <Outlet />
      </div>
    </>
  );
}
