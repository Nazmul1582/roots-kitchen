import getRecipes from "@/lib/getRecipes";
import RecipeCard from "./RecipeCard";

export default async function RecipesContent() {
  const data = await getRecipes();
  const recipes = data.foods.slice(0, 12) || [];
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
