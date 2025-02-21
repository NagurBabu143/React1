import React, { useState, useContext, createContext, useEffect } from "react";

const TimerContext = createContext(); // Creating Context

const Timer = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => setTime((t) => t + 1), 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [running]);

  const startTimer = () => setRunning(true);
  const stopTimer = () => setRunning(false);
  const resetTimer = () => {
    setRunning(false);
    setTime(0);
  };

  return (
    <TimerContext.Provider value={{ time, startTimer, stopTimer, resetTimer }}>
      <TimerDisplay />
    </TimerContext.Provider>
  );
};

const TimerDisplay = () => {
  const { time, startTimer, stopTimer, resetTimer } = useContext(TimerContext);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Time: {time} seconds</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer} style={{ marginLeft: "10px" }}>
        Stop
      </button>
      <button onClick={resetTimer} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
};

export default Timer;
