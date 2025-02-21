import { useState, useEffect } from "react";
import RecipeList from "../components/RecipeList/RecipeList";
import SearchBar from "../components/SearchBar/SearchBar";
import Filters from "../components/Filters/Filters";
import "./Recipe.css";

function Recipe() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOptions, setFilterOptions] = useState({
    vegetarian: "all",
    maxTime: 60,
  });

  useEffect(() => {
    fetch("/recipes.json")
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
        setFilteredRecipes(data);
      })
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  useEffect(() => {
    let filtered = recipes.filter((recipe) => {
      const matchesSearch =
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesVegetarian =
        filterOptions.vegetarian === "all" ||
        (filterOptions.vegetarian === "veg" && recipe.isVegetarian) ||
        (filterOptions.vegetarian === "non-veg" && !recipe.isVegetarian);

      const matchesTime = recipe.preparationTime <= filterOptions.maxTime;

      return matchesSearch && matchesVegetarian && matchesTime;
    });

    setFilteredRecipes(filtered);
  }, [searchQuery, filterOptions, recipes]);

  return (
    <div className="app">
      <h1>Recipe </h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Filters filterOptions={filterOptions} setFilterOptions={setFilterOptions} />
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
}

export default Recipe;
