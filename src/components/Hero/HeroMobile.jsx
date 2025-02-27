import React, { useState, useEffect } from "react";
import styles from "./hero.module.scss";
import classNames from "classnames";
export default function HeroMobile() {
  const [translateY, setTranslateY] = useState(300);

  useEffect(() => {
    const handleScroll = () => {
      const parentDiv = document.getElementById("limitScroll");
      if (parentDiv) {
        const scrollTop = window.scrollY;
        const maxScroll = parentDiv.offsetHeight - window.innerHeight + 100;
        const newTranslateY = Math.min(Math.max(scrollTop, 100), maxScroll);
        console.log(maxScroll);
        setTranslateY(newTranslateY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={classNames(
        "d-none d-lg-block",
        styles["hero--mobile-image-container"]
      )}
      style={{ transform: `translateY(${translateY}px)` }}
    >
      {mobileScreens.map((screen) => (
        <img
          className={classNames("", styles["hero--mobile-image"])}
          src={screen.imgUrl}
          key={screen.key}
        />
      ))}
    </section>
  );
}

const mobileScreens = [
  {
    key: 1,
    imgUrl:
      "https://about.flipboard.com/wp-content/uploads/2023/01/Following-Tab-670x1450.jpg",
  },
  {
    key: 2,
    imgUrl:
      "https://about.flipboard.com/wp-content/uploads/2023/01/Share-Screens-2-670x1450.png",
  },
  {
    key: 3,
    imgUrl:
      "https://about.flipboard.com/wp-content/uploads/2023/01/Conncet-Screen-670x1450.png",
  },
];
