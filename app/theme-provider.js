// app/theme-provider.js
"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("dark-mode");
    if (saved === "enabled") setIsDarkMode(true);
    else if (saved === "disabled") setIsDarkMode(false);
    else
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("dark-mode", newMode ? "enabled" : "disabled");
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <div className={`${isDarkMode ? "dark" : ""}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
