import React, { useRef } from "react";
import styles from "./post.module.scss";
import classNames from "classnames";

export default function PostMobile({ mobileIndex }) {
  const position = 0;
  return (
    <div className={classNames("p-2", styles["post--mobile-container"])}>
      <div
        className={classNames(
          "d-flex justify-content-start gap-2 overflow-x-scroll",
          styles["post--mobile-image-scroll"]
        )}
      >
        {mobileScreens.map((screen) => {
          return screen.key === mobileIndex ? (
            <div
              key={screen.key}
              style={{
                transform: `translate3d(${
                  mobileIndex == 1 ? 0 : (mobileIndex - 1) * -100
                }%,0px,0px)`,
                transition: "transform 0.2s",
              }}
            >
              <img
                className={classNames(styles["post--mobile-image-container"])}
                src={screen.imgUrl}
              />
            </div>
          ) : (
            <div
              style={{
                transform: `translate3d(${
                  mobileIndex == 1 ? 0 : (mobileIndex - 1) * -100
                }%,0px,0px)`,
                transition: "transform 0.2s",
              }}
            >
              <img
                className={classNames(
                  styles["post--mobile-image-container"],
                  styles["post--mobile-image-muted"]
                )}
                src={screen.imgUrl}
                key={screen.key}
              />
            </div>
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
