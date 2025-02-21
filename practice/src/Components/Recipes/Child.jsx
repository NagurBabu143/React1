import React from 'react';
import GrandChild from './GrandChild';

function Child({ recipe }) {
  return (
    <div className="child">
      <h2>{recipe.name}</h2>
      <p>Ingredients: {recipe.ingredients}</p>
      <GrandChild cookingTime={recipe.cookingTime} />
    </div>
  );
}

export default Child;
