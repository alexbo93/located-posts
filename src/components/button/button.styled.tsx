import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainButtonLink = styled(Link)`
  text-decoration: none;
  background-color: #1a918b;
  border: 1px solid #106964;
  color: #fff;
  border-radius: 5px;
  padding: 10px 30px;
  display: inline-block;
  margin-top: 20px;

  &:hover {
    background-color: #106964;
  }
`;

export const MainButton = styled(MainButtonLink)`
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
`;
