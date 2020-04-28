import React from 'react';
import { Store } from 'redux';
import { render, waitFor, fireEvent, findAllByTestId } from '@testing-library/react';

import UpdatePost from './update-post';

import { selectCurrentPost } from 'redux/current-post';
import configureStore from '../../redux/store';
import { mockedState } from '../../utils/test-utils/__mocks__/state-mock';
import ConnectedComponent from '../../utils/test-utils';
import { mockApi } from '../../utils/test-utils/api-mock';
import callApi from '../../utils/api-caller';

jest.mock('../../utils/api-caller');

const newPostData = {
  title: 'NewTitle',
  content: 'NewContent',
  image_url: 'https://www.google.com',
};
const getConnectedComponent = (store: Store) => (
  <ConnectedComponent store={store}>
    <UpdatePost match={{ params: { id: '2' } }} />
  </ConnectedComponent>
);
const stateWithNoCurrent = { ...mockedState, currentPost: { title: '', content: '' } };
let store: Store;
describe('Update Post page', () => {
  beforeEach(() => {
    store = configureStore(stateWithNoCurrent);
    (callApi as any).mockImplementation(mockApi(200, mockedState.currentPost));
  });
  it('Should load the selected current post by Id', async () => {
    render(getConnectedComponent(store));

    await waitFor(() =>
      expect(selectCurrentPost(store.getState())).toEqual(mockedState.currentPost),
    );
  });

  it('Should display the content container and the form', async () => {
    const { getByTestId, container } = render(getConnectedComponent(store));

    await waitFor(() => {
      expect(getByTestId('update-post__form-container')).toBeDefined();
      expect(container.getElementsByTagName('form').length).toBe(1);
    });
  });

  it('Should empty the current post when the back list button is clicked', async () => {
    const { getByTestId } = render(getConnectedComponent(store));

    const backButton = getByTestId('back-button');
    fireEvent.click(backButton);

    await waitFor(() =>
      expect(selectCurrentPost(store.getState())).toEqual({ title: '', content: '' }),
    );
  });

  it('Should show a message of post not found if there is no post for the given id', async () => {
    (callApi as any).mockImplementation(mockApi(404, mockedState.currentPost));
    const { findByText } = render(getConnectedComponent(store));

    const notification = await findByText('Post Not Found');
    expect(notification.innerHTML).toBeTruthy();
  });

  it('Should update the post after submitting form and emptying it', async () => {
    const { findAllByTestId } = render(getConnectedComponent(store));

    const inputTitle = await findAllByTestId('form-title');
    const inputImage = await findAllByTestId('form-image');
    const content = await findAllByTestId('form-content');

    fireEvent.change(inputTitle[0], { target: { value: newPostData.title } });
    fireEvent.change(content[0], { target: { value: newPostData.content } });
    fireEvent.change(inputImage[0], { target: { value: newPostData.image_url } });

    const submitBtn = await findAllByTestId('form-submit');
    fireEvent.click(submitBtn[0]);

    await waitFor(() =>
      expect(selectCurrentPost(store.getState())).toEqual({ title: '', content: '' }),
    );
  });
});
