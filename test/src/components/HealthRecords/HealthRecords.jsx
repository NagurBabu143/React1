import React, { useState } from "react";
import "./HealthRecords.css";

function HealthRecords() {

  const [records, setRecords] = useState([
    { id: 1, name: "Cow A", condition: "Healthy", vaccination: "Rabies", date: "2025-01-10" },
    { id: 2, name: "Cow B", condition: "Sick", vaccination: "Foot-and-Mouth", date: "2025-02-01" },
    { id: 3, name: "Cow C", condition: "Recovering", vaccination: "Anthrax", date: "2025-01-25" },
  ]);


  const [newRecord, setNewRecord] = useState({ name: "", condition: "", vaccination: "", date: "" });

 
  const removeRecord = (id) => {
    setRecords(records.filter((record) => record.id !== id));
  };

  
  const addRecord = () => {
    if (newRecord.name && newRecord.condition && newRecord.vaccination && newRecord.date) {
      setRecords([
        ...records,
        { id: records.length + 1, ...newRecord },
      ]);
      setNewRecord({ name: "", condition: "", vaccination: "", date: "" }); 
    }
  };

  return (
    <div className="health-records">
      <h2>Health Records</h2>
      <p>Track cattle health conditions and vaccinations.</p>
      
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Condition</th>
            <th>Vaccination</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>{record.name}</td>
              <td>{record.condition}</td>
              <td>{record.vaccination}</td>
              <td>{record.date}</td>
              <td>
                <button className="remove" onClick={() => removeRecord(record.id)}>❌ Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      
      <div className="add-record-form">
        <input
          type="text"
          placeholder="Cattle Name"
          value={newRecord.name}
          onChange={(e) => setNewRecord({ ...newRecord, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Condition"
          value={newRecord.condition}
          onChange={(e) => setNewRecord({ ...newRecord, condition: e.target.value })}
        />
        <input
          type="text"
          placeholder="Vaccination"
          value={newRecord.vaccination}
          onChange={(e) => setNewRecord({ ...newRecord, vaccination: e.target.value })}
        />
        <input
          type="date"
          value={newRecord.date}
          onChange={(e) => setNewRecord({ ...newRecord, date: e.target.value })}
        />
        <button className="add" onClick={addRecord}>Add Record</button>
      </div>
    </div>
  );
}

export default HealthRecords;
