import { combineReducers, Reducer } from 'redux';

import { posts } from '../posts';
import { currentPost } from '../current-post';
import { messages } from '../messages';
import { State } from '../types';

const createRootReducer: Function = (): Reducer<State> =>
  combineReducers<State>({
    posts,
    currentPost,
    messages,
  });

export default createRootReducer();
