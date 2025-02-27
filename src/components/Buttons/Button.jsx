import classNames from "classnames";
import styles from "./buttons.module.scss";
import PropTypes from "prop-types";

Button.propTypes = {
  color: PropTypes.oneOf([
    "red",
    "blueLight",
    "blueDark",
    "purple",
    "green",
    "gray",
  ]).isRequired,
  variant: PropTypes.oneOf(["solid", "outline"]),
  children: PropTypes.node,
  props: PropTypes.shape({
    color: PropTypes.string.isRequired,
  }).isRequired,
};

export default function Button({ children, color, variant }) {
  return (
    <button
      className={classNames(
        "rounded",
        styles["button"],
        styles[`button--bg-${color}`],
        styles[`button--${variant}`]
      )}
    >
      {children}
    </button>
  );
}
