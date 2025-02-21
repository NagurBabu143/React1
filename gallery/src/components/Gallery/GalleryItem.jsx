import React from "react";
import "./GalleryItem.css";

const GalleryItem = ({ image }) => {
    return (
        <div className="gallery-item">
            <img src={image.src} alt={image.title} />
            <h3>{image.title}</h3>
            <p>{image.description}</p>
            <button className="view-more-btn">View More</button>
        </div>
    );
};

export default GalleryItem;
