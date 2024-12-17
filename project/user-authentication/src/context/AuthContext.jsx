/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
// src/context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Create the Auth context
const AuthContext = createContext();

// Auth provider to manage global authentication state
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const login = (username, password) => {
    // Simulate an API call to authenticate the user
    if (username === 'user' && password === 'password') {
      setIsAuthenticated(true);
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the auth context
export const useAuth = () => useContext(AuthContext);
