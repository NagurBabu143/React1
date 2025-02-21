import React from 'react';

const Child = ({ players }) => {
  return (
    <ul className="roster-list">
      {players.map((player, index) => (
        <li key={index} className="roster-item">
          <span className="player-name">{player.name}</span>
          <span className="player-position">{player.position}</span>
          <span className="player-number">#{player.number}</span>
        </li>
      ))}
    </ul>
  );
};

export default Child;
