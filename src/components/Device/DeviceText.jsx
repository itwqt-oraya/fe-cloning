import React from "react";
import { Button } from "../Buttons";

export default function PublisherText() {
  return (
    <div className="p-5">
      <h5 className="text-uppercase fw-bold text-muted">
        {publisherText.subheading}
      </h5>
      <h1
        className="text-uppercase fw-bold text-special-green"
        dangerouslySetInnerHTML={{ __html: publisherText.heading }}
      />
      <p className="text-muted">{publisherText.body}</p>
      <Button variant="solid" color={"green"}>
        {publisherText.button}
      </Button>
    </div>
  );
}

const publisherText = {
  subheading: "For brands",
  heading: `A world-class experience to <span>reach</span> new audiences.`,
  body: "Flipboard connects brands to an audience of millions, reaching people when they are looking for great content and products related to their passions. Explore beautiful native advertising options and expand your brand's reach.",
  button: "For Brands",
};
