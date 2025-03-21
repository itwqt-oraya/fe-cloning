import styles from "./device.module.scss";
export default function PublisherIcons() {
  return (
    <div className="p-3">
      <div className={styles["device--image"]}>
        <img
          alt="Cartier Tablet"
          src="https://about.flipboard.com/wp-content/uploads/2022/12/Cartier-Tablet-885x665.jpg"
        />
      </div>
    </div>
  );
}
