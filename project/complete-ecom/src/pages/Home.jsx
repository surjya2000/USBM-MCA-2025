/* eslint-disable no-unused-vars */
import React from 'react';
import { Carousel } from 'react-bootstrap';
import dummyProductImage from '../product.jpg';

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1200x400?text=E-commerce+Shop"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to Our E-Commerce Store</h3>
            <p>Find amazing products at great prices!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1200x400?text=Sale+Now+On"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Special Offers</h3>
            <p>Get up to 50% off on selected items.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h2>Featured Products</h2>
      <div className="product-list">
        <img src={dummyProductImage} alt="Product" />
        <img src={dummyProductImage} alt="Product" />
        <img src={dummyProductImage} alt="Product" />
        {/* Add more product images here */}
      </div>
    </div>
  );
};

export default Home;
