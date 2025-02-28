import React from "react";
import styles from "./footer.module.scss";
import classNames from "classnames";
export default function FooterSubLink() {
  return (
    <div className="col d-flex flex-column flex-lg-row gap-2 gap-lg-3">
      {navItems.map((item, index) => (
        <a
          key={index}
          className={classNames(
            "text-decoration-none",
            styles["footer--link-sublink"]
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
    text: "Privacy Policy",
  },
  {
    to: "/creators",
    text: "Cookie Policy",
  },
  {
    to: "/publishers",
    text: "Terms of Service",
  },
  {
    to: "/brands",
    text: "Community Guidelines",
  },
  {
    to: "/blogs",
    text: "Copyright",
  },
];
