import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavLink = styled(Link)`
  text-decoration: none;

  i {
    color: #8c54a1;
    margin-left: 10px;
  }

  &:hover {
    font-weight: bold;
  }

  i,
  &:active,
  &:visited {
    color: #8c54a1;
  }

  @media (max-width: 600px) {
    span {
      display: none;
    }
  }
`;
