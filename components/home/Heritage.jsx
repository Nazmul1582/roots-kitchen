import Image from "next/image";
import Link from "next/link";

export default function Heritage() {
  const categories = [
    {
      id: 1,
      name: "Clay-Pot Cooking",
      count: "24 Recipes",
      slug: "clay-pot",
      img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      name: "Woodfire Hearth",
      count: "18 Recipes",
      slug: "woodfire",
      img: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 3,
      name: "Sun-Dried & Preserves",
      count: "12 Recipes",
      slug: "preserves",
      img: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&q=80&w=600",
    },
  ];
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

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <Link
              href="/"
              key={idx}
              transitionTypes={["fade", "slide"]}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-md block"
            >
              <Image
                src={cat.img}
                alt={cat.name}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="font-serif text-xl font-bold">{cat.name}</h3>
                <p className="text-stone-300 text-xs mt-1">{cat.count}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
