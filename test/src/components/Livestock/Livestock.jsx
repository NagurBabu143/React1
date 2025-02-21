import React, { useState } from "react";
import "./Livestock.css";

function Livestock() {
  const [livestock, setLivestock] = useState({
    cows: 120,
    bulls: 25,
    calves: 45,
  });

  const [feedStock, setFeedStock] = useState(500); 
  const [healthCheckups, setHealthCheckups] = useState(15);

  const addAnimal = (type) => {
    setLivestock((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  return (
    <div className="livestock">
      <h2>🐄 Livestock Management</h2>
      <p>
        Efficiently manage cows, bulls, and calves. Monitor their food supply, health, and well-being.
      </p>

      
      <div className="livestock-stats">
        <div className="stat-card">
          <h3>🐄 Total Cows</h3>
          <p>{livestock.cows}</p>
          <button onClick={() => addAnimal("cows")}>Add Cow</button>
        </div>
        <div className="stat-card">
          <h3>🐂 Total Bulls</h3>
          <p>{livestock.bulls}</p>
          <button onClick={() => addAnimal("bulls")}>Add Bull</button>
        </div>
        <div className="stat-card">
          <h3>🐃 Total Calves</h3>
          <p>{livestock.calves}</p>
          <button onClick={() => addAnimal("calves")}>Add Calf</button>
        </div>
      </div>

     
      <div className="livestock-management">
        <div className="stat-card">
          <h3>🌾 Feed Stock</h3>
          <p>{feedStock} kg</p>
          <button onClick={() => setFeedStock(feedStock + 50)}>Restock Feed</button>
        </div>
        <div className="stat-card">
          <h3>🩺 Health Checkups Done</h3>
          <p>{healthCheckups}</p>
          <button onClick={() => setHealthCheckups(healthCheckups + 1)}>Add Checkup</button>
        </div>
      </div>

   
      <div className="recent-updates">
        <h3>📝 Recent Updates</h3>
        <ul>
          <li>✔️ 5 new calves born today.</li>
          <li>✔️ 2 cows vaccinated.</li>
          <li>✔️ Feed stock replenished by 100 kg.</li>
          <li>✔️ Health checkup done for all bulls.</li>
        </ul>
      </div>

  
      <div className="alerts">
        <h3>⚠️ Alerts & Notifications</h3>
        <p>🚨 <strong>Warning:</strong> Low feed stock! Please restock soon.</p>
        <p>✅ No health issues detected among livestock.</p>
      </div>

     
      <div className="livestock-image">
        <img src="/images/livestock.jpg" alt="Livestock" />
      </div>
    </div>
  );
}

export default Livestock;
