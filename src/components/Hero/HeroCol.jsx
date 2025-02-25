import React from "react";

export default function HeroCol({ children, className }) {
  return <div className={`col-auto col-lg-6 p-5 ${className}`}>{children}</div>;
}
