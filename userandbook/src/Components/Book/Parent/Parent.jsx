import React from "react";
import "./Parent.css";
import Child from "../Child/Child";

const Parent = () => {
  const books = [
    { 
      title: "To Kill a Mockingbird", 
      author: "Harper Lee", 
      year: 1960 
    },
    { 
      title: "BoB", 
      author: "George Orwell", 
      year: 1954 
    },
    { 
      title: "Moby-Dick", 
      author: "Herman Melville", 
      year: 1851 
    },
  ];

  return (
    <div className="parent">
      <h1>Book List</h1>
      {books.map((book, index) => (
        <Child key={index} title={book.title} author={book.author} year={book.year} />
      ))}
    </div>
  );
};

export default Parent;
