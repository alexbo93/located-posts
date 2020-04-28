import React from 'react';
import { Store } from 'redux';
import { render, fireEvent } from '@testing-library/react';

import PostsPage from './posts';

import configureStore from '../../redux/store';
import { mockedState } from '../../utils/test-utils/__mocks__/state-mock';
import ConnectedComponent from '../../utils/test-utils';
import { ORDER_FILTERS } from '../../constants';

jest.mock('../../utils/api-caller');

const getConnectedComponent = (store: Store) => (
  <ConnectedComponent store={store}>
    <PostsPage />
  </ConnectedComponent>
);

let store: Store;
describe('Update Post page', () => {
  beforeEach(() => {
    store = configureStore(mockedState);
    // (callApi as any).mockImplementation(mockApi(200, mockedState.posts));
  });

  it('Should display the filters component and the list', () => {
    const { getByTestId } = render(getConnectedComponent(store));

    expect(getByTestId('filters-list__container')).toBeDefined();
    expect(getByTestId('posts-list__container')).toBeDefined();
  });

  it('Should display 2 rows of posts as there will come from api call', async () => {
    const { findAllByTestId } = render(getConnectedComponent(store));

    const posts = await findAllByTestId('post-list__item-container');
    expect(posts.length).toBe(2);
  });

  it('Should warn there are no posts if api call returns 0 posts', async () => {
    store = configureStore();
    const { container } = render(getConnectedComponent(store));

    expect(container.innerHTML).toContain('No Posts found');
  });

  describe('Filtersing', () => {
    it('Should show only the post corresponding to the name in the search field', async () => {
      const { getByTestId, findAllByTestId } = render(getConnectedComponent(store));

      const searchFilter = getByTestId('filter-search');
      fireEvent.change(searchFilter, { target: { value: mockedState.posts[0].title } });

      const posts = await findAllByTestId('post-list__item-container');
      expect(posts.length).toBe(1);
      expect(getByTestId('post-name').innerHTML).toEqual(mockedState.posts[0].title);
    });

    it('Should put Barcelona mocked post first when ordering by title asc', async () => {
      const { getByTestId, findAllByTestId, getAllByTestId } = render(getConnectedComponent(store));

      const searchFilter = getByTestId('filter-order');
      fireEvent.change(searchFilter, { target: { value: ORDER_FILTERS.TITLE_ASC } });

      const posts = await findAllByTestId('post-list__item-container');
      const postsSpan = getAllByTestId('post-name');
      expect(posts.length).toBe(2);
      expect(postsSpan[0].innerHTML).toContain('Barcelona');
    });

    it('Should put Berlin mocked post first when ordering by title asc', async () => {
      const { getByTestId, findAllByTestId, getAllByTestId } = render(getConnectedComponent(store));

      const searchFilter = getByTestId('filter-order');
      fireEvent.change(searchFilter, { target: { value: ORDER_FILTERS.TITLE_DESC } });

      const posts = await findAllByTestId('post-list__item-container');
      const postsSpan = getAllByTestId('post-name');
      expect(posts.length).toBe(2);
      expect(postsSpan[0].innerHTML).toContain('Berlin');
    });

    it('Should put Barcelona mocked post first when ordering by title asc', async () => {
      const { getByTestId, findAllByTestId, getAllByTestId } = render(getConnectedComponent(store));

      const searchFilter = getByTestId('filter-order');
      fireEvent.change(searchFilter, { target: { value: ORDER_FILTERS.TITLE_DESC } });

      const posts = await findAllByTestId('post-list__item-container');
      const postsSpan = getAllByTestId('post-name');
      expect(posts.length).toBe(2);
      expect(postsSpan[0].innerHTML).toContain('Berlin');
    });
  });
});
