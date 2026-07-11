"use client";

import { CartContext } from "@/context/CartContext";
import { use } from "react";

export default function Button({ item }) {
  const { cart, addToCart } = use(CartContext);

  return (
    <button
      onClick={() => addToCart(item)}
      disabled={cart.some((el) => el.id === item.id) ? true : false}
      className="bg-orange-800 text-white px-5 py-2 rounded-full hover:bg-orange-900 transition text-sm md:cursor-pointer disabled:bg-stone-300 disabled:cursor-not-allowed"
    >
      Add to cart
    </button>
  );
}
