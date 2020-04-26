import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectPosts, removePost } from '../../redux/posts';
import { sortFnMap } from './posts-collaborators';
import { Post, Posts } from '../../redux/types';
import { useHistory } from 'react-router-dom';

const usePostsPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const posts = useSelector(selectPosts);
  const [orderFilter, setOrderFilter] = useState('');
  const [searchFilter, setSearchFilter] = useState('');

  useEffect(() => {}, [posts]);

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

  const onPostRemove = (id: number) => {
    dispatch(removePost(id));
  };

  const onPostUpdate = (id: number) => {
    history.push(`/update/${id}`);
  };

  return {
    setOrderFilter,
    setSearchFilter,
    onPostRemove,
    onPostUpdate,
    getFilteredPosts,
  };
};

export default usePostsPage;
