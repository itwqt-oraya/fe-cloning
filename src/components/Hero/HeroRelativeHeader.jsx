import styles from "./hero.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";

HeroRelativeHeader.propTypes = {
  children: PropTypes.node,
};

export default function HeroRelativeHeader({ children }) {
  return (
    <h1
      className={classNames([
        styles["hero-text--subheader"],
        styles["hero-text--relative"],
        "fw-bold",
      ])}
    >
      {children}
    </h1>
  );
}
