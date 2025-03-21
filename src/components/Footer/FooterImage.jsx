import styles from "./footer.module.scss";

export default function FooterImage() {
  return (
    <img
      className={styles["footer--image"]}
      alt="Flipboard Logo"
      src="https://about.flipboard.com/wp-content/themes/flipboard/dist/img/badge-white.svg"
    />
  );
}
