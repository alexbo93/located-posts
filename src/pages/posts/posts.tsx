import React from 'react';
import { MainContainer } from 'components/container';

import Filters from './filters';
import { useSelector } from 'react-redux';
import { selectPosts } from 'redux/posts';
import PostsList from './posts-list';

const Posts: React.FC<{}> = () => {
  const posts = useSelector(selectPosts);

  return (
    <MainContainer>
      <h1>POSTS LIST PAGE</h1>
      <Filters />
      <PostsList posts={posts} onPostRemove={() => {}} onPostUpdate={() => {}} />
    </MainContainer>
  );
};

export default Posts;
