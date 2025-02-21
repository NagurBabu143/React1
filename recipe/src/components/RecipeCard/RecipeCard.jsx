import "./RecipeCard.css";

const RecipeCard = ({ recipe, onViewDetails }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <h3 className="recipe-name">{recipe.name}</h3>
      <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
      <p><strong>Time:</strong> {recipe.preparationTime} min</p>
      <p><strong>Type:</strong> {recipe.isVegetarian ? "Vegetarian" : "Non-Vegetarian"}</p>
      <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
      <button className="view-details-btn" onClick={() => onViewDetails(recipe)}>View Details</button>
    </div>
  );
};

export default RecipeCard;
