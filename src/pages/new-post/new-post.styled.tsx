import styled from 'styled-components';

export const PostNotFound = styled.div`
  text-align: center;
  font-weight: bold;
  margin-top: 70px;
`;

export const BackLinkContainer = styled.div`
  width: 50%;
  margin-bottom: 10px;
  margin: 0 auto;

  @media (max-width: 768px) and (min-width: 601px) {
    width: 80%;
  }

  @media (max-width: 600px) {
    width: 95%;
  }
`;
