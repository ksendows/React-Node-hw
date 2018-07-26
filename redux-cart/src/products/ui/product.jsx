import React from 'react';
import Button from 'shared-ui/button';
import styled from 'styled-components';

const Name = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  margin: 8px 0;
`;

const Price = styled.p`
  font-size: 1.1rem;
  margin: 16px 0;
`;

const Product = ({ imageUrl, name, price, addToCart }) => (
  <div>
    <img src={imageUrl} alt="name" />
    <Name>{name}</Name>
    <Price>{price} USD</Price>
    <Button onClick={addToCart} text="Add to cart" />
  </div>
);

export default Product;
