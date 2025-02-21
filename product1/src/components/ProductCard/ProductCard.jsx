import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      {product.onSale && <div className="product-badge">Sale</div>}
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">Price: Rs.{product.price}</p>
      <p className="product-rating">Rating: {product.rating}⭐</p>
      <p className="product-category">Category: {product.category}</p>
      <button className="add-to-cart-button" onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
