import React from "react";

export default function HeroCol({ children, className }) {
  return <div className={`col-auto col-lg-6 ${className}`}>{children}</div>;
}
