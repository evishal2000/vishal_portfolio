import React, { createContext, useContext, useState } from "react";

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [mode, setMode] = useState("tech"); // 'tech' or 'photo'

  const toggleMode = () =>
    setMode((prev) => (prev === "tech" ? "photo" : "tech"));

  return (
    <PortfolioContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);
