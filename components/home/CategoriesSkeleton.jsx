export default function CategoriesSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
      {[...Array(12)].map((_, idx) => (
        <div
          key={idx}
          className="relative h-48 md:h-64 rounded-2xl overflow-hidden bg-stone-200 animate-pulse border border-stone-200/40 shadow-sm flex flex-col justify-end p-6"
        >
          <div className="h-6 w-32 bg-stone-300/80 rounded"></div>
        </div>
      ))}
    </div>
  );
}
