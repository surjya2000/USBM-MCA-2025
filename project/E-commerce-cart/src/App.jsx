/* eslint-disable no-unused-vars */
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <header>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </header>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
