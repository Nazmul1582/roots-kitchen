import RecipeCard from "@/components/shared/RecipeCard";
import getRecipes from "@/lib/getRecipes";
export default async function RecipesPage() {
  const data = await getRecipes();
  const recipes = data.foods || [];

  return (
    <div>
      <section className="bg-orange-50/40 py-12 border-b border-orange-100/40">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-3">
            <h1 className="font-serif text-4xl sm:text-5xl text-orange-950">
              The Recipe Archives
            </h1>
            <p className="text-stone-500 max-w-md mx-auto text-sm sm:text-base">
              Every dish carries a story, a village, and a generation of
              culinary preservation. Unhurried, real food profiles.
            </p>
          </div>
          {recipes.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 pb-16 pt-12">
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
          )}
        </div>
      </section>
    </div>
  );
}
