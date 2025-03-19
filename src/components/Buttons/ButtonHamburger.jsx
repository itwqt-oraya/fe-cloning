import styles from "./buttons.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";

ButtonHamburger.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
};

export default function ButtonHamburger({ children, onClick }) {
  const handleClick = () => {
    onClick();
  };
  return (
    <button
      onClick={handleClick}
      className={`${classNames(
        styles["button"],
        styles["button--hamburger"]
      )} d-lg-none d-flex`}
    >
      {children}
    </button>
  );
}
