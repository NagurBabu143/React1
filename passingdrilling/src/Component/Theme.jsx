import React, { useState, useContext, createContext } from "react";

const ThemeContext = createContext(); // Creating Context

const Theme = () => {
  const [theme, setTheme] = useState("light");

  const Theme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, Theme }}>
      <ThemeButton />
    </ThemeContext.Provider>
  );
};

const ThemeButton = () => {
  const { theme, Theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h2>Current Theme: {theme}</h2>
      <button onClick={Theme}> Theme</button>
    </div>
  );
};

export default Theme;
