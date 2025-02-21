import React, { useContext } from "react";
import CountContext from "./CountContext";

const Counter = () => {
  const { count, increaseCount, decreaseCount } = useContext(CountContext);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Count: {count}</h2>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount} style={{ marginLeft: "10px" }}>
        Decrease
      </button>
    </div>
  );
};

export default Counter;
