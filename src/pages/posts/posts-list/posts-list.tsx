import React from 'react';
import { Post } from 'redux/types';

import PostsListItem from './posts-list-item';
import { PostsListModel } from '../types';

const PostsList: React.FC<PostsListModel> = ({ posts, onPostRemove, onPostUpdate }) => {
  const getList = () =>
    posts.map((post: Post) => (
      <PostsListItem
        key={post.id}
        post={post}
        onPostRemove={onPostRemove}
        onPostUpdate={onPostUpdate}
      />
    ));

  return <div data-testid='posts-list__container'>{getList()}</div>;
};

export default PostsList;
