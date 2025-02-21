import React, { useState } from "react";
import "./Sales.css";

function Sales() {
  const [salesRecords, setSalesRecords] = useState([
    { id: 1, date: "2025-02-09", product: "Milk", quantity: 20, price: 80.5 },
    { id: 2, date: "2025-02-10", product: "Cheese", quantity: 5, price: 5.0 },
    { id: 3, date: "2025-02-11", product: "Butter", quantity: 3, price: 4.0 },
  ]);

  const [newSale, setNewSale] = useState({ date: "", product: "", quantity: "", price: "" });

  const totalRevenue = salesRecords.reduce((sum, sale) => sum + sale.quantity * sale.price, 0);

  const addSaleRecord = () => {
    if (newSale.date && newSale.product && newSale.quantity && newSale.price) {
      setSalesRecords([
        ...salesRecords,
        {
          id: salesRecords.length + 1,
          date: newSale.date,
          product: newSale.product,
          quantity: parseFloat(newSale.quantity),
          price: parseFloat(newSale.price),
        },
      ]);
      setNewSale({ date: "", product: "", quantity: "", price: "" });
    }
  };

  const deleteRecord = (id) => {
    setSalesRecords(salesRecords.filter((sale) => sale.id !== id));
  };

  return (
    <div className="sales">
      <h2>💰 Dairy Sales Dashboard</h2>
      <p>Manage dairy product sales and view revenue reports.</p>
      <img src="/images/sales.jpg" alt="Sales" className="sales-image" />


      <div className="revenue-box">
        💵 Total Revenue: <span>Rs.{totalRevenue.toFixed(2)}</span>
      </div>

    
      <div className="sales-records">
        <h3>📋 Sales Records</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price (Rs.)</th>
              <th>Total (Rs.)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {salesRecords.map((sale) => (
              <tr key={sale.id}>
                <td>{sale.date}</td>
                <td>{sale.product}</td>
                <td>{sale.quantity}</td>
                <td>Rs.{sale.price.toFixed(2)}</td>
                <td>Rs.{(sale.quantity * sale.price).toFixed(2)}</td>
                <td>
                  <button className="delete-btn" onClick={() => deleteRecord(sale.id)}>❌</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     
      <div className="add-sale">
        <h3>➕ Add New Sale</h3>
        <input
          type="date"
          value={newSale.date}
          onChange={(e) => setNewSale({ ...newSale, date: e.target.value })}
        />
        <input
          type="text"
          placeholder="Product Name"
          value={newSale.product}
          onChange={(e) => setNewSale({ ...newSale, product: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newSale.quantity}
          onChange={(e) => setNewSale({ ...newSale, quantity: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price per unit (Rs.)"
          value={newSale.price}
          onChange={(e) => setNewSale({ ...newSale, price: e.target.value })}
        />
        <button onClick={addSaleRecord}>Add Sale</button>
      </div>
    </div>
  );
}

export default Sales;
