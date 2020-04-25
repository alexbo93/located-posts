import React from 'react';

import { FooterContainer, FooterNav, FooterNavItem } from './footer.styled';
import { NavLink } from '../nav-link';

const Footer: React.FC<{}> = () => (
  <FooterContainer data-testid="footer-container">
    <FooterNav>
      <FooterNavItem>
        <NavLink to="/">Home</NavLink>
      </FooterNavItem>
      |
      <FooterNavItem>
        <NavLink to="/post/new">Create New</NavLink>
      </FooterNavItem>
    </FooterNav>
  </FooterContainer>
);

export default Footer;
