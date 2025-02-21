
import React, { useState, useEffect } from 'react';
import Child from './Child';
import './Parent.css';

const Parent = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    console.log('Items have been updated:', items);
    
  }, [items]);

  const AddItem = () => {
    if (newItem) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  return (
    <div className="parent">
      <h1>Parent </h1>
      <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} placeholder="Add item" />
      <button onClick={AddItem}>Add Item</button>
      <Child items={items} />
    </div>
  );
};

export default Parent;
