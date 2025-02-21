import React, { useState } from "react";

function Switch() {
  const [activeTab, setActiveTab] = useState("Home");

  const renderContent = () => {
    switch (activeTab) {
      case "Home":
        return <p>Welcome to the Home tab!</p>;
      case "About":
        return <p>About us section</p>;
      case "Contact":
        return <p>Contact us page</p>;
      default:
        return null;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setActiveTab("Home")}>Home</button>
        <button onClick={() => setActiveTab("About")}>About</button>
        <button onClick={() => setActiveTab("Contact")}>Contact</button>
      </nav>
      {renderContent()}
    </div>
  );
}

export default Switch;
