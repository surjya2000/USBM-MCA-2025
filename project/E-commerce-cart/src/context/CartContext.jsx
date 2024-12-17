/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/context/CartContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a Cart context
const CartContext = createContext();

// CartProvider component to provide cart state globally
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const itemIndex = updatedCart.findIndex((item) => item.id === product.id);
      if (itemIndex > -1) {
        updatedCart[itemIndex].quantity += 1;  // Increase quantity if item is already in cart
      } else {
        updatedCart.push({ ...product, quantity: 1 });
      }
      return updatedCart;
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Function to update item quantity
  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);
