import React from 'react';
import { Store } from 'redux';
import { render, waitFor } from '@testing-library/react';

import App from './App';

import configureStore from 'redux/store';
import ConnectedComponent from 'utils/test-utils';
import { mockedState } from 'utils/test-utils/__mocks__/state-mock';
import { mockApi } from 'utils/test-utils/api-mock';
import callApi from 'utils/api-caller';
import { selectPosts } from 'redux/posts';

jest.mock('utils/api-caller');

const getConnectedComponent = (store: Store) => (
  <ConnectedComponent store={store}>
    <App />
  </ConnectedComponent>
);

const store = configureStore(mockedState);

describe('App Main component', () => {
  it('Should render the container and load posts', async () => {
    (callApi as any).mockImplementation(mockApi(200, mockedState.posts));
    const { container } = render(getConnectedComponent(store));

    expect(container.getElementsByClassName('App').length).toBe(1);

    await waitFor(() => expect(selectPosts(store.getState()).length).toBe(2));
  });
});
