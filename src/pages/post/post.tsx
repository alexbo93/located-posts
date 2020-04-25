import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MainContainer, BackLinkContainer, ContentContainer } from 'components/container';
import { MainButtonLink } from 'components/button';
import { selectCurrentPost, getCurrentPost } from 'redux/current-post';

import { PostImageContainer } from './post.styled';
import { PostDetailsModel } from './types';
import { CustomLabel } from 'components/generic-form/generic-form.styled';

const PostDetails: React.FC<PostDetailsModel> = ({ match }) => {
  const dispatch = useDispatch();
  const currentPost = useSelector(selectCurrentPost);

  useEffect(() => {
    dispatch(getCurrentPost(match.params.id));
  }, [dispatch, match.params.id]);

  const getImg = () => {
    if (currentPost.image_url) {
      return <img src={currentPost.image_url} alt='post-details' />;
    }
    return <i className='fas fa-map-marker-alt fa-10x' />;
  };

  return (
    <MainContainer>
      <h1>Create your own post!</h1>
      <BackLinkContainer>
        <MainButtonLink to='/'>Go Back to List</MainButtonLink>
      </BackLinkContainer>
      <ContentContainer data-testid='post-detail__form-container'>
        <h3>Here goes the content of the post</h3>
        <PostImageContainer>{getImg()}</PostImageContainer>
        <CustomLabel>Title of the Post</CustomLabel>
        <p>{currentPost.title}</p>
        <CustomLabel>Post Description</CustomLabel>
        <p>{currentPost.content}</p>
      </ContentContainer>
    </MainContainer>
  );
};

export default PostDetails;
