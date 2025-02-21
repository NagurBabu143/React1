import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import './ProductList.css';

const products = [
  { id: 1, name: 'Product 1', price: 29.99, image: '/images/product1.jpg' },
  { id: 2, name: 'Product 2', price: 39.99, image: '/images/product2.jpg' },
  { id: 3, name: 'Product 3', price: 19.99, image: '/images/product3.jpg' },
];

function ProductList({ addToCart }) {
  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="products">
        {products.map(product => (
          <ProductItem key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
