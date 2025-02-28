import React, { useState, createContext } from "react";

export const LoaderContext = createContext();

export default function LoaderProvider({ children }) {
  const [loading, setLoading] = useState(true);
  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoaderContext.Provider>
  );
}
