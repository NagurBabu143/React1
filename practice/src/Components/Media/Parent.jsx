import React from "react";
import Child from "./Child";

const Parent = () => {
  const media = [
    { 
        id: 1, 
        title: "Beautiful Landscape", 
        type: "image", 
        src: "/media/1.jpg" 
    },
    { 
        id: 2, 
        title: "City Lights", 
        type: "image", 
        src: "/media/2.jpg" 
    },
    { 
        id: 3, 
        title: "Mountain Peaks", 
        type: "image", 
        src: "/media/3.jpg" 
    },
    { 
        id: 4, 
        title: "Serene Forest", 
        type: "image", 
        src: "/media/4.jpg" 
    },
    { 
        id: 5, 
        title: "Ocean Horizon", 
        type: "image", 
        src: "/media/5.jpg" 
    },
    { 
        id: 6, 
        title: "Golden Fields", 
        type: "image", 
        src: "/media/6.jpg" 
    },
    { 
        id: 7, 
        title: "Urban Jungle", 
        type: "image", 
        src: "/media/7.jpg" 
    },
    { 
        id: 8, 
        title: "Snowy Mountains", 
        type: "image", 
        src: "/media/8.jpg" 
    },
    { 
        id: 9, 
        title: "Desert Dunes", 
        type: "image", 
        src: "/media/9.jpg" 
    },
    { 
        id: 10, 
        title: "Starry Night", 
        type: "image", 
        src: "/media/10.jpg"
    },
    { 
        id: 11, 
        title: "Tranquil River", 
        type: "image", 
        src: "/media/11.jpg" 
    },
    { 
        id: 12, 
        title: "Colorful Sunset", 
        type: "image", 
        src: "/media/12.jpg" 
    },
    { 
        id: 13, 
        title: "Calm Waves", 
        type: "video", 
        src: "/media/v1.mp4" 
    },
    { 
        id: 14, 
        title: "Sunset Bliss", 
        type: "video", 
        src: "/media/v2.mp4" 
    },
    { 
        id: 15, 
        title: "Waterfall Majesty", 
        type: "video", 
        src: "/media/v3.mp4" 
    },
    { 
        id: 16, 
        title: "Rolling Clouds", 
        type: "video", 
        src: "/media/v4.mp4" 
    },
  ];

  return (
    <div>
      <h1 className="gallery-title"> Gallery</h1>
      <Child media={media} />
    </div>
  );
};

export default Parent;
