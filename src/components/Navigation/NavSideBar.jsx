import styles from "./navigation.module.scss";

import classNames from "classnames";
import { Offcanvas } from "reactstrap";
import NavSideLinks from "./NavSideLinks";
import PropTypes from "prop-types";

NavSideBar.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

export default function NavSideBar(props) {
  const { open, setOpen } = props;
  const toggle = () => setOpen(!open);
  return (
    <div className={classNames(styles["nav-sidebar--container"], "d-lg-none")}>
      <Offcanvas
        className={classNames(styles["nav-sidebar"], "d-lg-none")}
        direction="end"
        isOpen={open}
        toggle={toggle}
        scrollable={false}
      >
        <div className="d-flex flex-column justify-content-between h-100 mt-5">
          <NavSideLinks />

          <div className={styles["nav-sideimg"]}>
            <img
              className="w-100"
              src="https://about.flipboard.com/wp-content/uploads/2023/07/Flipboard-Andoird-custom-tabs-scaled.jpg"
            />
          </div>
        </div>
      </Offcanvas>
    </div>
  );
}
