import postsMock from './posts-mock';
import { State, Posts, Post } from '../../../redux/types';

export const mockedState: State = {
  posts: postsMock as Posts,
  currentPost: postsMock[1] as Post,
  messages: {
    success: null,
    error: null,
  },
};
