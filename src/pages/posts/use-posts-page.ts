import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectPosts } from '../../redux/posts';
import { sortFnMap } from './posts-collaborators';
import { Post, Posts } from '../../redux/types';

const usePostsPage = () => {
  const posts = useSelector(selectPosts);
  const [orderFilter, setOrderFilter] = useState('');
  const [searchFilter, setSearchFilter] = useState('');

  const getFilteredPosts = (): Posts => {
    let filteredPosts: Posts = [...posts];
    // Search Filter
    filteredPosts = filteredPosts.filter(
      (post: Post) => post.title.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1,
    );
    // Order filter
    filteredPosts.sort(sortFnMap[orderFilter]);

    return filteredPosts;
  };

  return {
    setOrderFilter,
    setSearchFilter,
    getFilteredPosts,
  };
};

export default usePostsPage;
