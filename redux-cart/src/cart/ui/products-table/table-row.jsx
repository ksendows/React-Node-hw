import React from 'react';
import Button from 'shared-ui/button';
import { Tr, Td, Quantity } from './styled';

const TableRow = ({ id, name, price, quantity, totalPrice, addToCart, reduceQuantityInCart, removeFromCart }) => (
  <Tr>
    <Td>{name}</Td>
    <Td>{price} USD</Td>
    <Td>
      <Button text="-" onClick={() => reduceQuantityInCart(id)}/>
      <Quantity>{quantity}</Quantity>
      <Button text="+" onClick={() => addToCart(id)}/>
    </Td>
    <Td>{totalPrice} USD</Td>
    <Td>
      <Button text="remove" onClick={() => removeFromCart(id)}/>
    </Td>
  </Tr>
);

export default TableRow;
