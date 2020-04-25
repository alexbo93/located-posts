import styled from 'styled-components';

export const PostsListLabelsContainer = styled.div`
  display: inline-block;
  width: 100%;
  margin-bottom: 20px;
  padding: 0 20px;
  font-weight: bold;
`;

export const PostLabel = styled.div`
  display: inline-block;
  width: 20%;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const PostNameLabel = styled(PostLabel)`
  @media (max-width: 600px) {
    width: 80%;
  }
`;
