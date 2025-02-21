import React, { useState, useContext, createContext } from "react";

const CartContext = createContext(); // Creating Context

const Cart1 = () => {
  const [cart, setCart] = useState([]);

  const addItem = () => {
    setCart([...cart, `Item ${cart.length + 1}`]);
  };

  const removeItem = () => {
    setCart(cart.slice(0, -1));
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      <Cart />
    </CartContext.Provider>
  );
};

const Cart = () => {
  const { cart, addItem, removeItem } = useContext(CartContext);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Cart Items: {cart.length}</h2>
      <button onClick={addItem}>Add Item</button>
      <button onClick={removeItem} style={{ marginLeft: "10px" }}>
        Remove Item
      </button>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart1;
