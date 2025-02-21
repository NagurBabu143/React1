import React, { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [milkProduction, setMilkProduction] = useState(450);
  const [livestockCount, setLivestockCount] = useState({ cows: 120, calves: 30 });
  const [revenue, setRevenue] = useState(150000);

  return (
    <div className="dashboard">
      <h2>🐄 Dairy Farm Management Dashboard</h2>
      <p>
        Welcome to <strong>Dairy Farm Management System</strong>. Monitor and manage 
        all farm activities efficiently, ensuring better productivity and profitability.
      </p>

      
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>🐄 Total Livestock</h3>
          <p>{livestockCount.cows} Cows, {livestockCount.calves} Calves</p>
          <button onClick={() => setLivestockCount({ ...livestockCount, cows: livestockCount.cows + 1 })}>
            Add Cow
          </button>
          <button onClick={() => setLivestockCount({ ...livestockCount, calves: livestockCount.calves + 1 })}>
            Add Calf
          </button>
        </div>
        <div className="stat-card">
          <h3>🥛 Daily Milk Production</h3>
          <p>{milkProduction} Liters</p>
          <button onClick={() => setMilkProduction(milkProduction + 10)}>Increase</button>
        </div>
        <div className="stat-card">
          <h3>💰 Monthly Revenue</h3>
          <p>Rs.{revenue}</p>
          <button onClick={() => setRevenue(revenue + 500)}>Increase</button>
        </div>
      </div>


      <div className="dashboard-sections">
        <h3>📌 Key Features:</h3>
        <ul>
          <li>📊 Real-time monitoring of livestock health and milk production</li>
          <li>🛒 Inventory and feed management</li>
          <li>💰 Sales tracking and revenue analysis</li>
          <li>👨‍🌾 Employee task management and payroll tracking</li>
          <li>📅 Automated medical checkup and vaccination schedules</li>
          <li>📈 Data-driven insights for better decision-making</li>
        </ul>
      </div>

      
      <div className="recent-activity">
        <h3>📝 Recent Activities</h3>
        <ul>
          <li>✔️ Milk collected - {milkProduction} Liters</li>
          <li>✔️ 3 cows vaccinated today</li>
          <li>✔️ Feed stock replenished</li>
          <li>✔️ New employee added: John Doe (Veterinarian)</li>
        </ul>
      </div>

    
      <div className="alerts">
        <h3>⚠️ Alerts & Notifications</h3>
        <p>🚨 <strong>Warning:</strong> Low feed stock! Please restock soon.</p>
        <p>✅ No health issues detected in livestock.</p>
      </div>

  
      <div className="dashboard-image">
        <img src="/images/dairyfarm.jpg" alt="Dairy Farm" />
      </div>
    </div>
  );
}

export default Dashboard;
