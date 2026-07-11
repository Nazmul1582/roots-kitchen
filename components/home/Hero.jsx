import Image from "next/image";
import Search from "../Search";

export default function Hero() {
  return (
    <section className="relative bg-linear-to-b from-orange-50/50 to-transparent py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-6 grid lg:grid-cols-2 gap-12 items-center">
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
          <Search customClass="lg:mx-0" />
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
