import { addPost, removePost, updatePost, getPosts } from './posts-actions';
import configureStore from '../store';
import callApi from '../../utils/api-caller';

import { mockApi } from '../../utils/test-utils/api-mock';
import mockPosts from '../../utils/test-utils/__mocks__/posts-mock';
import { newPost } from '../../utils/test-utils/__mocks__/posts-mock';
import { Store } from 'redux';
import { selectPosts } from './posts-selectors';
import { selectMessages } from '../messages';
import { ERRORS, MESSAGES } from '../../constants';
import { mockedState } from '../../utils/test-utils/__mocks__/state-mock';

jest.mock('../../utils/api-caller');
let store: Store;

describe('Post List Redux feature integrated', () => {
  beforeEach(() => {
    store = configureStore(mockedState);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Successful Api calls', () => {
    beforeEach(() => {
      store = configureStore(mockedState);
    });
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('Should store posts in state when calling the action to get posts', async () => {
      (callApi as any).mockImplementation(mockApi(200, mockPosts));
      await store.dispatch(getPosts());

      const posts = selectPosts(store.getState());
      const { error } = selectMessages(store.getState());
      expect(posts[0]).toEqual(mockPosts[0]);
      expect(posts[1]).toEqual(mockPosts[1]);
      expect(error).toEqual(null);
    });

    it('Should remove selected post in state when calling the proper action', async () => {
      (callApi as any).mockImplementation(mockApi(204, mockPosts[0]));
      await store.dispatch(removePost(mockPosts[0].id));

      const posts = selectPosts(store.getState());
      const { error, success } = selectMessages(store.getState());
      expect(posts.length).toBe(1);
      expect(posts[0]).toEqual(mockPosts[1]);
      expect(error).toEqual(null);
      expect(success).toEqual(MESSAGES.POST_REMOVED);
    });

    it('Should update selected posts in state when calling the proper action', async () => {
      (callApi as any).mockImplementation(mockApi(200, newPost));
      await store.dispatch(updatePost(newPost));

      const posts = selectPosts(store.getState());
      const { error, success } = selectMessages(store.getState());
      expect(posts[0]).toEqual(mockPosts[0]);
      expect(posts[1]).toEqual(newPost);
      expect(error).toEqual(null);
      expect(success).toEqual(MESSAGES.POST_UPDATED);
    });

    it('Should add a new post in state when calling the proper action', async () => {
      (callApi as any).mockImplementation(mockApi(201, newPost));
      await store.dispatch(addPost(newPost));

      const posts = selectPosts(store.getState());
      const { error, success } = selectMessages(store.getState());
      expect(posts.length).toBe(3);
      expect(posts[0]).toEqual(mockPosts[0]);
      expect(posts[1]).toEqual(mockPosts[1]);
      expect(posts[2]).toEqual(newPost);
      expect(error).toEqual(null);
      expect(success).toEqual(MESSAGES.POST_ADDED);
    });
  });

  describe('Failed Api calls', () => {
    beforeEach(() => {
      store = configureStore(mockedState);
      (callApi as any).mockImplementation(mockApi(400, {}));
    });
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('Should store posts in state when calling the action to get posts', async () => {
      await store.dispatch(getPosts());

      const posts = selectPosts(store.getState());
      const { error } = selectMessages(store.getState());
      expect(posts[0]).toEqual(mockPosts[0]);
      expect(posts[1]).toEqual(mockPosts[1]);
      expect(error).toEqual(ERRORS.POSTS_RETRIEVED);
    });

    it('Should remove selected post in state when calling the proper action', async () => {
      await store.dispatch(removePost(mockPosts[0].id));

      const posts = selectPosts(store.getState());
      const { error } = selectMessages(store.getState());
      expect(posts.length).toBe(2);
      expect(posts[0]).toEqual(mockPosts[0]);
      expect(error).toEqual(ERRORS.REMOVE);
    });

    it('Should update selected posts in state when calling the proper action', async () => {
      await store.dispatch(updatePost(newPost));

      const posts = selectPosts(store.getState());
      const { error } = selectMessages(store.getState());
      expect(posts[0]).toEqual(mockPosts[0]);
      expect(posts[1]).toEqual(mockPosts[1]);
      expect(error).toEqual(ERRORS.UPDATE);
    });

    it('Should add a new post in state when calling the proper action', async () => {
      await store.dispatch(addPost(newPost));

      const posts = selectPosts(store.getState());
      const { error } = selectMessages(store.getState());
      expect(posts.length).toBe(2);
      expect(error).toEqual(ERRORS.ADD);
    });
  });

  // describe('Successful api calls', () => {
  //   beforeEach(() => {
  //     store = configureStore(mockedState);
  //   });
  //   afterEach(() => {
  //     jest.clearAllMocks();
  //   });

  // });

  // it('Should add an error message when api call failed', async () => {
  //   (callApi as any).mockImplementationOnce(mockApi(400, mockPosts));
  //   await store.dispatch(getPosts(1));

  //   const currentPost = selectCurrentPost(store.getState());
  //   const { error } = selectMessages(store.getState());
  //   expect(currentPost).toEqual({ title: '', content: '' });
  //   expect(error).toEqual(ERRORS.POST_RETRIEVED);
  // });

  // it('Should Empty the current post when called', async () => {
  //   store = configureStore(mockedState);
  //   await store.dispatch(emptyCurrentPost());

  //   const currentPost = selectCurrentPost(store.getState());
  //   const { error } = selectMessages(store.getState());
  //   expect(currentPost).toEqual({ title: '', content: '' });
  //   expect(error).toEqual(null);
  // });
});
