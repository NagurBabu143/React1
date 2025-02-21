import React, { useState, useEffect } from "react";
import "./MilkProduction.css";

function MilkProduction() {
  const [milkRecords, setMilkRecords] = useState([
    { id: 1, date: "2025-02-09", quantity: 50 },
    { id: 2, date: "2025-02-10", quantity: 55 },
    { id: 3, date: "2025-02-11", quantity: 53 },
  ]);

  const [newRecord, setNewRecord] = useState({ date: "", quantity: "" });
  const [maxProduction, setMaxProduction] = useState(0);
  const [minProduction, setMinProduction] = useState(0);

  useEffect(() => {
    if (milkRecords.length > 0) {
      setMaxProduction(Math.max(...milkRecords.map((record) => record.quantity)));
      setMinProduction(Math.min(...milkRecords.map((record) => record.quantity)));
    }
  }, [milkRecords]);

  const addMilkRecord = () => {
    if (newRecord.date && newRecord.quantity) {
      setMilkRecords([
        ...milkRecords,
        {
          id: milkRecords.length + 1,
          date: newRecord.date,
          quantity: parseFloat(newRecord.quantity),
        },
      ]);
      setNewRecord({ date: "", quantity: "" });
    }
  };

  const deleteRecord = (id) => {
    setMilkRecords(milkRecords.filter((record) => record.id !== id));
  };

  const totalProduction = milkRecords.reduce((sum, record) => sum + record.quantity, 0);
  const avgProduction = milkRecords.length > 0 ? (totalProduction / milkRecords.length).toFixed(2) : 0;

  return (
    <div className="milk-production">
      <h2>🥛 Milk Production Dashboard</h2>
      <p>Monitor and track daily milk production for improved efficiency.</p>
      <img src="/images/milk.jpg" alt="Milk Production" className="milk-image"/>

      
      <div className="statistics">
        <div className="stat-box total">📊 Total: <span>{totalProduction} L</span></div>
        <div className="stat-box average">📈 Avg: <span>{avgProduction} L/day</span></div>
        <div className="stat-box max">🔼 Max: <span>{maxProduction} L</span></div>
        <div className="stat-box min">🔽 Min: <span>{minProduction} L</span></div>
      </div>

      <div className="milk-records">
        <h3>📆 Daily Production Records</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Quantity (Liters)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {milkRecords.map((record) => (
              <tr key={record.id}>
                <td>{record.date}</td>
                <td>{record.quantity} L</td>
                <td>
                  <button className="delete-btn" onClick={() => deleteRecord(record.id)}>❌</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      <div className="add-record">
        <h3>➕ Add New Record</h3>
        <input
          type="date"
          value={newRecord.date}
          onChange={(e) => setNewRecord({ ...newRecord, date: e.target.value })}
        />
        <input
          type="number"
          placeholder="Milk Quantity (Liters)"
          value={newRecord.quantity}
          onChange={(e) => setNewRecord({ ...newRecord, quantity: e.target.value })}
        />
        <button onClick={addMilkRecord}>Add Record</button>
      </div>
    </div>
  );
}

export default MilkProduction;
