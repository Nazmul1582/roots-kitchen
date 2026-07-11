"use client";

import { CartContext } from "@/context/CartProvider";
import { use } from "react";
import { Plus, Minus } from "lucide-react";

export default function Button({ item }) {
  const { cart, addToCart } = use(CartContext);

  const existingItem = cart?.find((cartItem) => cartItem.id === item.id);
  const quantity = existingItem?.qty ?? 0;

  if (quantity === 0) {
    return (
      <button
        onClick={() => addToCart(item)}
        className="bg-orange-800 text-white px-5 py-2 rounded-full hover:bg-orange-900 transition text-xs sm:text-sm font-medium md:cursor-pointer active:scale-95 shadow-sm"
      >
        Add to cart
      </button>
    );
  }

  return (
    <div className="flex items-center bg-orange-50 border border-orange-200 rounded-full overflow-hidden px-3 py-1 shadow-sm">
      <button
        className="p-1.5 text-orange-800 hover:bg-orange-100/60 rounded-full transition md:cursor-pointer active:scale-90"
        aria-label="Decrease quantity"
      >
        <Minus size={14} strokeWidth={2.5} />
      </button>

      <span className="px-3 text-sm font-mono font-bold text-orange-950 min-w-6 text-center select-none">
        {quantity}
      </span>

      <button
        onClick={() => addToCart(item)}
        className="p-1.5 text-orange-800 hover:bg-orange-100/60 rounded-full transition md:cursor-pointer active:scale-90"
        aria-label="Increase quantity"
      >
        <Plus size={14} strokeWidth={2.5} />
      </button>
    </div>
  );
}
