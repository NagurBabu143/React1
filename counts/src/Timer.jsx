import React, { useState, useEffect } from "react";
import "./timer.css";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [Running, setRunning] = useState(true);

  useEffect(() => {
    let intervalId;
    if (Running) {
      intervalId = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [Running]);

  useEffect(() => {
    const h = Math.floor(time / 3600);
    const m = Math.floor((time % 3600) / 60);
    const s = time % 60;
    document.title = `Timer: ${h}:${m}:${s}`;
  }, [time]); 

  const formatTime = () => {
    const h = Math.floor(time / 3600);
    const m = Math.floor((time % 3600) / 60);
    const s = time % 60;
    return [h, m, s];
  };

  const [h, m, s] = formatTime();

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>{h}:{m}:{s}</h1>
      {Running ? (
        <button onClick={() => setRunning(false)}>Pause</button>
      ) : (
        <button onClick={() => setRunning(true)}>Resume</button>
      )}
      <button onClick={() => { setTime(0); setRunning(false); }}>
        Reset
      </button>
    </div>
  );
};

export default Timer;
