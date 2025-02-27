import React, { useState, useEffect } from "react";
import styles from "./hero.module.scss";
import axios from "axios";
export default function HeroImageMap() {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    axios.get("https://picsum.photos/v2/list?limit=20").then((response) => {
      setImageList(
        response.data
          .filter((image) => image.width > 100 && image.height > 100)
          .map((image) => image.download_url)
      );
    });
  }, []);

  const getRandomPosition = () => {
    const x = Math.floor(Math.random() * 100) + "vw";
    const y = Math.floor(Math.random() * 30) + "em";
    return { x, y };
  };

  return (
    <div className={styles["hero-bg--imageContainer"]}>
      <div className={styles["hero-bg--imageContent"]}>
        {imageList.map((image, index) => (
          <img
            src={image}
            key={index}
            alt="random"
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
