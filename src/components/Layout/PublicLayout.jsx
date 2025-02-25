import React from "react";
import { Outlet } from "react-router";

import { NavBar, NavHamburger, NavLinks, NavLogo } from "../Navigation";
import { ButtonSolid } from "../Buttons";

export default function PublicLayout() {
  return (
    <>
      <div className="d-flex flex-column overflow-hidden">
        <NavBar>
          <NavHamburger />
          <NavLogo />
          <NavLinks />
          <ButtonSolid color={"red"}>Try Flipboard</ButtonSolid>
        </NavBar>
        <Outlet />
      </div>
    </>
  );
}
