import styles from "./buttons.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";

ButtonImage.propTypes = {
  children: PropTypes.node,
};

export default function ButtonImage({ children }) {
  return (
    <button
      className={classNames(styles["button--image"], "rounded d-flex p-0")}
    >
      {children}
    </button>
  );
}
