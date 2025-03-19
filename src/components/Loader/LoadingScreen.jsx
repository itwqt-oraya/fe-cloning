import styles from "./loader.module.scss";
import classNames from "classnames";
export default function LoadingScreen() {
  return (
    <div
      className={classNames(
        "position-absolute h-100 w-100 bg-white d-flex justify-content-center align-items-center",
        styles["loader--container"]
      )}
    >
      <div className={styles["loader--body"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
        >
          <rect x="0" y="0" width="100" height="100" fill="#c00"></rect>
          <g shapeRendering="crispEdges" fill="white">
            <rect x="40" y="40" width="20" height="20"></rect>
            <rect x="40" y="20" width="40" height="20"></rect>
            <rect x="20" y="20" width="20" height="60"></rect>
          </g>
        </svg>
      </div>
    </div>
  );
}
