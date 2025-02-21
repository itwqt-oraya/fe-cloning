import styles from "./navigation.module.scss";
import React from "react";
import { Link } from "react-router";

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

export default function NavLinks() {
  return (
    <div className="d-none d-lg-block">
      <div className="d-flex gap-3">
        {navItems.map((item, index) => (
          <Link key={index} to={item.to} className={styles["nav-link"]}>
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );
}
