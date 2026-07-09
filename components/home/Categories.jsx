import CategoriesContent from "./CategoriesContent";
import { Suspense } from "react";
import CategoriesSkeleton from "./CategoriesSkeleton";

export default async function Categories() {
  return (
    <section className="py-16 lg:py-24 bg-stone-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-orange-950">
            Browse by Heritage
          </h2>
          <p className="text-stone-500 mt-2">
            Explore cooking methods molded by local land and ancient elements.
          </p>
        </div>
        <Suspense fallback={<CategoriesSkeleton />}>
          <CategoriesContent />
        </Suspense>
      </div>
    </section>
  );
}
