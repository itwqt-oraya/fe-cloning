import React from "react";
import styles from "./footer.module.scss";
import classNames from "classnames";
export default function FooterInactiveLink() {
  return (
    <div className="col d-flex flex-column flex-lg-row gap-lg-3">
      {navItems.map((item, index) => (
        <a
          key={index}
          className={classNames(
            "text-decoration-none text-uppercase",
            styles["footer--link-inactive"]
          )}
          href={item.to}
        >
          {item.text}
        </a>
      ))}
    </div>
  );
}

const navItems = [
  {
    to: "/",
    text: "Our Story",
  },
  {
    to: "/creators",
    text: "Podcasts",
  },
  {
    to: "/publishers",
    text: "Careers",
  },
  {
    to: "/brands",
    text: "Dei",
  },
  {
    to: "/blogs",
    text: "Press",
  },
  {
    to: "/blogs",
    text: "Help",
  },
];
