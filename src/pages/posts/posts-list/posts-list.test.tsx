import React from 'react';
import { Store } from 'redux';
import { render } from '@testing-library/react';

import PostsList from './posts-list';

import configureStore from '../../../redux/store';
import { mockedState } from '../../../utils/test-utils/__mocks__/state-mock';
import ConnectedComponent from '../../../utils/test-utils';
import { PostsListModel } from '../types';

const defaultProps = {
  posts: mockedState.posts,
  onPostRemove: jest.fn(),
  onPostUpdate: jest.fn(),
};

const getConnectedComponent = (store: Store, props: PostsListModel = defaultProps) => (
  <ConnectedComponent store={store}>
    <PostsList {...props} />
  </ConnectedComponent>
);
let store = configureStore();

describe('Posts List component', () => {
  it('Should display the container, the filters and the list', () => {
    const { getByTestId, getAllByTestId } = render(getConnectedComponent(store));

    expect(getByTestId('posts-list__container')).toBeDefined();
    expect(getAllByTestId('post-list__item-container').length).toBe(2);
    expect(getByTestId('posts-list__labels-container')).toBeDefined();
  });

  it('Should show a not found message if no posts are passed in props', () => {
    const customProps = { ...defaultProps, posts: [] };
    const { container, queryAllByTestId } = render(getConnectedComponent(store, customProps));

    expect(container.innerHTML).toContain('No Posts found');
    expect(queryAllByTestId('post-list__item-container').length).toBe(0);
  });
});
