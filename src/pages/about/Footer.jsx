import React from "react";
import {
  FooterActiveLink,
  FooterInactiveLink,
  FooterSubLink,
  FooterContainer,
  FooterButtons,
  FooterImage,
} from "../../components/Footer";
export default function Footer() {
  return (
    <FooterContainer>
      <FooterImage />
      <div className="d-flex flex-column gap-3">
        <div className="d-flex flex-column flex-lg-coloumn gap-4 gap-lg-1 mb-3">
          <FooterActiveLink />
          <FooterInactiveLink />
        </div>

        <FooterSubLink />
        <FooterButtons />
        <p className="text-white">© Copyright 2025 Flipboard Inc.</p>
      </div>
    </FooterContainer>
  );
}
