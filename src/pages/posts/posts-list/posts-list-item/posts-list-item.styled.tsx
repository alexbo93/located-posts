import styled from 'styled-components';

export const PostsListItemContainer = styled.div`
  height: 50px;
  width: 100%;
  padding: 0 20px;
  border: 1px solid #999;
  background-color: #ddd;
  border-radius: 5px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const PostsDetailIconContainer = styled.div`
  float: right;

  a {
    color: #8c54a1;
  }

  i {
    vertical-align: middle;
    line-height: 50px;
    cursor: pointer;
    margin-right: 7px;

    &:hover {
      font-size: 1.5rem;
    }
  }
`;

export const PostsIconContainer = styled.div`
  width: 20%;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  i {
    margin-right: 6px;
    color: #8c54a1;
  }

  i,
  span {
    vertical-align: middle;
    line-height: 50px;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const PostsVariableInfoContainer = styled.div`
  width: 20%;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  span {
    line-height: 50px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;
