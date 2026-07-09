import Link from "next/link";
import Image from "next/image";
import getRecipes from "@/lib/getRecipes";
import RecipeCard from "../shared/RecipeCard";

export default async function Recipes() {
  const data = await getRecipes();
  const recipes = data.foods.slice(0, 12) || [];

  return (
    <section className="bg-linear-to-b from-orange-50 to-transparent py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-baseline mb-12 gap-4">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-orange-950">
              This Season&apos;s Harvest
            </h2>
            <p className="text-stone-500 mt-1">
              Savor the freshest time-tested stews and baking guides.
            </p>
          </div>
          <Link
            href="/recipes"
            transitionTypes={["slide"]}
            className="text-orange-700 font-semibold hover:text-orange-900 transition group flex items-center gap-1 text-sm"
          >
            View all recipes{" "}
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
}
