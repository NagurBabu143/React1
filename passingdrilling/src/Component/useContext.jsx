import React, { useState, useContext, createContext } from "react";

const CounterContext = createContext();

const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <Counter />
    </CounterContext.Provider>
  );
};

const Counter = () => {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>
        Decrease
      </button>
      <button onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
};

export default Count;
