/* eslint-disable no-unused-vars */
// src/components/Cart.js
import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (productId, event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    }
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, e)}
              min="1"
            />
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      <h3>
        Total: $
        {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
      </h3>
    </div>
  );
};

export default Cart;
