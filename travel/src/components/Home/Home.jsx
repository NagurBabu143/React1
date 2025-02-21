import React, { useState, useEffect } from "react";
import './Home.css'; 

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { src: "/images/welcome.jpg", alt: "A welcoming travel scene" },
    { src: "/images/image2.jpg", alt: "Another beautiful travel scene" },
    { src: "/images/image3.jpg", alt: "A stunning destination" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div id="Home" className="section home-container">
      <div className="content">
        <h2>Welcome to Travel Destination Explorer</h2>
        <p>Your adventure begins here! Discover the most beautiful and breathtaking destinations around the world.</p>
      </div>
      <div className="image-container">
        <img
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
          className="hero-image"
        />
      </div>
    </div>
  );
};

export default Home;
