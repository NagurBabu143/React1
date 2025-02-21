import React, { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import Filter from './components/Filter';
import Sort from './components/Sort';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 100]);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/products.json');
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filterProducts = () => {
      const filtered = products.filter(product => {
        const withinPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        return withinPriceRange && matchesCategory;
      });
      setFilteredProducts(filtered);
    };

    filterProducts();
  }, [products, selectedCategory, priceRange]);

  return (
    <div className="App">
      <h1>Product Catalog</h1>
      <Filter setSelectedCategory={setSelectedCategory} setPriceRange={setPriceRange} />
      <Sort  products={filteredProducts} setFilteredProducts={setFilteredProducts} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
