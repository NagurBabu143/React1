import React from "react";
import GrandChild from "./GrandChild";
import "./Gallery.css";

const Child = ({ media }) => {
  return (
    <div className="gallery-container">
      {media.map((item) => (
        <GrandChild key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Child;
