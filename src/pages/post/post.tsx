import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { selectCurrentPost, getCurrentPost, emptyCurrentPost } from 'redux/current-post';
import { removePost } from 'redux/posts';
import { RouterIdPageModel } from '../shared/types';

import Map from 'components/map';
import {
  MainContainer,
  BackLinkContainer,
  ContentContainer,
  PostNotFound,
} from 'components/container';
import { MainButtonLink, MainButton } from 'components/button';
import { CustomLabel, MapContainer, MapElement } from 'components/generic-form/generic-form.styled';
import { PostImageContainer, PostActionButtonsContainer } from './post.styled';
import { COORDINATES } from '../../constants';

const PostDetails: React.FC<RouterIdPageModel> = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const id = parseFloat(match.params.id);
  const currentPost = useSelector(selectCurrentPost);

  useEffect(() => {
    dispatch(getCurrentPost(id));
  }, [dispatch, id]);

  const getImg = () => {
    if (currentPost.image_url) {
      return <img src={currentPost.image_url} alt='post-details' />;
    }
    return <i className='fas fa-map-marker-alt fa-7x' />;
  };

  const handlePostRemove = () => {
    dispatch(removePost(id));
    history.push('/');
  };

  const getMapCenter = () => ({
    lat: currentPost.lat ? parseFloat(currentPost.lat as string) : COORDINATES.DEFAULT[0],
    lng: currentPost.long ? parseFloat(currentPost.long as string) : COORDINATES.DEFAULT[1],
  });

  const onUpdateLeft = () => {
    dispatch(emptyCurrentPost());
    history.push('/');
  };

  const getPostContent = () => (
    <React.Fragment>
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
      <Map
        googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyACj2TdifLnRFhJWamL4i3xDINBCwo-8fc'
        loadingElement={<div style={{ height: '100%' }}>loading...</div>}
        containerElement={<MapContainer />}
        mapElement={<MapElement />}
        defaultCenter={getMapCenter()}
      />
    </React.Fragment>
  );

  return (
    <MainContainer>
      <h1>Create your own post!</h1>
      <BackLinkContainer>
        <MainButton as='button' onClick={onUpdateLeft}>
          Go Back to List
        </MainButton>
      </BackLinkContainer>
      <ContentContainer data-testid='post-detail__form-container'>
        {currentPost ? getPostContent() : <PostNotFound>Post Not Found</PostNotFound>}
      </ContentContainer>
    </MainContainer>
  );
};

export default PostDetails;
