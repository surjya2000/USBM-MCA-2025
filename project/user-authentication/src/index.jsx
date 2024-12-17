/* eslint-disable no-unused-vars */
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import tailwind CSS
import App from './App'; // Import the main App component
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for routing
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider for global state

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
);
