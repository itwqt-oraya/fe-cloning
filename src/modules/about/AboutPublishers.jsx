import React from "react";
import { PublisherIcons, PublisherText } from "@modules/about";

export default function AboutPublishers() {
  return (
    <div className="d-flex flex-lg-row flex-column flex-column-reverse justify-content-center align-items-center gap-3">
      <PublisherText />
      <PublisherIcons />
    </div>
  );
}
