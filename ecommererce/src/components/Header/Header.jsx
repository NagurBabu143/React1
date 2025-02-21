import React, { useState } from 'react';
import './Header.css';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

function Header({ setCurrentPage }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setDropdownOpen(false); // Close dropdown on page change
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>My E-Commerce Store</h1>
      </div>
      <nav>
        <ul>
          <li><button onClick={() => handlePageChange('home')}>Home</button></li>
          <li><button onClick={() => handlePageChange('products')}>Products</button></li>
          <li><button onClick={() => handlePageChange('about')}>About</button></li>
          <li><button onClick={() => handlePageChange('contact')}>Contact</button></li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search products..." />
        <button className="search-button">Search</button>
      </div>
      <div className="user-icon" onClick={toggleDropdown}>
        <FaUser />
        <span className="cart-count">0</span> {/* Update this count dynamically */}
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <button onClick={() => handlePageChange('login')}>Login</button>
            <button onClick={() => handlePageChange('register')}>Register</button>
            <button onClick={() => handlePageChange('profile')}>Profile</button>
          </div>
        )}
      </div>
      <div className="cart-icon">
        <FaShoppingCart />
        <span className="cart-count">0</span> {/* Update this count dynamically */}
      </div>
    </header>
  );
}

export default Header;
