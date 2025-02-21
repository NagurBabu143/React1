import React, { useState, useEffect } from "react";

function Fetch() {
  const [message, setMessage] = useState("Loading..."); 

  useEffect(() => {
    
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json()) 
      .then((data) => setMessage(data.title)) 
      .catch(() => setMessage("Failed to fetch data")); 
  }, []); 

  return (
    <div>
      <h2>Message:</h2>
      <p>{message}</p> 
    </div>
  );
}

export default Fetch;
