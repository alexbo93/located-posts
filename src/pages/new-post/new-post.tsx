import React from 'react';

import { MainContainer } from 'components/container';
import { MainButtonLink } from 'components/button';
import { BackLinkContainer, NewPostContainer } from './new-post.styled';
import { useDispatch } from 'react-redux';
import { addPost } from 'redux/posts';
import { Post } from 'redux/types';

const NewPost: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const onPostCreate = (postData: Post) => {
    dispatch(addPost(postData));
  };

  return (
    <MainContainer>
      <h1>Create your own post!</h1>
      <BackLinkContainer>
        <MainButtonLink to='/'>Go Back to List</MainButtonLink>
      </BackLinkContainer>
      <NewPostContainer data-testid='new-post__form-container'>
        <h3>HERE THERE WILL BE A FORM</h3>
      </NewPostContainer>
    </MainContainer>
  );
};

export default NewPost;
