import React from 'react';
import Child from './Child';
import './styles.css'; 

const Parent = () => {
  const players = [
    { name: 'Alice Johnson', position: 'Forward', number: 10 },
    { name: 'Bob Smith', position: 'Midfielder', number: 8 },
    { name: 'Charlie Brown', position: 'Defender', number: 5 },
    { name: 'Daisy Wilson', position: 'Goalkeeper', number: 1 },
  ];

  return (
    <div className="parent-container">
      <h1>Sports Team Roster</h1>
      <Child players={players} />
    </div>
  );
};

export default Parent;
