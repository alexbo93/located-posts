import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { MainContainer, ContentContainer, BackLinkContainer } from 'components/container';
import { MainButtonLink } from 'components/button';
import GenericForm from 'components/generic-form';
import { addPost } from 'redux/posts';
import { Post } from 'redux/types';

const NewPost: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onPostCreate = (postData: Post) => {
    dispatch(addPost(postData));
    history.push('/');
  };

  return (
    <MainContainer>
      <h1>Create your own post!</h1>
      <BackLinkContainer>
        <MainButtonLink to='/'>Go Back to List</MainButtonLink>
      </BackLinkContainer>
      <ContentContainer data-testid='new-post__form-container'>
        <GenericForm
          onSubmit={onPostCreate}
          title='Set your post information'
          buttonLabel='Create Post'
        />
      </ContentContainer>
    </MainContainer>
  );
};

export default NewPost;
