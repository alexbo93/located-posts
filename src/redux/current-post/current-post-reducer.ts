import { SET_CURRENT_POST, EMPTY_CURRENT_POST } from './current-post-actions';
import { ActionStandard, Post } from '../types';

const initialState: Post = {
  title: '',
  content: '',
};
const currentPostReducer = (state = initialState, action: ActionStandard<Post>) => {
  switch (action.type) {
    case SET_CURRENT_POST:
      return action.payload;
    case EMPTY_CURRENT_POST:
      return initialState;
    default:
      return state;
  }
};

export default currentPostReducer;
