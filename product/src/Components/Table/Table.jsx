
import './Table.css'

const Table = ({ products }) => {
  const totalValue = products.reduce((sum, product) => sum + product.price * product.quantity,0);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>Rs.{product.price}</td>
              <td>{product.quantity}</td>
              <td>Rs.{(product.price * product.quantity)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Total Value: Rs.{totalValue}</h2>
    </div>
  );
};

export default Table;
