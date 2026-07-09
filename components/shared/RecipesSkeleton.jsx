export default function RecipesSkeleton() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {Array.from({ length: 12 }).map((_, idx) => (
        <article
          key={idx}
          className="bg-white rounded-2xl overflow-hidden border border-stone-200/60 shadow-sm flex flex-col h-[420px] animate-pulse"
        >
          {/* 1. Mock Thumbnail Canvas */}
          <div className="h-60 w-full bg-stone-200"></div>

          {/* 2. Mock Content Body Frame */}
          <div className="p-6 flex flex-col grow justify-between space-y-4">
            <div className="space-y-2">
              {/* Mock Tag/Category */}
              <div className="h-4 w-16 bg-stone-200 rounded"></div>

              {/* Mock Title Text Lines */}
              <div className="space-y-2 pt-1">
                <div className="h-5 w-full bg-stone-200 rounded"></div>
                <div className="h-5 w-2/3 bg-stone-200 rounded"></div>
              </div>
            </div>

            {/* 3. Mock Footer Strip (Price & Link elements) */}
            <div className="flex items-center justify-between pt-3 border-t border-stone-100">
              {/* Mock Price */}
              <div className="h-5 w-16 bg-stone-200 rounded"></div>
              {/* Mock Action Link */}
              <div className="h-4 w-24 bg-stone-200 rounded"></div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
