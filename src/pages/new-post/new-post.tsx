import React from 'react';

import { MainContainer } from 'components/container';
import { MainButtonLink } from 'components/button';
import GenericForm from 'components/generic-form';
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
        <GenericForm onSubmit={onPostCreate} title='Set your post information' />
      </NewPostContainer>
    </MainContainer>
  );
};

export default NewPost;
