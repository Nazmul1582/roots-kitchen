import React from "react";

export default function PhilosophyQuote() {
  return (
    <section className="bg-amber-100/50 py-16 text-center border-y border-amber-100">
      <div className="max-w-3xl mx-auto px-4">
        <span className="text-3xl">🌾</span>
        <blockquote className="font-serif text-2xl md:text-3xl text-orange-950 italic mt-4">
          &quot;Real flavor isn&apos;t made in a rush. It is born from seasoned
          cast iron, clay pots, and patience.&quot;
        </blockquote>
        <p className="text-stone-500 mt-4 text-xs font-bold uppercase tracking-wider">
          — The Roots Philosophy
        </p>
      </div>
    </section>
  );
}
