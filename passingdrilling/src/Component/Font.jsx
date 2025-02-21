import React, { useState, useContext, createContext } from "react";

const FontContext = createContext(); // Creating Context

const Font = () => {
  const [fontSize, setFontSize] = useState(16);

  const increaseFont = () => setFontSize(fontSize + 2);
  const decreaseFont = () => setFontSize(fontSize - 2);

  return (
    <FontContext.Provider value={{ fontSize, increaseFont, decreaseFont }}>
      <FontAdjuster />
    </FontContext.Provider>
  );
};

const FontAdjuster = () => {
  const { fontSize, increaseFont, decreaseFont } = useContext(FontContext);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2 style={{ fontSize: `${fontSize}px` }}>Adjustable Font Size</h2>
      <button onClick={increaseFont}>Increase Font</button>
      <button onClick={decreaseFont} style={{ marginLeft: "10px" }}>
        Decrease Font
      </button>
    </div>
  );
};

export default Font;
