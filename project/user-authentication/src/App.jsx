/* eslint-disable no-unused-vars */
// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1 className="text-center mt-10">Home Page</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <PrivateRoute path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
