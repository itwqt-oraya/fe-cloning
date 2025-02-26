import React from "react";
import { PublisherIcons, PublisherText } from "../../components/Publishers";

export default function Publishers() {
  return (
    <div className="d-flex flex-lg-row justify-content-center align-items-center gap-3">
      <PublisherText />
      <PublisherIcons />
    </div>
  );
}
