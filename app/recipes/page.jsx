import RecipesContent from "@/components/recipe/RecipesContent";
import RecipesSkeleton from "@/components/skeleton/RecipesSkeleton";
import { Suspense } from "react";
export default async function RecipesPage() {
  return (
    <div>
      <section className="bg-orange-50/40 py-12 lg:pb-16 border-b border-orange-100/40">
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
          <div className="pt-12">
            <Suspense fallback={<RecipesSkeleton />}>
              <RecipesContent />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  );
}
