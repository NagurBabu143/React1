import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import FilterSection from "./FilterSection";
import SearchBar from "./SearchBar";
import Favorites from "./Favorites";
import "../styles/PropertyList.css";

const propertiesData = [
    { id: 1, title: "Luxury Villa", price: 500000, location: "New York", size: "3000 sqft", type: "For Sale", bedrooms: 4, bathrooms: 3 },
    { id: 2, title: "Modern Apartment", price: 200000, location: "Los Angeles", size: "1200 sqft", type: "For Rent", bedrooms: 2, bathrooms: 2 },
    { id: 3, title: "Cozy House", price: 350000, location: "Chicago", size: "2500 sqft", type: "For Sale", bedrooms: 3, bathrooms: 2 },
    { id: 4, title: "Spacious Townhouse", price: 450000, location: "San Francisco", size: "2000 sqft", type: "For Sale", bedrooms: 3, bathrooms: 2 },
    { id: 5, title: "Charming Cottage", price: 300000, location: "Austin", size: "1500 sqft", type: "For Rent", bedrooms: 2, bathrooms: 1 },
    { id: 6, title: "Contemporary Loft", price: 600000, location: "Seattle", size: "1800 sqft", type: "For Sale", bedrooms: 2, bathrooms: 2 },
    { id: 7, title: "Beachfront Condo", price: 750000, location: "Miami", size: "1300 sqft", type: "For Rent", bedrooms: 2, bathrooms: 2 },
    { id: 8, title: "Elegant Mansion", price: 1200000, location: "Beverly Hills", size: "5000 sqft", type: "For Sale", bedrooms: 5, bathrooms: 6 },
    { id: 9, title: "Rustic Farmhouse", price: 400000, location: "Nashville", size: "2700 sqft", type: "For Sale", bedrooms: 4, bathrooms: 3 },
    { id: 10, title: "Stylish Studio", price: 150000, location: "Denver", size: "800 sqft", type: "For Rent", bedrooms: 1, bathrooms: 1 },
    { id: 11, title: "Urban Apartment", price: 320000, location: "Boston", size: "1000 sqft", type: "For Sale", bedrooms: 2, bathrooms: 2 },
    { id: 12, title: "Modern Bungalow", price: 420000, location: "Portland", size: "1600 sqft", type: "For Rent", bedrooms: 3, bathrooms: 2 },
    { id: 13, title: "Luxury Penthouse", price: 900000, location: "New York", size: "2500 sqft", type: "For Sale", bedrooms: 4, bathrooms: 4 },
    { id: 14, title: "Family-Friendly Home", price: 360000, location: "Phoenix", size: "2200 sqft", type: "For Sale", bedrooms: 4, bathrooms: 3 },
    { id: 15, title: "Downtown Apartment", price: 280000, location: "Chicago", size: "950 sqft", type: "For Rent", bedrooms: 2, bathrooms: 1 },
    { id: 16, title: "Chic Loft", price: 450000, location: "San Diego", size: "1700 sqft", type: "For Sale", bedrooms: 3, bathrooms: 2 },
    { id: 17, title: "Luxury Beach House", price: 850000, location: "Malibu", size: "4000 sqft", type: "For Sale", bedrooms: 5, bathrooms: 4 },
    { id: 18, title: "Family Cottage", price: 330000, location: "Lake Tahoe", size: "1800 sqft", type: "For Rent", bedrooms: 3, bathrooms: 2 },
    { id: 19, title: "Historic Brownstone", price: 600000, location: "Brooklyn", size: "2800 sqft", type: "For Sale", bedrooms: 4, bathrooms: 3 },
    { id: 20, title: "Modern Duplex", price: 410000, location: "Austin", size: "2000 sqft", type: "For Sale", bedrooms: 3, bathrooms: 2 },
    { id: 21, title: "Urban Penthouse", price: 950000, location: "Chicago", size: "3000 sqft", type: "For Sale", bedrooms: 4, bathrooms: 3 },
    { id: 22, title: "Scenic Cottage", price: 370000, location: "Vermont", size: "1500 sqft", type: "For Rent", bedrooms: 2, bathrooms: 1 },
    { id: 23, title: "Elegant Villa", price: 1_500_000, location: "Miami Beach", size: "4500 sqft", type: "For Sale", bedrooms: 5, bathrooms: 5 },
    { id: 24, title: "Mountain Retreat", price: 800000, location: "Aspen", size: "3500 sqft", type: "For Sale", bedrooms: 4, bathrooms: 3 },
    { id: 25, title: "Contemporary Family Home", price: 490000, location: "San Jose", size: "2200 sqft", type: "For Sale", bedrooms: 4, bathrooms: 3 },
];

const PropertyList = () => {
    const [filter, setFilter] = useState("");
    const [typeFilter, setTypeFilter] = useState("all");
    const [favorites, setFavorites] = useState([]);
    const [showFavorites, setShowFavorites] = useState(false);

    const toggleFavorite = (property) => {
        setFavorites((prev) =>
            prev.includes(property) ? prev.filter((fav) => fav !== property) : [...prev, property]
        );
    };

    const filteredProperties = propertiesData.filter((property) => {
        const matchesTitle = property.title.toLowerCase().includes(filter.toLowerCase());
        const matchesType = typeFilter === "all" || property.type === typeFilter;

        return matchesTitle && matchesType;
    });

    const toggleShowFavorites = () => {
        setShowFavorites((prev) => !prev);
    };

    return (
        <div className="property-list">
            <h2 className="list-title">Real Estate Listings</h2>
            <SearchBar setFilter={setFilter} />
            <FilterSection setTypeFilter={setTypeFilter} />
            <button className="toggle-favorites" onClick={toggleShowFavorites}>
                {showFavorites ? "Hide Favorites" : "Show Favorites"}
            </button>
            {showFavorites && <Favorites favorites={favorites} />}
            <div className="properties">
                {filteredProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} toggleFavorite={toggleFavorite} />
                ))}
            </div>
        </div>
    );
};

export default PropertyList;