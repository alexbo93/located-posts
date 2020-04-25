import React from 'react';
import { PostsListItemModel } from 'pages/posts/types';

import {
  PostsListItemContainer,
  PostsIconContainer,
  PostsVariableInfoContainer,
  PostsDetailIconContainer,
} from './posts-list-item.styled';
import { Link } from 'react-router-dom';

const PostsListItem: React.FC<PostsListItemModel> = ({ post, onPostRemove, onPostUpdate }) => {
  return (
    <PostsListItemContainer data-testid='post-list__item-container'>
      <PostsIconContainer>
        <i className='fas fa-map-marker-alt'></i>
        <span data-testid='post-name'>{post.title}</span>
      </PostsIconContainer>
      <PostsVariableInfoContainer data-testid='post-lat'>
        <span>{post.lat || '-'}</span>
      </PostsVariableInfoContainer>
      <PostsVariableInfoContainer data-testid='post-long'>
        <span>{post.long || '-'}</span>
      </PostsVariableInfoContainer>
      <PostsVariableInfoContainer>
        <span data-testid='post-creation'>{post.created_at}</span>
      </PostsVariableInfoContainer>
      <PostsDetailIconContainer>
        <i className='fas fa-pen' onClick={() => onPostUpdate(post.id as number)}></i>
        <i className='fas fa-trash-alt' onClick={() => onPostRemove(post.id as number)}></i>
        <Link data-testid='post-link' to={`/post/${post.id}`}>
          <i className='fas fa-arrow-alt-circle-right'></i>
        </Link>
      </PostsDetailIconContainer>
    </PostsListItemContainer>
  );
};

export default PostsListItem;
