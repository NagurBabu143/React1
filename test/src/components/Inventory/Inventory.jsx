import React, { useState } from "react";
import "./Inventory.css";

function Inventory() {

  const [inventory, setInventory] = useState([
    { id: 1, name: "Cow Feed", quantity: 50, unit: "kg" },
    { id: 2, name: "Milk Cans", quantity: 20, unit: "pieces" },
    { id: 3, name: "Medical Supplies", quantity: 15, unit: "packs" },
  ]);

 
  const [newItem, setNewItem] = useState({ name: "", quantity: "", unit: "" });

 
  const increaseStock = (id) => {
    setInventory((prevInventory) =>
      prevInventory.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

 
  const decreaseStock = (id) => {
    setInventory((prevInventory) =>
      prevInventory.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };


  const removeItem = (id) => {
    setInventory(inventory.filter((item) => item.id !== id));
  };


  const addItem = () => {
    if (newItem.name && newItem.quantity && newItem.unit) {
      setInventory([
        ...inventory,
        { id: inventory.length + 1, ...newItem, quantity: Number(newItem.quantity) },
      ]);
      setNewItem({ name: "", quantity: "", unit: "" }); // Reset input fields
    }
  };

  return (
    <div className="inventory">
      <h2>Inventory Management</h2>
      <p>Track and manage dairy farm supplies efficiently.</p>
      
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Unit</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.unit}</td>
              <td>
                <button className="increase" onClick={() => increaseStock(item.id)}>+</button>
                <button className="decrease" onClick={() => decreaseStock(item.id)}>-</button>
                <button className="remove" onClick={() => removeItem(item.id)}>❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      
      <div className="add-item-form">
        <input
          type="text"
          placeholder="Item Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
        />
        <input
          type="text"
          placeholder="Unit"
          value={newItem.unit}
          onChange={(e) => setNewItem({ ...newItem, unit: e.target.value })}
        />
        <button className="add" onClick={addItem}>Add Item</button>
      </div>
    </div>
  );
}

export default Inventory;
