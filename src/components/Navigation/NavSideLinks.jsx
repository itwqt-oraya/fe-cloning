import styles from "./navigation.module.scss";
import "../../styles/main.scss";

import React, { useState } from "react";
import { Link } from "react-router";
import { Collapse } from "reactstrap";
import { ButtonHamburger } from "../Buttons";
import { FaChevronRight, FaChevronDown } from "react-icons/fa6";
import classNames from "classnames";
import index from "../../pages/about";
const navItems = [
  {
    index: 0,
    to: "/",
    text: "How It Works",
    subtext: [
      {
        to: "/how-it-works",
        text: "How To Create A Magazine",
      },
    ],
  },
  {
    index: 1,
    to: "/creators",
    text: "For Creators",
    subtext: [
      {
        to: "/creators",
        text: "Build Your Presence",
      },
      {
        to: "/creators",
        text: "Creator Programs",
      },
    ],
  },
  {
    index: 2,
    to: "/publishers",
    text: "For Publishers",
  },
  {
    index: 3,
    to: "/brands",
    text: "For Brands",
  },
  {
    index: 4,
    to: "/blogs",
    text: "Blogs",
    subtext: [
      {
        to: "/blogs",
        text: "Inside Flipboard",
      },
      {
        to: "/blogs",
        text: "Business Blog",
      },
      {
        to: "/blogs",
        text: "Fediverse",
      },
    ],
  },
];

export default function NavSideLinks() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index);
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-4 mt-3">
      <nav className="d-flex row gap-2">
        {navItems.map((item) => (
          <div key={item.index}>
            <div className="d-flex align-items-center gap-2">
              {item.subtext && (
                <div>
                  <ButtonHamburger onClick={() => toggle(item.index)}>
                    {item.index == activeIndex && isOpen ? (
                      <FaChevronDown />
                    ) : (
                      <FaChevronRight />
                    )}
                  </ButtonHamburger>
                </div>
              )}
              <Link
                to={item.to}
                className={classNames(styles["nav-sidelink"], {
                  [styles["text--state-inactive"]]:
                    item.index != activeIndex && isOpen,
                })}
              >
                {item.text}
              </Link>
            </div>
            {item.subtext && item.index == activeIndex && (
              <Collapse isOpen={isOpen}>
                <div className="nav-sidelink--container d-flex flex-column gap-2">
                  {item.subtext.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.to}
                      className={styles["nav-sidelink--subtext"]}
                    >
                      {subItem.text}
                    </Link>
                  ))}
                </div>
              </Collapse>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
