import React from "react";
import "./Child.css";
import GrandChild from "../GrandChild/GrandChild";

const Child = ({ title, author, year }) => {
  return (
    <div className="child">
      <h2>{title}</h2>
      <p>
        Author:
        <span>{author}</span>
      </p>
      {/* <p>
        Publication Year:
        <span>{year}</span>
      </p> */}
      <GrandChild year={year} />
    </div>
  );
};

export default Child;
