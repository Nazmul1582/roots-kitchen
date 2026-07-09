import Link from "next/link";
import Image from "next/image";
import getRecipes from "@/lib/getRecipes";

export default async function Recipes() {
  const data = await getRecipes();
  const recipes = data.foods.slice(0, 9);

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <Link
              key={recipe.id}
              href={`/recipes/${recipe.id}`}
              transitionTypes={["fade"]}
              className="bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={recipe.foodImg}
                  alt={recipe.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-3">
                <span className="text-xs font-semibold tracking-wider uppercase text-orange-700 bg-orange-50 px-2.5 py-1 rounded-md">
                  {recipe.category}
                </span>
                <h3 className="font-serif text-xl font-bold text-orange-950 leading-snug">
                  {recipe.title}
                </h3>
                <div className="flex items-center pt-2 border-t border-stone-100">
                  <h4 className="font-semibold">Price: {recipe.price} tk.</h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
