import React from "react";
import styles from "./post.module.scss";
import classNames from "classnames";

export default function PostMobile({ mobileIndex }) {
  return (
    <div
      className={classNames(
        "p-2 overflow-auto",
        styles["post--mobile-container"]
      )}
    >
      <div className={classNames("d-flex justify-content-start gap-2")}>
        {mobileScreens.map((screen) => {
          return screen.key == mobileIndex ? (
            <img
              className={classNames(styles["post--mobile-image-container"])}
              src={screen.imgUrl}
              key={screen.key}
            />
          ) : (
            <img
              className={classNames(
                styles["post--mobile-image-container"],
                styles["post--mobile-image-muted"]
              )}
              src={screen.imgUrl}
              key={screen.key}
            />
          );
        })}
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
  {
    key: 4,
    imgUrl:
      "https://about.flipboard.com/wp-content/uploads/2023/01/Share-Screens-2-670x1450.png",
  },
];
