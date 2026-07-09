import getRecipe from "@/lib/getRecipe";
import Image from "next/image";
import Link from "next/link";

export default async function RecipeDetail({ params }) {
  const { id } = await params;
  const data = await getRecipe(id);
  const recipe = data.details || {};
  // Extract YouTube ID safely for the video walkthrough frame if available
  const youtubeId = recipe.video ? recipe.video.split("v=")[1] : null;

  return (
    <section className="pt-8 pb-16 lg:pt-10 lg:pb-24">
      <div className="container mx-auto px-4 lg:px-6">
        {/* 1. Breadcrumb Tracker Links */}
        <nav className="text-xs font-medium tracking-wide uppercase text-stone-400 space-x-2">
          <Link href="/recipes" className="hover:text-orange-700 transition">
            Recipes
          </Link>
          <span>/</span>
          <span className="text-orange-800">{recipe.category}</span>
          <span>/</span>
          <span className="text-stone-600 normal-case">{recipe.title}</span>
        </nav>

        {/* 2. Main Editorial Showcase Split Grid Layout */}
        <div className="pt-6 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Fixed High-Resolution Image Canvas */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative h-[300px] sm:h-[450px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-stone-100">
              <Image
                src={recipe.foodImg}
                alt={recipe.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Quick Regional Origins Banner */}
            <div className="bg-orange-50/60 rounded-2xl p-5 border border-orange-100/50 flex items-center justify-between text-sm text-stone-600">
              <div>
                <span className="block text-[10px] font-bold tracking-widest text-orange-700 uppercase">
                  Tradition & Origin
                </span>
                <span className="font-serif text-base font-semibold text-orange-950 mt-0.5 block">
                  {recipe.area} Culinary Style
                </span>
              </div>
              <div className="text-right">
                <span className="block text-[10px] font-bold tracking-widest text-stone-400 uppercase">
                  Archival Reference
                </span>
                <span className="font-mono text-stone-700 mt-0.5 block">
                  #REC-{recipe.id}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Recipe Profile Information & Blueprint Details */}
          <div className="lg:col-span-6 space-y-8">
            {/* Meta Classification Group */}
            <div className="space-y-4">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-800 bg-orange-100/70 px-3 py-1 rounded-full">
                🌿 {recipe.category} Collective
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl text-orange-950 leading-tight">
                {recipe.title}
              </h1>
              <p className="text-stone-500 font-light text-sm sm:text-base leading-relaxed">
                A meticulously prepared plant-based masterwork honoring slow
                baking dynamics. Handcrafted and calculated carefully with
                pristine, unrefined earth ingredients.
              </p>
            </div>

            {/* Pricing & Valuation Tag */}
            <div className="border-y border-stone-200/60 py-5 flex items-center justify-between">
              <div>
                <span className="text-xs text-stone-400 uppercase tracking-wider block">
                  Pantry Cost Estimation
                </span>
                <span className="text-3xl font-serif font-bold text-orange-950 mt-1 block">
                  ${(recipe.price / 100).toFixed(2)}{" "}
                  <span className="text-sm font-sans text-stone-500 font-light">
                    / whole batch
                  </span>
                </span>
              </div>
              <button className="bg-orange-800 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-900 shadow-md transition-all text-sm">
                Print Archival Guide
              </button>
            </div>

            {/* Structured Mock Requirements (Placeholder to populate the clean layout) */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl text-orange-950">
                Core Heritage Components
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm text-stone-600">
                <li className="flex items-center gap-2">
                  🔹 Unbleached Pastry Grain Flour
                </li>
                <li className="flex items-center gap-2">
                  🔹 Organic Stone-Ground Cacao
                </li>
                <li className="flex items-center gap-2">
                  🔹 Raw Pure Maple Sap Sweetener
                </li>
                <li className="flex items-center gap-2">
                  🔹 Coconut Meat Oil Extracts
                </li>
              </ul>
            </div>

            {/* 3. Fluid Embedded Walkthrough (If a video property is active) */}
            {youtubeId && (
              <div className="space-y-4 pt-4">
                <h3 className="font-serif text-xl text-orange-950 flex items-center gap-2">
                  <span>📹</span> Hearth Walkthrough
                </h3>
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-md border border-stone-200">
                  <iframe
                    src={`https://www.youtube.com/embed/${youtubeId}`}
                    title={`${recipe.title} Video Walkthrough`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full border-0"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
