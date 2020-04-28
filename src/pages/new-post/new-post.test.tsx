import React from 'react';
import { Store } from 'redux';
import { render, fireEvent, waitFor } from '@testing-library/react';

import NewPost from './new-post';

import configureStore from 'redux/store';
import ConnectedComponent from 'utils/test-utils';
import { mockedState } from 'utils/test-utils/__mocks__/state-mock';
import { mockApi } from 'utils/test-utils/api-mock';
import callApi from 'utils/api-caller';
import { selectPosts } from 'redux/posts';

jest.mock('../../utils/api-caller');

const getConnectedComponent = (store: Store) => (
  <ConnectedComponent store={store}>
    <NewPost />
  </ConnectedComponent>
);

const store = configureStore(mockedState);
describe('Post creation page', () => {
  it('Should display the content container and the form', () => {
    const { container, getByTestId } = render(getConnectedComponent(store));

    expect(getByTestId('new-post__form-container'));
    expect(container.getElementsByTagName('form').length).toBe(1);
  });

  it('Should create new post with data filled in form', async () => {
    (callApi as any).mockImplementation(mockApi(201, mockedState.currentPost));
    const { getByTestId } = render(getConnectedComponent(store));

    const titleField = getByTestId('form-title');
    const contentField = getByTestId('form-content');
    const imageField = getByTestId('form-image');
    const submitButton = getByTestId('form-submit');
    fireEvent.change(titleField, { target: { value: 'faketitle' } });
    fireEvent.change(contentField, { target: { value: 'fake content' } });
    fireEvent.change(imageField, { target: { value: 'http://www.google.es' } });

    fireEvent.click(submitButton);

    await waitFor(() => expect(selectPosts(store.getState()).length).toBe(3));
  });
});
