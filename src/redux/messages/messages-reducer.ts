import { SET_MESSAGE, SET_ERROR } from './messages-actions';

import { ActionStandard, messagesStateModel } from '../types';

const initialState: messagesStateModel = {
  success: null,
  error: null,
};

const messagesReducer = (state = initialState, action: ActionStandard<string>) => {
  switch (action.type) {
    case SET_MESSAGE:
      return { ...state, success: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default messagesReducer;
