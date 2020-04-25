import React from 'react';

import { MainContainer } from 'components/container';
import Filters from './filters';
import PostsList from './posts-list';
import usePostsPage from './use-posts-page';

const PostsPage: React.FC<{}> = () => {
  const { getFilteredPosts, setSearchFilter, setOrderFilter, onPostRemove } = usePostsPage();

  return (
    <MainContainer>
      <h1>Posts List</h1>
      <Filters onSearchChange={setSearchFilter} onOrderChange={setOrderFilter} />
      <PostsList posts={getFilteredPosts()} onPostRemove={onPostRemove} onPostUpdate={() => {}} />
    </MainContainer>
  );
};

export default PostsPage;
