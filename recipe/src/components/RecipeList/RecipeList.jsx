import { useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import RecipeDetails from "../RecipeDetails/RecipeDetails";
import "./RecipeList.css";

const RecipeList = ({ recipes }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div className="recipe-list">
      {selectedRecipe ? (
        <RecipeDetails recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
      ) : (
        recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} onViewDetails={setSelectedRecipe} />
        ))
      )}
    </div>
  );
};

export default RecipeList;
