import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { selectCurrentPost, getCurrentPost } from 'redux/current-post';
import { removePost } from 'redux/posts';
import { PostDetailsModel } from './types';

import { MainContainer, BackLinkContainer, ContentContainer } from 'components/container';
import { MainButtonLink, MainButton } from 'components/button';
import { PostImageContainer, PostActionButtonsContainer } from './post.styled';
import { CustomLabel } from 'components/generic-form/generic-form.styled';

const PostDetails: React.FC<PostDetailsModel> = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentPost = useSelector(selectCurrentPost);

  useEffect(() => {
    dispatch(getCurrentPost(match.params.id));
  }, [dispatch, match.params.id]);

  const getImg = () => {
    if (currentPost.image_url) {
      return <img src={currentPost.image_url} alt='post-details' />;
    }
    return <i className='fas fa-map-marker-alt fa-7x' />;
  };

  const handlePostRemove = () => {
    dispatch(removePost(match.params.id));
    history.push('/');
  };

  return (
    <MainContainer>
      <h1>Create your own post!</h1>
      <BackLinkContainer>
        <MainButtonLink to='/'>Go Back to List</MainButtonLink>
      </BackLinkContainer>
      <ContentContainer data-testid='post-detail__form-container'>
        <h3>{currentPost.title}</h3>
        <PostImageContainer>{getImg()}</PostImageContainer>
        <PostActionButtonsContainer>
          <MainButtonLink to={`/update/${match.params.id}`}>
            <i className='fa fa-pen'></i>Update
          </MainButtonLink>
          <MainButton as='button' onClick={handlePostRemove}>
            <i className='fa fa-trash-alt'></i>Remove
          </MainButton>
        </PostActionButtonsContainer>
        <CustomLabel>Post Description</CustomLabel>
        <p>{currentPost.content}</p>
      </ContentContainer>
    </MainContainer>
  );
};

export default PostDetails;
