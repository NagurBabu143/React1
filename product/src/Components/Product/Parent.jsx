import Product from './Product';
import './Parent.css';

const Parent = () => {
  const products = [
    { name: 'Laptop', price: 'RS.1000', description: 'A laptop.' },
    { name: 'Phone', price: 'RS.700', description: 'A phone.' },
    { name: 'Headphones', price: 'RS.150', description: 'Headphones.' },
    { name: 'Tablet', price: 'RS.300', description: 'A tablet for everyday use.' },
    { name: 'Smartwatch', price: 'RS.200', description: 'A smartwatch with fitness tracking.' },
    { name: 'Camera', price: 'RS.500', description: 'A high-quality digital camera.' },
    { name: 'Monitor', price: 'RS.250', description: 'A 24-inch LED monitor.' },
    { name: 'Keyboard', price: 'RS.50', description: 'A mechanical keyboard.' },
    { name: 'Mouse', price: 'RS.30', description: 'A wireless mouse.' },
    { name: 'Printer', price: 'RS.120', description: 'An all-in-one printer.' },
  ];

  return (
    <div className="container">
      <h1 className="title">Products</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <Product 
            key={index} 
            name={product.name} 
            price={product.price} 
            description={product.description} 
          />
        ))}
      </div>
    </div>
  );
};

export default Parent;
