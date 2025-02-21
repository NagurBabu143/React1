import React, { useState } from 'react';
import './Background.css'

function Background() {
  const [color, setColor] = useState('white');

  return (
    <div style={{ backgroundColor: color, height: '100vh', padding: '500px' }}>
      <select onChange={(e) => setColor(e.target.value)} value={color}>
        <option value="white">White</option>
        <option value="lightblue">Light Blue</option>
        <option value="lightgreen">Light Green</option>
        <option value="lightcoral">Light Coral</option>
      </select>
    </div>
  );
}

export default Background;
