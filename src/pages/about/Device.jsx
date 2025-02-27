import React from "react";
import { DeviceImage, DeviceText } from "@modules/about/Device";

export default function Device() {
  return (
    <div className="d-flex flex-lg-row flex-column flex-column-reverse justify-content-center align-items-center gap-3">
      <DeviceText />
      <DeviceImage />
    </div>
  );
}
