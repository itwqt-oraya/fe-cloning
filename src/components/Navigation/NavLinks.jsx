import styles from "./navigation.module.scss";
import { Link } from "react-router";
import PropTypes from "prop-types";

NavLinks.propTypes = {
  onHoverChange: PropTypes.func,
  setLinkHovering: PropTypes.func,
};

const navItems = [
  {
    to: "/",
    text: "How It Works",
    title: "work",
  },
  {
    to: "/creators",
    text: "For Creators",
    title: "creators",
  },
  {
    to: "/publishers",
    text: "For Publishers",
    title: "publishers",
  },
  {
    to: "/brands",
    text: "For Brands",
    title: "brands",
  },
  {
    to: "/blogs",
    text: "Blogs",
    title: "blogs",
  },
];

export default function NavLinks({ onHoverChange, setLinkHovering }) {
  const handleMouseEnter = (title) => {
    onHoverChange();
    setLinkHovering(title);
  };

  return (
    <div className="d-none d-lg-block">
      <div className="d-flex gap-3">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className={styles["nav-link"]}
            onMouseEnter={() => handleMouseEnter(item.title)}
          >
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );
}
