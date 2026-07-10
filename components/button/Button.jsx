"use client";

import { useState } from "react";

export default function Button() {
  const [isCart, setIsCart] = useState(false);
  return (
    <button
      onClick={() => setIsCart(true)}
      disabled={isCart}
      className="bg-orange-800 text-white px-5 py-2 rounded-full hover:bg-orange-900 transition text-sm md:cursor-pointer disabled:bg-stone-300 disabled:cursor-not-allowed"
    >
      Add to cart
    </button>
  );
}
