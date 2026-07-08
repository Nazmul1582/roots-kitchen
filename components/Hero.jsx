import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-linear-to-b from-orange-50/50 to-transparent py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <span className="text-orange-700 uppercase tracking-widest text-xs font-bold bg-orange-100 px-3 py-1 rounded-full">
            Preserving Oral Culinary History
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-orange-950 leading-tight">
            Slow Food.
            <br />
            Deep Roots.
            <br />
            Authentic Flavors.
          </h1>
          <p className="text-stone-600 text-lg max-w-xl mx-auto lg:mx-0">
            Step away from the fast-paced modern world and rediscover the art of
            ancestral, wood-fired, and earth-cooked meals passed down through
            generations.
          </p>
          {/* Search container */}
          <div className="max-w-md mx-auto lg:mx-0 flex gap-2 p-2 bg-white rounded-full border border-stone-200 shadow-sm focus-within:border-orange-700 transition-all">
            <input
              type="text"
              placeholder="Search by ingredient (e.g., clay-pot)..."
              className="w-full pl-4 bg-transparent outline-none text-stone-800 text-sm"
            />
            <button className="bg-orange-700 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-orange-800 transition">
              Search
            </button>
          </div>
        </div>
        <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <Image
            src="https://images.unsplash.com/photo-1547058881-aa0edd92aab3?auto=format&fit=crop&q=80&w=800"
            alt="Rustic open kitchen with fresh organic vegetables"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
