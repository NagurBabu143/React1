import './Product.css';

const Product = ({ name, price, description }) => (
  <div className="product-card">
    <h2 className="product-name">{name}</h2>
    <p className="product-price">Price: {price}</p>
    <p className="product-description">{description}</p>
  </div>
);

export default Product;