import React, { useState } from "react";
import { Outlet } from "react-router";

import {
  NavBar,
  NavHamburger,
  NavLinks,
  NavLogo,
  NavHover,
} from "@components/Navigation";
import { Button } from "@components/Buttons";
import { Footer } from "@components/Footer";

export default function PublicLayout() {
  const [hovering, setHovering] = useState(false);
  const [linkHovering, setLinkHovering] = useState("");
  return (
    <>
      <div className="d-flex flex-column overflow-hidden">
        <NavBar>
          <div className="d-flex align-items-center justify-content-lg-around p-2 justify-content-between w-100 mx-auto gap-5">
            <NavHamburger className="d-lg-none d-block" />
            <NavLogo />
            <NavLinks
              onHoverChange={() => setHovering((prevState) => !prevState)}
              setLinkHovering={setLinkHovering}
            />
            <Button variant="solid" color={"red"}>
              Try Flipboard
            </Button>
          </div>
          {hovering && (
            <NavHover
              linkHovering={linkHovering}
              onHoverChange={() => setHovering((prevState) => !prevState)}
            />
          )}
        </NavBar>

        <Outlet />
        <Footer />
      </div>
    </>
  );
}
