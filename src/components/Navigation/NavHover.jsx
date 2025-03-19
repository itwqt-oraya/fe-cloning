import styles from "./navigation.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";

NavHover.propTypes = {
  linkHovering: PropTypes.string,
  onHoverChange: PropTypes.func,
};

export default function NavHover({ linkHovering, onHoverChange }) {
  const handleMouseExit = () => {
    onHoverChange();
  };
  return (
    <div
      className={classNames(styles["nav-hover"], "d-none d-lg-block")}
      onMouseLeave={() => handleMouseExit()}
    >
      {hoverItems.map((item, index) => {
        if (linkHovering === item.title) {
          return (
            <div
              className={classNames(
                "d-flex flex-row gap-3 justify-content-center p-3"
              )}
              key={index}
            >
              {item.links.map((link, index) => (
                <p
                  key={index}
                  className={classNames(
                    styles["nav-link"],
                    "mb-0 fw-bold text-uppercase"
                  )}
                >
                  {link.text}
                </p>
              ))}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

const hoverItems = [
  {
    title: "work",
    links: [
      {
        text: "How To Create A Magazine",
      },
    ],
  },
  {
    title: "creators",
    links: [
      {
        text: "Build Your Presences",
      },
      {
        text: "Building Programs",
      },
    ],
  },
  {
    title: "blogs",
    links: [
      {
        text: "Inside Flipboard",
      },
      {
        text: "Business Blog",
      },
      {
        text: "Fediverse",
      },
    ],
  },
];
