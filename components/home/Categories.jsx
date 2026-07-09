import getCategories from "@/lib/getCategories";
import CategoryCard from "./CategoryCard";

export default async function Categories() {
  const data = await getCategories();
  const categories = data.categories || [];
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
