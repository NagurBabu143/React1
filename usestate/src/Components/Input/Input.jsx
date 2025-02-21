import React, { useState } from 'react';
import './Input.css'
function Input() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}  placeholder="Type something..." />
      <p>You typed: {inputValue}</p>
    </div>
  );
}

export default Input;
