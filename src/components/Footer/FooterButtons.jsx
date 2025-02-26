import React from "react";
import { Button, ButtonImage } from "../Buttons";
export default function FooterButtons() {
  return (
    <div className="d-flex flex-column flex-lg-row justify-content-start gap-3">
      <ButtonImage>
        <img src="https://about.flipboard.com/wp-content/themes/flipboard/dist/img/app-store-light.svg" />
      </ButtonImage>

      <ButtonImage>
        <img src="https://about.flipboard.com/wp-content/themes/flipboard/dist/img/google-play.png" />
      </ButtonImage>
      <Button variant="outline">Newsletter Sign Up</Button>
      <Button variant="outline">Select Language</Button>
    </div>
  );
}
