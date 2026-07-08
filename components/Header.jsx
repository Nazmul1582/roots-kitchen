import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="border-b border-orange-100 bg-[#FDFBF7]/80 backdrop-blur-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="font-serif text-2xl font-bold tracking-tight text-orange-950"
          >
            Roots
            <span className="text-orange-700 font-sans font-light">
              Kitchen
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-8 font-medium text-stone-600">
          <Link href="/story" className="hover:text-orange-700 transition">
            Our Story
          </Link>
          <Link href="/recipes" className="hover:text-orange-700 transition">
            Recipes
          </Link>
          <Link href="/reviews" className="hover:text-orange-700 transition">
            Reviews
          </Link>
        </div>
        <Link
          href="/recipes"
          className="hidden md:block bg-orange-800 text-white px-5 py-2.5 rounded-full font-medium hover:bg-orange-900 transition text-sm"
        >
          Find a Recipe
        </Link>
      </nav>
    </header>
  );
}
