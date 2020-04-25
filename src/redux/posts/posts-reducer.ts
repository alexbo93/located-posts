import {
  ADD_POST_SUCCESS,
  REMOVE_POST_SUCCESS,
  UPDATE_POST_SUCCESS,
  SET_POSTS,
} from './posts-actions';
import { Posts, ActionStandard, Post } from '../types';

const initialState: Posts = [];
type PostsActionTypes = ActionStandard<Post> | ActionStandard<Posts> | ActionStandard<number>;

const postsReducer = (state = initialState, action: PostsActionTypes) => {
  switch (action.type) {
    case ADD_POST_SUCCESS:
      return [...state, action.payload as Post];
    case REMOVE_POST_SUCCESS:
      return state.filter((post: Post) => post.id !== (action.payload as number));
    case UPDATE_POST_SUCCESS:
      const index = state.findIndex((post: Post) => post.id === (action.payload as Post).id);
      if (index !== -1) state[index] = action.payload as Post;
      return state;
    case SET_POSTS:
      return action.payload as Posts;
    default:
      return state;
  }
};

export default postsReducer;
