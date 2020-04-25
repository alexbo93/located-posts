import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: #fff;
  padding: 0 30px;
  -webkit-box-shadow: 0px 5px 20px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 5px 20px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 5px 20px -6px rgba(0, 0, 0, 0.75);
  display: inline-block;
`;

export const HeaderLogoContainer = styled.div`
  float: left;

  span,
  img {
    vertical-align: middle;
    line-height: 60px;
  }

  img {
    margin-right: 15px;
  }
`;

export const HeaderNavContainer = styled.div`
  float: right;
`;

export const HeaderNav = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const HeaderNavItem = styled.li`
  display: inline-block;
  margin-right: 25px;
  line-height: 60px;

  color: #8c54a1;
`;
