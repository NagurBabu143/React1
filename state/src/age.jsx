import React, { useState } from "react";

function Age() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  return (
    <div>
      <input  type="text" placeholder="Enter your name" value={name}  onChange={(e) => setName(e.target.value)}/>
      <input type="number" placeholder="Enter your age" value={age} onChange={(e) => setAge(e.target.value)}/>
      <p>
        Hi {name}, you are {age} years old!
      </p>
    </div>
  );
}

export default Age;
