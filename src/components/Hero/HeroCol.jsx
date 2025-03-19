import PropTypes from "prop-types";

HeroCol.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default function HeroCol({ children, className }) {
  return <div className={`col-auto col-lg-6 ${className}`}>{children}</div>;
}
