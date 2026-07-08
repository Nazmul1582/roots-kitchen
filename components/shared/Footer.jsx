import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h3 className="font-serif text-2xl text-white font-bold">
            RootsKitchen
          </h3>
          <p className="text-sm text-stone-400">
            Bringing the time-honored techniques of village culinary heritage
            straight into your digital dashboard.
          </p>
        </div>
        <div>
          <h4 className="text-white text-sm font-semibold mb-4">Recipes</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-white transition">
                Clay Pot Specials
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Hearth-Baked Breads
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Traditional Pickles
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-sm font-semibold mb-4">Community</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-white transition">
                Our Contributing Cooks
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Share a Heritage Recipe
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Village Journals
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-white text-sm font-semibold">Join the Hearth</h4>
          <p className="text-xs text-stone-400">
            Receive seasonal village harvest recipes directly in your inbox.
          </p>
          <div className="flex bg-stone-800 p-1 rounded-md border border-stone-700">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent pl-2 text-xs text-white outline-none w-full"
            />
            <button className="bg-orange-700 text-white px-3 py-1.5 rounded text-xs hover:bg-orange-800">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-6 mt-12 pt-8 border-t border-stone-800 text-center text-xs text-stone-500">
        Handcrafted with Next.js & Love for the Land © 2026 RootsKitchen.
      </div>
    </footer>
  );
}
