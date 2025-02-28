import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  use,
} from "react";
import { LoadingScreen } from "@components/Loader";
import axios from "axios";

export const LoaderContext = createContext();

export default function LoaderProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    axios
      .get("https://picsum.photos/v2/list?limit=20")
      .then((response) => {
        const filteredPictures = response.data
          .filter((image) => image.width > 100 && image.height > 100)
          .map((image) => `https://picsum.photos/id/${image.id}/200/200`);
        setPictures(filteredPictures);
      })
      .catch((error) => {
        console.error("Error fetching images: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
    setLoading(false);
  }, []);

  return (
    <LoaderContext.Provider
      value={{ loading, setLoading, pictures, setPictures }}
    >
      {loading ? <LoadingScreen /> : children}
    </LoaderContext.Provider>
  );
}
