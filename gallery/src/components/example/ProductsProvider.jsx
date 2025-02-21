import { createContext, useState } from "react";
import ConsumeProducts from "./ConsumeProducts";

export const ProductsContext = createContext();

const ProductsProvider = () => {
    const [products] = useState([
        { id: 1, name: "Laptop", price: "Rs.91000", category: "Electronics" },
        { id: 2, name: "Smartphone", price: "Rs.9600", category: "Electronics" },
        { id: 3, name: "Table", price: "Rs.9150", category: "Furniture" },
        { id: 4, name: "Chair", price: "Rs.980", category: "Furniture" },
    ]);

    return (
        <ProductsContext.Provider value={{ products }}>
            <ConsumeProducts/>
        </ProductsContext.Provider>
    );
};

export default ProductsProvider;
