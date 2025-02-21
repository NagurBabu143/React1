import React, { useState, useContext, createContext } from "react";

const LanguageContext = createContext(); // Creating Context

const Language = () => {
  const [language, setLanguage] = useState("English");

  const NLanguage = () => {
    setLanguage(language === "English" ? "हिन्दी" : "English");
  };

  return (
    <LanguageContext.Provider value={{ language, NLanguage }}>
      <LanguageSwitcher />
    </LanguageContext.Provider>
  );
};

const LanguageSwitcher = () => {
  const { language, NLanguage } = useContext(LanguageContext);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Current Language: {language}</h2>
      <button onClick={NLanguage}>Switch Language</button>
    </div>
  );
};

export default Language;
