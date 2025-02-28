import React from "react";
import { DeviceImage, DeviceText } from "@modules/about";

export default function AboutDevice() {
  return (
    <div className="d-flex flex-lg-row flex-column flex-column-reverse justify-content-center align-items-center gap-3">
      <DeviceText />
      <DeviceImage />
    </div>
  );
}
