import React from "react";
import "./Gallery.css";

const GrandChild = ({ item }) => (
  <div className="media-item">
    {item.type === "image" ? (
      <img src={item.src} alt={item.title} className="media-content" />
    ) : (
      <video controls className="media-content">
        <source src={item.src} type="video/mp4" />
        
      </video>
    )}
    <p className="media-title">{item.title}</p>
  </div>
);

export default GrandChild;
