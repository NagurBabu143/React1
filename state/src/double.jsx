import React, { useState, useEffect } from "react";

function Double() {
  const [count, setCount] = useState(0);
  const [double, setDouble] = useState(0);

  useEffect(() => {
    setDouble(count * 2); 
  }, [count]); 

  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Double: {double}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Double;
