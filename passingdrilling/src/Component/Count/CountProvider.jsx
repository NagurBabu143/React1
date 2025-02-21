import React, { useState } from "react";
import CountContext from "./CountContext";

const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount((prev) => prev + 1);
  const decreaseCount = () => setCount((prev) => prev - 1);

  return (
    <CountContext.Provider value={{ count, increaseCount, decreaseCount }}>
      {children}
    </CountContext.Provider>
  );
};

export default CountProvider;
