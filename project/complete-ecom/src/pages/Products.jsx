/* eslint-disable no-unused-vars */
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import dummyProductImage from '../product.jpg';

const Products = () => {
  return (
    <div className="product-list">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={dummyProductImage} />
        <Card.Body>
          <Card.Title>Product Name</Card.Title>
          <Card.Text>Product description goes here.</Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
      {/* Repeat for more products */}
    </div>
  );
};

export default Products;
