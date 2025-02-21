import Product from "./List";
function ProductsList() {
    const products = [
      { id: 1, name: "Laptop", price: 800 },
      { id: 2, name: "Smartphone", price: 500 },
      { id: 3, name: "Tablet", price: 300 },
    ];
  
    return (
      <div>
        <h2>Products List</h2>
        {products.map((product) => (
          <Product key={product.id} name={product.name} price={product.price} />
        ))}
      </div>
    );
  }
  
  export default ProductsList;