import getRecipes from "@/lib/getRecipes";
import RecipeCard from "./RecipeCard";

export default async function RecipesContent({ limit }) {
  const data = await getRecipes();
  const recipes = limit ? data.foods?.slice(0, limit) || [] : data.foods || [];
  return recipes.length ? (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  ) : (
    <div className="text-center py-20 border-2 border-dashed border-stone-200 rounded-3xl max-w-md mx-auto p-6 space-y-2">
      <span className="text-3xl">🍲</span>
      <h3 className="font-serif text-lg font-bold text-orange-950">
        No heritage recipes found
      </h3>
      <p className="text-xs text-stone-500">
        We haven&apos;t cataloged a recipe matching those terms yet.
      </p>
    </div>
  );
}
