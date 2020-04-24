import {
  ADD_POST,
  REMOVE_POST,
  UPDATE_POST
} from "./posts-actions";
import { Posts, ActionStandard, Post } from "../types"

const initialState: Posts = [];
const postsReducer = (state = initialState, action: ActionStandard<Post>) => {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.payload];
    case REMOVE_POST:
      return state.filter((post: Post) => post.id === action.payload.id);
    case UPDATE_POST:
      const index = state.findIndex((post: Post) => post.id === action.payload.id);
      if(index !== -1) state[index] = action.payload;
      return state;
    default:
      return state;
  }
};

export default postsReducer;