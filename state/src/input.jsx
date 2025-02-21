import React, { useState } from "react";

function Input() {
  const [name, setName] = useState(""); 

  const Change = (event) => {
    setName(event.target.value); 
  };

  return (
    <div>
      <input type="text" placeholder="Enter your name"  value={name} onChange={Change}/>
      <p>Your name is: {name}</p>
    </div>
  );
}

export default Input;
