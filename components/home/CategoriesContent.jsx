import getCategories from "@/lib/getCategories";
import CategoryCard from "./CategoryCard";

export default async function CategoriesContent() {
  const data = await getCategories();
  const categories = data.categories || [];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
      {categories.map((cat) => (
        <CategoryCard key={cat.id} category={cat} />
      ))}
    </div>
  );
}
