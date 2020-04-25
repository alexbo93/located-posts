import React from 'react';

import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderNav,
  HeaderNavItem,
  HeaderNavContainer,
} from './header.styled';
import { NavLink } from '../nav-link';

const Header: React.FC<{}> = () => (
  <HeaderContainer data-testid="header-container">
    <HeaderLogoContainer>
      <img
        src="/logo-transparent.png"
        alt="Logo"
        height="50"
        width="50"
      ></img>
    </HeaderLogoContainer>
    <HeaderNavContainer>
      <HeaderNav>
        <HeaderNavItem>
          <NavLink to="/">
            <span>Home</span>
            <i className="fas fa-home"></i>
          </NavLink>
        </HeaderNavItem>
        <HeaderNavItem>
          <NavLink to="/post/new">
            <span>List</span>
            <i className="fas fa-plus"></i>
          </NavLink>
        </HeaderNavItem>
      </HeaderNav>
    </HeaderNavContainer>
  </HeaderContainer>
);
export default Header;
