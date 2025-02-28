import React, { useState, useEffect, useContext } from "react";
import styles from "./hero.module.scss";
import axios from "axios";
import { LoaderContext } from "@context";
import { LoadingScreen } from "@components/Loader";

export default function HeroImageMap() {
  const { loading, setLoading } = useContext(LoaderContext);
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    axios
      .get("https://picsum.photos/v2/list?limit=20")
      .then((response) => {
        setImageList(
          response.data
            .filter((image) => image.width > 100 && image.height > 100)
            .map((image) => image.download_url)
        );
      })
      .catch((error) => {
        console.error("Error fetching images: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const getRandomPosition = () => {
    const x = Math.floor(Math.random() * 100) + "vw";
    const y = Math.floor(Math.random() * 30) + "em";
    return { x, y };
  };

  if (loading) {
    return <LoadingScreen />;
  }

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
