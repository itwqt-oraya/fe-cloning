import React from "react";
import styles from "./footer.module.scss";
import classNames from "classnames";
export default function FooterActiveLink() {
  return (
    <div className="col d-flex flex-column">
      {navItems.map((item, index) => (
        <a
          key={index}
          className={classNames(
            "text-decoration-none text-uppercase",
            styles["footer--link-active"]
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
    text: "How It Works",
  },
  {
    to: "/creators",
    text: "For Creators",
  },
  {
    to: "/publishers",
    text: "For Publishers",
  },
  {
    to: "/brands",
    text: "For Brands",
  },
  {
    to: "/blogs",
    text: "Blogs",
  },
];
