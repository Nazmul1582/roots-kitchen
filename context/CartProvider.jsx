"use client";

import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
      const exist = prev.find((el) => el.id === item.id);
      if (exist) {
        return prev.map((el) =>
          el.id === item.id ? { ...el, qty: el.qty + 1 } : el,
        );
      }

      return [...prev, { ...item, qty: 1 }];
    });
  };

  const decrementQty = (id) => {
    setCart((prev) => {
      return prev.map((el) => (el.id === id ? { ...el, qty: el.qty - 1 } : el));
    });
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const value = {
    cart,
    addToCart,
    decrementQty,
    removeItem,
    clearCart,
  };
  return <CartContext value={value}>{children}</CartContext>;
}
