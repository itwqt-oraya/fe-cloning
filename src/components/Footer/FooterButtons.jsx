import { Button, ButtonImage } from "../Buttons";
export default function FooterButtons() {
  return (
    <div className="d-flex flex-column flex-lg-row justify-content-start gap-3">
      <ButtonImage>
        <img
          alt="Flipboard - App Store"
          src="https://about.flipboard.com/wp-content/themes/flipboard/dist/img/app-store-light.svg"
        />
      </ButtonImage>

      <ButtonImage>
        <img
          alt="Flipboard - Google Play"
          src="https://about.flipboard.com/wp-content/themes/flipboard/dist/img/google-play.png"
        />
      </ButtonImage>
      <Button variant="outline" color="red">
        Newsletter Sign Up
      </Button>
      <Button variant="outline" color="red">
        Select Language
      </Button>
    </div>
  );
}
