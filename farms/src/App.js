import React, { useState } from 'react';
import Dashboard from './Component/Dashboard';
import LivestockManagement from './Component/LivestockManagement';
import MilkProduction from './Component/MilkProduction';
import FeedManagement from './Component/FeedManagement';
import HealthRecords from './Component/HealthRecords';
import SalesExpenses from './Component/SalesExpenses';
import EmployeeManagement from './Component/EmployeeManagement';
import InventoryManagement from './Component/InventoryManagement';
import Reports from './components/Reports';
import Settings from './components/Settings';
import Login from './Component/Auth/Login';
import Register from './Component/Auth/Register';
import UserProfile from './Component/UserProfile';
import './App.css';

const App = () => {
  const [activeComponent, setActiveComponent] = useState('Dashboard');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Livestock':
        return <LivestockManagement />;
      case 'MilkProduction':
        return <MilkProduction />;
      case 'FeedManagement':
        return <FeedManagement />;
      case 'HealthRecords':
        return <HealthRecords />;
      case 'SalesExpenses':
        return <SalesExpenses />;
      case 'EmployeeManagement':
        return <EmployeeManagement />;
      case 'InventoryManagement':
        return <InventoryManagement />;
      case 'Reports':
        return <Reports />;
      case 'Settings':
        return <Settings />;
      case 'Login':
        return <Login />;
      case 'Register':
        return <Register />;
      case 'UserProfile':
        return <UserProfile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app">
      <nav>
        <button onClick={() => setActiveComponent('Dashboard')}>Dashboard</button>
        <button onClick={() => setActiveComponent('Livestock')}>Livestock Management</button>
        <button onClick={() => setActiveComponent('MilkProduction')}>Milk Production</button>
        <button onClick={() => setActiveComponent('FeedManagement')}>Feed Management</button>
        <button onClick={() => setActiveComponent('HealthRecords')}>Health Records</button>
        <button onClick={() => setActiveComponent('SalesExpenses')}>Sales & Expenses</button>
        <button onClick={() => setActiveComponent('EmployeeManagement')}>Employee Management</button>
        <button onClick={() => setActiveComponent('InventoryManagement')}>Inventory Management</button>
        <button onClick={() => setActiveComponent('Reports')}>Reports</button>
        <button onClick={() => setActiveComponent('Settings')}>Settings</button>
        <button onClick={() => setActiveComponent('Login')}>Login</button>
        <button onClick={() => setActiveComponent('Register')}>Register</button>
        <button onClick={() => setActiveComponent('UserProfile')}>User Profile</button>
      </nav>
      {renderComponent()}
    </div>
  );
};

export default App;
