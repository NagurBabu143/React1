
import React from "react";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#listings">Listings</a></li>
        <li><a href="#aboutus">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#properties">Properties</a></li>
        <li><a href="#contact">Contact</a></li>
        {/* <li><a href="#help">Help</a></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
