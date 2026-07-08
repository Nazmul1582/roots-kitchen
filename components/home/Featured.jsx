import Link from "next/link";
import Image from "next/image";

export default function Featured() {
  const featuredRecipes = [
    {
      id: 1,
      title: "Grandma's Smoked Tomato Chutney",
      tag: "🌾 Farm Fresh",
      time: "45 mins",
      slug: "smoked-tomato-chutney",
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 2,
      title: "Slow-Simmered Clay Pot Lentils",
      tag: "⏳ 3-Hour Simmer",
      time: "180 mins",
      slug: "clay-pot-lentils",
      img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 3,
      title: "Woodfired Cast Iron Sourdough",
      tag: "🔥 Fire Baked",
      time: "60 mins",
      slug: "woodfired-sourdough",
      img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=500",
    },
  ];
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRecipes.map((recipe) => (
            <article
              key={recipe.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-md transition"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={recipe.img}
                  alt={recipe.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-3">
                <span className="text-xs font-semibold tracking-wider uppercase text-orange-700 bg-orange-50 px-2.5 py-1 rounded-md">
                  {recipe.tag}
                </span>
                <h3 className="font-serif text-xl font-bold text-orange-950 leading-snug">
                  <Link
                    href={`/recipes/${recipe.slug}`}
                    transitionTypes={["fade"]}
                  >
                    {recipe.title}
                  </Link>
                </h3>
                <div className="flex items-center text-xs text-stone-500 pt-2 border-t border-stone-100">
                  <span>🕒 Cook Time: {recipe.time}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
