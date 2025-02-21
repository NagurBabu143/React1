import React, { useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import Livestock from "./components/Livestock/Livestock";
import MilkProduction from "./components/MilkProduction/MilkProduction";
import Sales from "./components/Sales/Sales";
import Inventory from "./components/Inventory/Inventory";
import EmployeeManagement from "./components/EmployeeManagement/EmployeeManagement";
import HealthRecords from "./components/HealthRecords/HealthRecords";
import "./App.css";
import Reports from "./components/Reports/Reports";
import Expenses from "./components/Expenses/Expenses";
import Settings from "./components/Settings/Settings";
import Notifications from "./components/Notifications/Notifications";
import Profile from "./components/Profile/Profile";
import Logout from "./components/Logout/Logout";

function App() {
  const [activeSection, setActiveSection] = useState("Dashboard");

  const renderSection = () => {
    switch (activeSection) {
      case "Dashboard":
        return <Dashboard />;
      case "Livestock":
        return <Livestock />;
      case "MilkProduction":
        return <MilkProduction />;
      case "Sales":
        return <Sales />;
      case "Inventory":
        return <Inventory />;
      case "EmployeeManagement":
        return <EmployeeManagement />;
      case "HealthRecords":
        return <HealthRecords />;
        case "Reports":
          return <Reports />;
        case "Expenses":
          return <Expenses />;
        case "Settings":
          return <Settings />;
        case "Notifications":
          return <Notifications />;
        case "Profile":
          return <Profile />;
        case "Logout":
          return <Logout />;  
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app">
      <Header onNavigate={setActiveSection} />
      <div className="main-container">
        <Sidebar onNavigate={setActiveSection} />
        <div className="content">{renderSection()}</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
