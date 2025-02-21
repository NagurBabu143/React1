import React, { useState } from "react";

const Theme = () => {
  const [theme, setTheme] = useState("light");

  const Theme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        height: "100vh", 
        width:"1100px",
        padding: "180px",
        margin: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>{theme === "light" ? "LIGHT MODE" : "DARK MODE"}</h1>
      <button onClick={Theme}> Theme</button>
    </div>
  );
};

export default Theme;
