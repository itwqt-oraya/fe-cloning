import React from "react";
import { HeroContainer } from "../../components/Hero";
import {
  FooterActiveLink,
  FooterInactiveLink,
  FooterSubLink,
  FooterContainer,
} from "../../components/Footer";
export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <img
          style={{ width: "17vw" }}
          src="https://about.flipboard.com/wp-content/themes/flipboard/dist/img/badge-white.svg"
        />
      </div>

      <div className="d-flex flex-column gap-3">
        <div className="d-flex flex-column flex-lg-row gap-3">
          <FooterActiveLink />
          <FooterInactiveLink />
        </div>

        <FooterSubLink />
        <p className="text-white">© Copyright 2025 Flipboard Inc.</p>
      </div>
    </FooterContainer>
  );
}
