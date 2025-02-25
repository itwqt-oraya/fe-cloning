import React from "react";
import { ButtonOutline, ButtonImage } from "../Buttons";
export default function FooterButtons() {
  return (
    <div>
      <ButtonImage>
        <img src="https://about.flipboard.com/wp-content/themes/flipboard/dist/img/app-store-light.svg" />
      </ButtonImage>

      <ButtonImage>
        <img src="https://about.flipboard.com/wp-content/themes/flipboard/dist/img/google-play.png" />
      </ButtonImage>
      <ButtonOutline>Newsletter Sign Up</ButtonOutline>
      <ButtonOutline>Select Language</ButtonOutline>
    </div>
  );
}
