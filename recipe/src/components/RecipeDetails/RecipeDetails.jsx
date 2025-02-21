import "./RecipeDetails.css";

const RecipeDetails = ({ recipe, onClose }) => {
  
  if (!recipe) return null;

  return (
    <div className="recipe-details">
      <button className="close-btn" onClick={onClose}>✖</button>
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      
      <p><strong>Ingredients:</strong> {recipe.ingredients?.join(", ") || "No ingredients available"}</p>
      <p><strong>Preparation Time:</strong> {recipe.prepTime || "N/A"} min</p>
      <p><strong>Cooking Time:</strong> {recipe.cookTime || "N/A"} min</p>
      <p><strong>Total Time:</strong> {recipe.totalTime || "N/A"} min</p>
      <p><strong>Cuisine:</strong> {recipe.cuisine || "Unknown"}</p>
      <p><strong>Category:</strong> {recipe.isVegetarian ? "Vegetarian" : "Non-Vegetarian"}</p>
      <p><strong>Servings:</strong> {recipe.servings || "N/A"} people</p>
      <p><strong>Difficulty:</strong> {recipe.difficulty || "Unknown"}</p>
      <p><strong>Calories:</strong> {recipe.calories || "N/A"} kcal</p>

    
  
      <button className="back-btn" onClick={onClose}>Go Back</button>
    </div>
  );
};

export default RecipeDetails;
