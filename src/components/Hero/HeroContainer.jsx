import React from "react";

export default function HeroContainer({ children }) {
  return (
    <section className="row justify-content-end bg-warning">
      <div className="col-auto col-lg-6 p-5">{children}</div>
    </section>
  );
}
