import styles from "./buttons.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";

ButtonOutline.propTypes = {
  children: PropTypes.node,
};

export default function ButtonOutline({ children }) {
  return (
    <button className={classNames(styles["button--outline"], "rounded")}>
      {children}
    </button>
  );
}
