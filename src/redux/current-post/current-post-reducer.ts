import {
  SET_CURRENT_POST,
  EMPTY_CURRENT_POST,
  SET_CURRENT_POST_ERROR,
} from './current-post-actions';
import { ActionStandard, Post, ErrorStateModel } from '../types';

const initialState: ErrorStateModel<Post> = {
  data: {
    title: '',
    content: '',
  },
  error: null,
};

const currentPostReducer = (state = initialState, action: ActionStandard<Post>) => {
  switch (action.type) {
    case SET_CURRENT_POST:
      return {
        data: action.payload,
        error: null,
      };
    case EMPTY_CURRENT_POST:
      return {
        data: initialState.data,
        error: initialState.error,
      };
    case SET_CURRENT_POST_ERROR:
      return {
        data: initialState.data,
        error: action.error || 'Something went wrong while loading current post',
      };
    default:
      return state;
  }
};

export default currentPostReducer;
