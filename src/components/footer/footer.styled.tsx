import styled from 'styled-components';

export const FooterContainer = styled.div`
  background-color: #fff;
  width: 100%;
  height: 60px;
  -webkit-box-shadow: 0px -5px 20px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px -5px 20px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 0px -5px 20px -6px rgba(0, 0, 0, 0.75);
  margin: 0 auto;
`;

export const FooterNav = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
`;

export const FooterNavItem = styled.li`
  display: inline-block;
  margin: 0 10px;
  line-height: 60px;
`;
