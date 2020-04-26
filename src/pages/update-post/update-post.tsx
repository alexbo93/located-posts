import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { MainContainer, ContentContainer, BackLinkContainer } from 'components/container';
import { MainButtonLink } from 'components/button';
import GenericForm from 'components/generic-form';

import { Post } from 'redux/types';
import { RouterIdPageModel } from '../shared/types';

import { updatePost } from 'redux/posts';
import { selectCurrentPost, getCurrentPost } from 'redux/current-post';

const UpdatePost: React.FC<RouterIdPageModel> = ({ match }) => {
  const currentPost = useSelector(selectCurrentPost);
  const dispatch = useDispatch();
  const history = useHistory();
  const id = parseFloat(match.params.id);

  useEffect(() => {
    dispatch(getCurrentPost(id));
  }, [dispatch, id]);

  const onPostUpdate = (postData: Post) => {
    const newPost = { ...currentPost, ...postData };
    dispatch(updatePost(newPost));
    history.push('/');
  };

  return (
    <MainContainer>
      <h1>Change your post details!</h1>
      <BackLinkContainer>
        <MainButtonLink to='/'>Go Back to List</MainButtonLink>
      </BackLinkContainer>
      <ContentContainer data-testid='new-post__form-container'>
        <GenericForm
          updating
          onSubmit={onPostUpdate}
          title='Set your post information'
          buttonLabel='Update Post'
          initialData={currentPost}
        />
      </ContentContainer>
    </MainContainer>
  );
};

export default UpdatePost;
