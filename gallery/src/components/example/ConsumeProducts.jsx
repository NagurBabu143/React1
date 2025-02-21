import { useContext } from "react";
import { ProductsContext } from "./ProductsProvider";
import "./ProductsList.css"; 

const ConsumeProducts = () => {
    const { products } = useContext(ProductsContext);

    return (
        <div>
            <h2>Available Products</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <strong>{product.name}</strong> - {product.category} - {product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ConsumeProducts;
