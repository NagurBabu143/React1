import React from 'react';
import Child from './Child';

const recipes = [
  { name: 'Spaghetti Carbonara', ingredients: 'Spaghetti, Eggs, Bacon, Parmesan', cookingTime: '20 minutes' },
  { name: 'Chicken Curry', ingredients: 'Chicken, Curry Powder, Coconut Milk, Onion', cookingTime: '40 minutes' },
  { name: 'Vegetable Stir Fry', ingredients: 'Broccoli, Carrots, Bell Peppers, Soy Sauce', cookingTime: '15 minutes' },
];

function Parent() {
  return (
    <div className="parent">
      {recipes.map((recipe, id) => (
        <Child key={id} recipe={recipe} />
      ))}
    </div>
  );
}

export default Parent;
