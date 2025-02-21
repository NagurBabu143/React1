import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ setSelectedCategory }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const categories = [
        "All", 
        "Nature", 
        "City", 
        "Beach", 
        "Mountains", 
        "Animals", 
        "Architecture", 
        "Wildlife", 
        "Adventure", 
        "Travel"
    ];

    const filteredCategories = categories.filter((category) =>
        category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <aside className="sidebar">
            <h2>Categories</h2>
            <input 
                type="text" 
                placeholder="Search categories..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar"
            />
            <ul>
                {filteredCategories.map((category) => (
                    <li 
                        key={category} 
                        onClick={() => setSelectedCategory(category)}
                        className="category-item"
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
