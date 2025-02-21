import React, { useState } from "react";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import Home from "./Home/Home";

const Local = () => {
  const [view, setView] = useState("signup"); 

  const renderView = () => {
    switch (view) {
      case "home":
        return <Home Logout={() => setView("login")} />;
      case "login":
        return (
          <div>
            <Login Login={() => setView("home")} />
             <p> 
             Don't have an account?
            <button onClick={() => setView("signup")}> Signup</button>
            </p>
          </div>
        );
      case "signup":
      default:
        return (
          <div>
            <Signup />
            <p>
            Already have an account? 
            <button onClick={() => setView("login")}>Login</button>
            </p>
          </div>
        );
    }
  };

  return <div>{renderView()}</div>;
};

export default Local;
