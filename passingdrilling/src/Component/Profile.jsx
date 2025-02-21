import React, { useState, useContext, createContext } from "react";

const UserContext = createContext();

const Profile = () => {
  const [name, setName] = useState("Guest");

  return (
    <UserContext.Provider value={{ name, setName }}>
      <UserProfile />
    </UserContext.Provider>
  );
};

const UserProfile = () => {
  const { name, setName } = useContext(UserContext);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Welcome, {name}!</h2>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default Profile;
