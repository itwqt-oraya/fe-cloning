import React from "react";
import styles from "./post.module.scss";

export default function PostMobile() {
  return (
    <div>
      <div className="d-flex gap-2">
        {mobileScreens.map((screen) => (
          <img
            className={styles["post-image--container"]}
            src={screen.imgUrl}
            key={screen.key}
          />
        ))}
      </div>
    </div>
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
