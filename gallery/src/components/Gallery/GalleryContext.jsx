import { createContext, useState } from "react";


export const GalleryContext = createContext();


export const GalleryProvider = ({ children }) => {
    const [images] = useState([
        { id: 1, src: "/images/image1.jpg", title: "Beautiful Sunset", description: "A breathtaking sunset over the ocean." },
        { id: 2, src: "/images/image2.jpg", title: "Mountain View", description: "A scenic view of mountains covered in mist." },
        { id: 3, src: "/images/image3.jpg", title: "City Lights", description: "A dazzling city skyline at night." },
        { id: 4, src: "/images/image4.jpg", title: "Beach Vibes", description: "Golden sand and clear blue waves crashing on shore." },
        { id: 5, src: "/images/image5.jpg", title: "Forest Path", description: "A peaceful trail through a dense green forest." },
        { id: 6, src: "/images/image6.jpg", title: "Snowy Peaks", description: "Snow-covered mountain peaks under a clear sky." },
        { id: 7, src: "/images/image7.jpg", title: "Desert Dunes", description: "Vast desert dunes with a stunning sunset." },
        { id: 8, src: "/images/image8.jpg", title: "Lush Greenery", description: "A beautiful garden filled with colorful flowers." },
        { id: 9, src: "/images/image9.jpg", title: "Waterfall Paradise", description: "A majestic waterfall in the middle of a forest." },
        { id: 10, src: "/images/image10.jpg", title: "Starry Night Sky", description: "A clear night sky filled with sparkling stars." }
    ]);

    return (
        <GalleryContext.Provider value={{ images }}>
            {children}
        </GalleryContext.Provider>
    );
};
