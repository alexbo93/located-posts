import {
  GET_POST,
  SET_CURRENT_POST,
  EMPTY_CURRENT_POST,
  getCurrentPost,
  setCurrentPost,
  emptyCurrentPost,
} from './current-post-actions';
import configureStore from '../store';
import callApi from '../../utils/api-caller';

import { mockApi } from '../../utils/test-utils/api-mock';
import mockPosts from '../../utils/test-utils/__mocks__/posts-mock';
import { Store } from 'redux';
import { selectCurrentPost } from './current-post-selectors';
import { selectMessages } from '../messages';
import { ERRORS } from '../../constants';
import { mockedState } from '../../utils/test-utils/__mocks__/state-mock';

jest.mock('../../utils/api-caller');
let store: Store;

describe('Current Post Redux feature integrated', () => {
  beforeEach(() => {
    store = configureStore();
    jest.restoreAllMocks();
  });
  it('Should store current post in state when calling the action to get post', async () => {
    (callApi as any).mockImplementationOnce(mockApi(200, mockPosts[0]));
    await store.dispatch(getCurrentPost(1));

    const currentPost = selectCurrentPost(store.getState());
    const { error } = selectMessages(store.getState());
    expect(currentPost).toEqual(mockPosts[0]);
    expect(error).toEqual(null);
  });

  it('Should add an error message when api call failed', async () => {
    (callApi as any).mockImplementationOnce(mockApi(400, mockPosts[0]));
    await store.dispatch(getCurrentPost(1));

    const currentPost = selectCurrentPost(store.getState());
    const { error } = selectMessages(store.getState());
    expect(currentPost).toEqual({ title: '', content: '' });
    expect(error).toEqual(ERRORS.POST_RETRIEVED);
  });

  it('Should Empty the current post when called', async () => {
    store = configureStore(mockedState);
    await store.dispatch(emptyCurrentPost());

    const currentPost = selectCurrentPost(store.getState());
    const { error } = selectMessages(store.getState());
    expect(currentPost).toEqual({ title: '', content: '' });
    expect(error).toEqual(null);
  });
});
