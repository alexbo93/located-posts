import React from 'react';

import { PostsListLabelsContainer, PostLabel, PostNameLabel } from './posts-list-labels.styled';

const PostsListLabels: React.FC<{}> = () => (
  <PostsListLabelsContainer data-testid='posts-list__labels-container'>
    <PostNameLabel>Title</PostNameLabel>
    <PostLabel>Latitude</PostLabel>
    <PostLabel>Longitude</PostLabel>
    <PostLabel>Created at</PostLabel>
  </PostsListLabelsContainer>
);

export default PostsListLabels;
