import styles from "./hero.module.scss";
import PropTypes from "prop-types";
import classNames from "classnames";

HeroContainer.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.oneOf(["accent", "primaryDark"]).isRequired,
  className: PropTypes.string,
};

export default function HeroContainer({ children, bgColor, className }) {
  return (
    <section
      className={classNames(`row ${className}`, {
        [styles["hero-bg--accent"]]: bgColor === "accent",
        [styles["hero-bg--primaryDark"]]: bgColor === "primaryDark",
      })}
    >
      {children}
    </section>
  );
}
