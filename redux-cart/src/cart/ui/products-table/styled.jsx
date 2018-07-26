import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  text-align: center;
`;

export const Tr = styled.tr`
  border-bottom: 1px solid #212121;

  &:last-child {
    border-bottom: 0;
  }
`;

export const Th = styled.th`
  padding: 8px 32px;
  font-size: 1.3rem;
  font-weight: 500;
  text-transform: capitalize;
`;

export const Td = styled.td`
  padding: 0.5rem;
  font-size: 1rem;
`;

export const Quantity = styled.td`
  display: inline;
  padding: 5px;
  line-height: 42px;
`;
