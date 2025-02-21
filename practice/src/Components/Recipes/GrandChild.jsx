import React from 'react';

function GrandChild({ cookingTime }) {
  return (
    <div className="grandchild">
      <p>Cooking Time: {cookingTime}</p>
    </div>
  );
}

export default GrandChild;
