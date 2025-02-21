import React, { useContext } from "react";
import { GalleryContext } from "./GalleryContext";
import GalleryItem from "./GalleryItem";
import "./Gallery.css";

const Gallery = ({ selectedCategory }) => {
    const { images } = useContext(GalleryContext);

    const filteredImages = selectedCategory === "All"
        ? images
        : images.filter((image) => image.category === selectedCategory);

    return (
        <div className="gallery-container">
            {filteredImages.length > 0 ? (
                filteredImages.map((image) => <GalleryItem key={image.id} image={image} />)
            ) : (
                <p>No images found for "{selectedCategory}"</p>
            )}
        </div>
    );
};

export default Gallery;
