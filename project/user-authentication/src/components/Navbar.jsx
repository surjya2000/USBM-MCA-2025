/* eslint-disable no-unused-vars */
// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto text-white">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/login" className="mr-4">Login</Link>
        <Link to="/register" className="mr-4">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
