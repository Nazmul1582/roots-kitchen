export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FDFBF7]">
      <div className="relative flex items-center justify-center">
        {/* Outer rustic pulsing glow */}
        <div className="absolute h-16 w-16 animate-ping rounded-full bg-orange-200/50 duration-1000"></div>

        {/* Inner spinning clay pot/clay rim loader */}
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-stone-200 border-t-orange-700"></div>
      </div>

      {/* Earthy theme text */}
      <div className="mt-6 text-center space-y-1">
        <p className="font-serif text-lg font-medium text-orange-950 tracking-wide animate-pulse">
          Stoking the hearth...
        </p>
        <p className="text-xs text-stone-500 uppercase tracking-widest">
          Gathering village flavors
        </p>
      </div>
    </div>
  );
}
