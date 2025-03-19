import styles from "./footer.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";

FooterContainer.propTypes = {
  children: PropTypes.node,
};

export default function FooterContainer({ children }) {
  return (
    <footer
      className={classNames(
        "justify-content-start",
        styles["footer-container"]
      )}
    >
      <div className="p-5 gap-4 d-flex flex-column flex-lg-row justify-content-start justify-content-lg-center align-items-start">
        {children}
      </div>
    </footer>
  );
}
