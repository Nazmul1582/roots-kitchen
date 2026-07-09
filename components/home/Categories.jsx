import getCategories from "@/lib/getCategories";
import Image from "next/image";
import Link from "next/link";

export default async function Categories() {
  const data = await getCategories();
  const categories = data.categories;
  return (
    <section className="py-16 lg:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
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
            <Link
              href="/"
              key={cat.id}
              transitionTypes={["fade", "slide"]}
              className="group relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-md block"
            >
              <Image
                src={cat.categoryImg}
                alt={cat.categoryName}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="font-serif text-xl font-bold">
                  {cat.categoryName}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
