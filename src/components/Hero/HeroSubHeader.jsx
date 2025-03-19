import styles from "./hero.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";

HeroSubHeaderText.propTypes = {
  children: PropTypes.node,
};

export default function HeroSubHeaderText({ children }) {
  return (
    <h1 className={classNames([styles["hero-text--subheader"], "fw-bold"])}>
      {children}
    </h1>
  );
}
