import { FlameKindling } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Our Stroy | RootsKitchen",
  description:
    "Discover the heritage of RootsKitchen. From traditional wood-fired techniques to sustainably sourced local ingredients, explore our journey of bringing authentic culinary art to your table.",
};

export default function StoryPage() {
  return (
    <div className="bg-[#FDFBF7] text-stone-800">
      {/* 1. Editorial Hero Section */}
      <section className="py-16 lg:py-24 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <span className="text-orange-700 uppercase tracking-widest text-xs font-bold bg-orange-100 px-3 py-1 rounded-full">
          The Manifesto
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-orange-950 leading-tight">
          Born from Smoke, Earth, <br />
          and Oral History.
        </h1>
        <p className="text-stone-600 text-lg sm:text-xl max-w-2xl mx-auto font-light italic">
          &quot;We noticed that as the world moved faster, our food lost its
          soul. RootsKitchen is an intentional step backward to find what we
          left behind.&quot;
        </p>
      </section>

      {/* 2. Big Panoramic Image Showcase */}
      <section className="container mx-auto px-4 lg:px-6 mb-20">
        <div className="relative h-[350px] sm:h-[500px] w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white">
          <Image
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1200"
            alt="Rustic farm to table meal preparation background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* 3. The Narrative Split Sections */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-24 pb-24">
        {/* Chapter 1 */}
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-4">
            <span className="text-orange-700 font-serif text-xl font-bold block">
              Chapter I
            </span>
            <h2 className="font-serif text-3xl text-orange-950">
              The Fast-Paced Forgetfulness
            </h2>
            <p className="text-stone-600 leading-relaxed">
              In modern cities, cooking has transformed into a transaction. We
              click a button on an app, a bag arrives at our door, and we
              consume food made by machines or assembly lines designed entirely
              for speed.
            </p>
            <p className="text-stone-600 leading-relaxed">
              But the recipes that sustained humanity for centuries weren&apos;t
              designed for speed. They were built around the seasons, around
              local soil, and around ancient elements—like the slow porous
              breathing of a clay pot or the gentle char of a seasoned cast-iron
              skillet over hardwood embers.
            </p>
          </div>
          <div className="md:col-span-5 relative h-80 rounded-2xl overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&q=80&w=600"
              alt="Rustic organic grains and farm-fresh ingredients on a textured village table"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Chapter 2 */}
        <div className="grid md:grid-cols-12 gap-12 items-center md:flex-row-reverse">
          <div className="md:col-span-5 order-last md:order-first relative h-80 rounded-2xl overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&q=80&w=600"
              alt="Traditional seasoning and crushing of spices using rustic stone and raw ingredients"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:col-span-7 space-y-4">
            <span className="text-orange-700 font-serif text-xl font-bold block">
              Chapter II
            </span>
            <h2 className="font-serif text-3xl text-orange-950">
              Sourcing Oral Legacy
            </h2>
            <p className="text-stone-600 leading-relaxed">
              RootsKitchen began as an exploration project to capture oral
              histories. We traveled across remote, quiet villages, sitting
              beside home hearths and open fires. We documented the instinctual
              cooking methods of regional experts—grandmothers, local farmers,
              and multi-generational cooks.
            </p>
            <p className="text-stone-600 leading-relaxed">
              These mentors don&apos;t measure ingredients in precise grams or
              milliliters; they cook by the color of the flame, the aroma
              filling the room, and the dynamic touch of raw ingredients. We
              built this digital platform to ensure their incredible, intuitive
              wisdom survives the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Core Values / Pillars Section */}
      <section className="bg-stone-50 py-20 border-t border-stone-200/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="font-serif text-3xl text-orange-950">
              Our Roots & Rituals
            </h2>
            <p className="text-stone-500 mt-2">
              The four pillars guiding how we collect and share knowledge.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-stone-100 text-center space-y-3">
              {/* <span className="text-3xl block">🪵</span> */}
              <FlameKindling className="block size-10 text-[#FFC83D] mx-auto" />
              <h3 className="font-serif text-xl font-bold text-orange-950">
                Woodfire Only
              </h3>
              <p className="text-stone-500 text-sm">
                Honoring recipes dependent on the dynamic flavor profile of
                charcoal and real open wood fires.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-stone-100 text-center space-y-3">
              <span className="text-3xl block">🏺</span>
              <h3 className="font-serif text-xl font-bold text-orange-950">
                Clay & Iron
              </h3>
              <p className="text-stone-500 text-sm">
                Championing natural cooking vessels over chemical coatings to
                naturally lock in nutrient compounds.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-stone-100 text-center space-y-3">
              <span className="text-3xl block">🌙</span>
              <h3 className="font-serif text-xl font-bold text-orange-950">
                Unrushed Time
              </h3>
              <p className="text-stone-500 text-sm">
                Rejecting the lifestyle of instant gratification. Our shortest
                recipes require deliberate presence.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-stone-100 text-center space-y-3">
              <span className="text-3xl block">🤝</span>
              <h3 className="font-serif text-xl font-bold text-orange-950">
                Community Sourced
              </h3>
              <p className="text-stone-500 text-sm">
                Directly attributing every single guide and recipe to the
                specific village artisan who kept it alive.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
