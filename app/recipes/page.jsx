import getRecipes from "@/lib/getRecipes";
import Image from "next/image";
import Link from "next/link";

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
                <article
                  key={recipe.id}
                  className="bg-white rounded-2xl overflow-hidden border border-stone-200/60 shadow-sm hover:shadow-md transition-all flex flex-col group"
                >
                  <div className="relative h-60 w-full overflow-hidden bg-stone-100">
                    <Image
                      src={recipe.foodImg}
                      alt={recipe.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-102 transition duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col grow justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold tracking-wider uppercase text-orange-700 bg-orange-50 px-2 py-0.5 rounded">
                        {recipe.category}
                      </span>
                      <h2 className="font-serif text-xl font-bold text-orange-950 leading-snug">
                        <Link href={`/recipes/${recipe.id}`}>
                          {recipe.title}
                        </Link>
                      </h2>
                    </div>
                    <div className="flex items-center justify-between text-xs pt-3 border-t border-stone-100 font-semibold">
                      <span className="text-base text-stone-800">
                        {recipe.price} tk.
                      </span>
                      <Link
                        href={`/recipes/${recipe.id}`}
                        className="text-orange-800 hover:underline flex items-center gap-0.5"
                      >
                        View Method →
                      </Link>
                    </div>
                  </div>
                </article>
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
