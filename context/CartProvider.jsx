"use client";

import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const exist = cart.find((el) => el.id === item.id);
      if (exist) {
        return prevCart.map((el) =>
          el.id === exist.id ? { ...el, qty: el.qty + 1 } : el,
        );
      }
      return [...prevCart, { ...item, qty: 1 }];
    });
  };
  const value = {
    cart,
    addToCart,
  };
  return <CartContext value={value}>{children}</CartContext>;
}
