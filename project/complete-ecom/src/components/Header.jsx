/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
      <Nav className="ml-auto">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/login" className="nav-link">Login</Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
