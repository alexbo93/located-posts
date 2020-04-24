import { combineReducers, Reducer } from "redux";

import { posts } from "../posts";
import { currentPost } from "../current-post";
import { State } from "../types";

export const createRootReducer: Function = (): Reducer<State> =>
  combineReducers<State>({
    posts,
    currentPost
  });
