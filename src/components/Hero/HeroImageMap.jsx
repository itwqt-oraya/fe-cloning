import { useContext } from "react";
import styles from "./hero.module.scss";
import { LoaderContext } from "@/context";

export default function HeroImageMap() {
  const { pictures } = useContext(LoaderContext);
  const getRandomPosition = () => {
    const x = Math.floor(Math.random() * 100) + "vw";
    const y = Math.floor(Math.random() * 30) + "em";
    return { x, y };
  };

  return (
    <div className={styles["hero-bg--imageContainer"]}>
      <div className={styles["hero-bg--imageContent"]}>
        {pictures?.map((image, index) => (
          <img
            src={image}
            key={index}
            alt="Image Map"
            className={styles["hero-bg--image"]}
            style={{
              left: `${getRandomPosition().x}`,
              top: `${getRandomPosition().y}`,
              right: `${getRandomPosition().x}`,
              bottom: `${getRandomPosition().y}`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
