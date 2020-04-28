import React from 'react';
import { Store } from 'redux';
import { render, waitFor, fireEvent } from '@testing-library/react';

import PostDetails from './post';

import { selectCurrentPost } from 'redux/current-post';
import configureStore from '../../redux/store';
import { mockedState } from '../../utils/test-utils/__mocks__/state-mock';
import ConnectedComponent from '../../utils/test-utils';
import { mockApi } from '../../utils/test-utils/api-mock';
import callApi from '../../utils/api-caller';
import { selectPosts } from 'redux/posts';

jest.mock('../../utils/api-caller');

const getConnectedComponent = (store: Store) => (
  <ConnectedComponent store={store}>
    <PostDetails match={{ params: { id: '2' } }} />
  </ConnectedComponent>
);
const stateWithNoCurrent = { ...mockedState, currentPost: { title: '', content: '' } };
let store: Store;
describe('Update Post page', () => {
  beforeEach(() => {
    store = configureStore(mockedState);
    (callApi as any).mockImplementation(mockApi(200, mockedState.currentPost));
  });

  it('Should display the title, the image, remove and update buttons, description and map', async () => {
    const { getByTestId, container, findByTestId } = render(getConnectedComponent(store));

    const title = await findByTestId('post-title');
    const buttons = container.getElementsByTagName('button');
    const link = container.getElementsByTagName('a')[0];
    expect(getByTestId('post-detail__form-container')).toBeDefined();
    expect(title.innerHTML).toEqual(mockedState.currentPost.title);
    expect(buttons.length).toBe(2);
    expect(link.href).toContain(`/update/2`);
    expect(getByTestId('post-content').innerHTML).toEqual(mockedState.currentPost.content);
  });

  it('Should remove the current post if the button to do so is clicked', async () => {
    const { container, findByTestId } = render(getConnectedComponent(store));
    (callApi as any).mockImplementation(mockApi(204, mockedState.currentPost));

    await findByTestId('post-title');

    const removeButton = container.getElementsByTagName('button')[1];
    fireEvent.click(removeButton);

    await waitFor(() => expect(selectPosts(store.getState()).length).toBe(1));
  });

  it('Should remove the current post if leave button is clicked', async () => {
    const { container, findByTestId } = render(getConnectedComponent(store));

    // Wait until currentPost has been stored
    await findByTestId('post-title');

    const leaveButton = container.getElementsByTagName('button')[0];
    fireEvent.click(leaveButton);

    await waitFor(() =>
      expect(selectCurrentPost(store.getState())).toEqual({
        title: '',
        content: '',
      }),
    );
  });

  it('Should show an alt icon if current post has no image', async () => {
    store = configureStore(stateWithNoCurrent);
    (callApi as any).mockImplementation(mockApi(200, stateWithNoCurrent.currentPost));
    const { getByTestId, queryByTestId, findByTestId } = render(getConnectedComponent(store));

    // Wait until currentPost has been stored
    await findByTestId('post-title');

    const image = queryByTestId('post-image');
    const icon = getByTestId('alt-post-image');

    expect(image).toBe(null);
    expect(icon).toBeDefined();
  });
});
