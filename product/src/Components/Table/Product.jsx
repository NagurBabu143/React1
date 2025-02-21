import React from 'react';
import Table from './Table';
import './Product.css';

const Product = () => {
 
  const products = [
    { name: 'Wireless Mouse', price: 10, quantity: 5 },
    { name: 'Mechanical Keyboard', price: 15, quantity: 3 },
    { name: 'USB-C Hub', price: 20, quantity: 2 },
    { name: 'Bluetooth Headphones', price: 25, quantity: 4 },
    { name: '27-inch Monitor', price: 300, quantity: 1 },
    { name: 'Laptop Stand', price: 12, quantity: 10 },
    { name: 'Webcam', price: 50, quantity: 2 },
    { name: 'Gaming Chair', price: 150, quantity: 3 },
    { name: 'Portable SSD', price: 100, quantity: 1 },
    { name: 'Smartphone Stand', price: 8, quantity: 7 },
  ];

  return (
    <div>
      <h1>Product Table</h1>
      <Table products={products} />
    </div>
  );
};

export default Product;
