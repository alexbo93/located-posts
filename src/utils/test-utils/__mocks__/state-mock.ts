import { State, Posts, Post } from '../../../redux/types';
import mockPosts from './posts-mock';

export const mockedState: State = {
  posts: mockPosts as Posts,
  currentPost: mockPosts[1] as Post,
  messages: {
    success: null,
    error: null,
  },
};
