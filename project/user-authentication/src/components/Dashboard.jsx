/* eslint-disable no-unused-vars */
// src/components/Dashboard.js
import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border shadow-lg rounded-md">
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <p>Welcome to your dashboard</p>
      <button
        onClick={logout}
        className="mt-4 p-3 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
