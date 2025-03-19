import styles from "./hero.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";

HeroHeaderText.propTypes = {
  children: PropTypes.node,
};

export default function HeroHeaderText({ children }) {
  return (
    <h1
      className={classNames([
        styles["hero-text--header"],
        "text-uppercase fw-bold",
      ])}
    >
      {children}
    </h1>
  );
}
