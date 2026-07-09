export default function RecipeDetailSkeleton() {
  return (
    <div className="container mx-auto px-4 lg:px-6 pt-8 space-y-6 pb-24 animate-pulse">
      {/* 1. Breadcrumb Tracker Skeleton */}
      <div className="h-4 w-48 bg-stone-200/80 rounded"></div>

      {/* 2. Main Editorial Split Grid Layout */}
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-6">
        {/* Left Column Canvas Framework */}
        <div className="lg:col-span-6 space-y-6">
          {/* Main Visual Skeleton */}
          <div className="h-[300px] sm:h-[450px] lg:h-[500px] w-full bg-stone-200 rounded-3xl border-4 border-white shadow-sm"></div>

          {/* Quick Info Box Banner Skeleton */}
          <div className="bg-stone-100 rounded-2xl p-5 border border-stone-200/40 flex items-center justify-between">
            <div className="space-y-2">
              <div className="h-3 w-20 bg-stone-200 rounded"></div>
              <div className="h-5 w-32 bg-stone-200 rounded"></div>
            </div>
            <div className="space-y-2 flex flex-col items-end">
              <div className="h-3 w-24 bg-stone-200 rounded"></div>
              <div className="h-4 w-16 bg-stone-200 rounded"></div>
            </div>
          </div>
        </div>

        {/* Right Column Content Framework */}
        <div className="lg:col-span-6 space-y-8">
          {/* Header Block Skeletons */}
          <div className="space-y-4">
            <div className="h-6 w-32 bg-stone-200 rounded-full"></div>
            <div className="space-y-2">
              <div className="h-10 w-3/4 bg-stone-200 rounded"></div>
              <div className="h-10 w-1/2 bg-stone-200 rounded"></div>
            </div>
            <div className="space-y-2 pt-2">
              <div className="h-4 w-full bg-stone-200 rounded"></div>
              <div className="h-4 w-5/6 bg-stone-200 rounded"></div>
            </div>
          </div>

          {/* Pricing & Button Strip Skeleton */}
          <div className="border-y border-stone-200/60 py-6 flex items-center justify-between">
            <div className="space-y-2">
              <div className="h-3 w-32 bg-stone-200 rounded"></div>
              <div className="h-8 w-24 bg-stone-200 rounded"></div>
            </div>
            <div className="h-11 w-40 bg-stone-200 rounded-full"></div>
          </div>

          {/* Core Ingredient Matrix Skeleton */}
          <div className="space-y-4">
            <div className="h-6 w-48 bg-stone-200 rounded"></div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="h-5 bg-stone-200 rounded w-5/6"></div>
              <div className="h-5 bg-stone-200 rounded w-4/5"></div>
              <div className="h-5 bg-stone-200 rounded w-full"></div>
              <div className="h-5 bg-stone-200 rounded w-3/4"></div>
            </div>
          </div>

          {/* Walkthrough Video Box Skeleton */}
          <div className="space-y-4 pt-4">
            <div className="h-6 w-40 bg-stone-200 rounded"></div>
            <div className="aspect-video w-full bg-stone-200 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
