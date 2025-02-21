import React from "react";
import "../styles/Favorites.css";

const Favorites = ({ favorites }) => {
  return (
    <div className="favorites">
      <h3 className="favorites-title">Favorites</h3>
      {favorites.length === 0 ? (
        <p className="no-favorites">No favorites selected</p>
      ) : (
        <ul className="favorites-list">
          {favorites.map((property) => (
            <li key={property.id} className="favorite-item">
              {property.title}
              <span className="favorite-price"> - Rs.{property.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
