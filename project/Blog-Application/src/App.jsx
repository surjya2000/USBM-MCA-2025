/* eslint-disable no-unused-vars */
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
