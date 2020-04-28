import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import PostsListItem from './posts-list-item';

import ConnectedComponent from 'utils/test-utils';
import configureStore from 'redux/store';
import { mockedState } from 'utils/test-utils/__mocks__/state-mock';
import { Store } from 'redux';
import { PostsListItemModel } from 'pages/posts/types';

const defaultProps: PostsListItemModel = {
  post: mockedState.currentPost,
  onPostRemove: jest.fn(),
  onPostUpdate: jest.fn(),
};
const getConnectedComponent = (store: Store, props = defaultProps) => (
  <ConnectedComponent store={store}>
    <PostsListItem {...props} />
  </ConnectedComponent>
);
const store = configureStore();

describe('Posts List item component', () => {
  it('Should display the container and all the data related to the post', () => {
    const { getByTestId } = render(getConnectedComponent(store));
    const post = mockedState.currentPost;

    const name = getByTestId('post-name');
    const lat = getByTestId('post-lat');
    const long = getByTestId('post-long');
    const creation = getByTestId('post-creation');
    const link = getByTestId('post-link');

    expect(getByTestId('post-list__item-container')).toBeDefined();
    expect(name.innerHTML).toContain(post.title);
    expect(lat.innerHTML).toContain(post.lat);
    expect(long.innerHTML).toContain(post.long);
    expect(creation).toBeDefined();
    expect(link.href).toContain(`/post/${post.id}`);
  });

  it('Should call remove method when clicking the icon to do so', () => {
    const { container } = render(getConnectedComponent(store));

    const removeIcon = container.getElementsByClassName('fas fa-pen')[0];
    fireEvent.click(removeIcon);

    expect(defaultProps.onPostUpdate).toHaveBeenCalled();
  });

  it('Should call update method when clicking the icon to do so', () => {
    const { container } = render(getConnectedComponent(store));

    const updateIcon = container.getElementsByClassName('fas fa-trash-alt')[0];
    fireEvent.click(updateIcon);

    expect(defaultProps.onPostRemove).toHaveBeenCalled();
  });
});
