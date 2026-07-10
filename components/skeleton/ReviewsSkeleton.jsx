import React from "react";

export default function ReviewsSkeleton() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {Array(12)
        .fill()
        .map((_, idx) => (
          <article
            key={idx}
            className="bg-white rounded-2xl p-6 border border-stone-200/60 shadow-sm flex flex-col justify-between space-y-6 h-[250px] w-full animate-pulse"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-stone-200 flex-shrink-0"></div>
                <div className="space-y-2">
                  <div className="h-4 w-32 bg-stone-200 rounded"></div>
                  <div className="h-3 w-24 bg-stone-200 rounded"></div>
                </div>
              </div>
              <div className="h-6 w-12 bg-stone-200 rounded-lg"></div>
            </div>

            <div className="space-y-2 flex-grow pt-2">
              <div className="h-4 w-full bg-stone-200 rounded"></div>
              <div className="h-4 w-full bg-stone-200 rounded"></div>
              <div className="h-4 w-4/5 bg-stone-200 rounded"></div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-stone-100">
              <div className="h-3 w-28 bg-stone-200 rounded"></div>
              <div className="h-7 w-14 bg-stone-200 rounded-full"></div>
            </div>
          </article>
        ))}
    </div>
  );
}
