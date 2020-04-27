import { ActionStandard } from '../types';

export const SET_MESSAGE = 'SET_MESSAGE';
export const SET_ERROR = 'SET_ERROR';

export const setMessage = (message: string): ActionStandard<string> => ({
  type: SET_MESSAGE,
  payload: message,
});

export const setError = (error: string): ActionStandard<string> => ({
  type: SET_ERROR,
  payload: error,
});
