import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList/ProductList";
import Filters from "../components/Filters/Filters";
import Sorting from "../components/Sorting/Sorting";
import "./Product.css";

const Product = () => {
  const [products, setProducts] = useState([]); 
  const [filteredProducts, setFilteredProducts] = useState([]); 
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]); 
  const [sortOption, setSortOption] = useState(""); 

  
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/product.json"); 
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data); 
    };

    fetchProducts();
  }, []);

  
  useEffect(() => {
    let updatedProducts = [...products];

    if (category) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === category
      );
    }

    updatedProducts = updatedProducts.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    
    if (sortOption === "name") {
      updatedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "price") {
      updatedProducts.sort((a, b) => a.price - b.price);
    }

    setFilteredProducts(updatedProducts);
  }, [category, priceRange, sortOption, products]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Product </h1>
      </header>
      <div className="app-controls">
        <Filters
          category={category}
          setCategory={setCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
        <Sorting setSortOption={setSortOption} />
      </div>
      <main>
        <ProductList products={filteredProducts} />
      </main>
    </div>
  );
};

export default Product;
