import React from "react";
import "./GrandChild.css";

const GrandChild = ({ year }) => {
  return (
    <div className="grandchild">
      <p>Publication Year: <span>{year}</span></p>
    </div>
  );
};

export default GrandChild;
