import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  padding: 0 30px;
  margin-bottom: 50px;
  min-height: 95vh;
`;

export const ContentContainer = styled.div`
  width: 50%;
  margin: 30px auto 50px;
  border: 1px solid #999;
  border-radius: 5px;
  background-color: #ddd;
  padding: 30px;
  min-height: 500px;

  @media (max-width: 768px) and (min-width: 601px) {
    width: 80%;
    padding: 15px;
  }

  @media (max-width: 600px) {
    width: 95%;
    padding: 15px;
  }
`;

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
