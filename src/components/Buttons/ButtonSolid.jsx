import classNames from "classnames";
import styles from "./buttons.module.scss";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

ButtonSolid.propTypes = {
  color: PropTypes.oneOf([
    "red",
    "blueLight",
    "blueDark",
    "purple",
    "green",
    "gray",
  ]).isRequired,
  text: PropTypes.string.isRequired,
};

export default function ButtonSolid(props) {
  const { color, text } = props;
  return (
    <Button
      className={classNames(styles["button"], {
        [styles["button--bg-red"]]: color === "red",
        [styles["button--bg-blue-light"]]: color === "blueLight",
        [styles["button--bg-blue-dark"]]: color === "blueDark",
        [styles["button--bg-purple"]]: color === "purple",
        [styles["button--bg-green"]]: color === "green",
      })}
    >
      {text}
    </Button>
  );
}
