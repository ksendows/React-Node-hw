import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
`;

const TotalAmount = ({ value }) => <Text>Total amount: {value} USD</Text>;

export default TotalAmount;
