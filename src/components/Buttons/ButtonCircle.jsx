import styles from "./buttons.module.scss";
import PropTypes from "prop-types";

ButtonCircle.propTypes = {
  children: PropTypes.node,
};

export default function ButtonCircle({ children }) {
  return <button className={styles["button--circle"]}>{children}</button>;
}
