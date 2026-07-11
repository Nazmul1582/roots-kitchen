"use client";

import { useState, useRef, useEffect, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { CartContext } from "@/context/CartProvider";
import { X, ShoppingBag, SquareMenu } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);
  const { cart } = use(CartContext);

  const totalItemsCount = cart.reduce((acc, curr) => acc + curr.qty, 0);
  const totalCartPrice = cart.reduce(
    (acc, curr) => acc + curr.qty * curr.price,
    0,
  );

  // Close the cart window instantly if the user clicks outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="border-b border-orange-100 bg-[#FDFBF7]/90 backdrop-blur-md sticky top-0 z-50 antialiased font-sans text-stone-800">
      <nav className="container mx-auto px-4 lg:px-6 h-20 flex items-center justify-between relative">
        {/* Mobile Hamburger Button Trigger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 -ml-2 text-stone-600 md:hidden hover:text-orange-800 transition focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? (
            <X className="size-7" />
          ) : (
            <SquareMenu size={28} />
          )}
        </button>

        <Link
          href="/"
          className="font-serif text-2xl font-bold tracking-tight text-orange-950"
        >
          Roots
          <span className="text-orange-700 font-sans font-light">Kitchen</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-stone-600">
          <Link href="/" className="hover:text-orange-700 transition">
            Home
          </Link>
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

        {/* Cart section */}
        <div className="relative flex items-center" ref={cartRef}>
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="flex items-center gap-2 text-orange-950 md:cursor-pointer relative"
          >
            <ShoppingBag />

            {totalItemsCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-orange-700 text-white font-mono text-[11px] font-bold h-5 w-5 rounded-full flex items-center justify-center shadow-sm animate-bounce-once">
                {totalItemsCount}
              </span>
            )}
          </button>

          {/* Cart floating dropdown overlay panel */}
          {isCartOpen && (
            <div className="absolute right-0 top-8 w-80 sm:w-96 bg-white border border-stone-200/80 rounded-2xl shadow-xl p-4 mt-2 z-50 space-y-4 transition-all duration-200 origin-top-right">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <h4 className="font-serif text-base font-bold text-orange-950">
                  Selected Recipes
                </h4>
                <span className="text-xs font-mono text-stone-400">
                  {cart.length} Items
                </span>
              </div>

              {cart.length > 0 ? (
                <div className="max-h-64 overflow-y-auto space-y-3 pr-1 scrollbar-thin">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-3 items-center bg-stone-50/50 hover:bg-orange-50/50 p-2.5 rounded-xl border border-stone-100"
                    >
                      <div className="relative h-14 w-14 rounded-lg overflow-hidden shrink-0 bg-stone-100">
                        <Image
                          src={item.foodImg}
                          alt={item.title}
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      </div>
                      <div className="grow min-w-0">
                        <Link
                          href={`/recipes/${item.id}`}
                          className="text-xs font-semibold text-stone-800 hover:underline"
                        >
                          {item.title}
                        </Link>
                        <p className="text-[10px] uppercase font-bold tracking-wider text-orange-700 mt-0.5">
                          {item.category}
                        </p>
                        <div className="flex items-center justify-between mt-1 text-xs text-stone-500">
                          <span>
                            Qty:{" "}
                            <strong className="text-stone-700 font-mono">
                              {item.qty}
                            </strong>
                          </span>
                          <span className="font-mono font-medium text-stone-800">
                            {item.price * item.qty} tk.
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 space-y-2">
                  <span className="text-2xl block">🍲</span>
                  <p className="text-xs text-stone-400">
                    Your kitchen basket is empty.
                  </p>
                </div>
              )}

              {cart.length > 0 && (
                <div className="border-t border-stone-100 pt-3 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-stone-500">Subtotal:</span>
                    <span className="font-mono font-bold text-orange-950 text-base">
                      {totalCartPrice} tk.
                    </span>
                  </div>
                  <Link
                    href="/checkout"
                    onClick={() => setIsCartOpen(false)}
                    className="block text-center w-full bg-orange-800 hover:bg-orange-900 text-white font-medium text-xs sm:text-sm py-2.5 rounded-xl shadow-md transition-all"
                  >
                    Proceed to Preparation Order
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Floating Navigation/Dropdown Overlay Panel */}
        {isMobileMenuOpen && (
          <div className="absolute left-0 top-20 w-full border-b border-orange-100 bg-[#FDFBF7]/95 px-4 py-4 space-y-2 font-medium text-sm flex flex-col shadow-lg z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-orange-700 p-2 rounded-lg hover:bg-orange-50/50 transition"
            >
              Home
            </Link>
            <Link
              href="/story"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-orange-700 p-2 rounded-lg hover:bg-orange-50/50 transition"
            >
              Our Story
            </Link>
            <Link
              href="/recipes"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-orange-700 p-2 rounded-lg hover:bg-orange-50/50 transition"
            >
              Recipes
            </Link>
            <Link
              href="/reviews"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-orange-700 p-2 rounded-lg hover:bg-orange-50/50 transition"
            >
              Reviews
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
