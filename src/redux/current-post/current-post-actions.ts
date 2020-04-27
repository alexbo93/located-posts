import { ActionStandard, Post } from '../types';
import { Action } from 'redux';

export const GET_POST: string = 'GET_POST';
export const SET_CURRENT_POST: string = 'SET_CURRENT_POST';
export const SET_CURRENT_POST_ERROR: string = 'SET_CURRENT_POST_ERROR';
export const EMPTY_CURRENT_POST: string = 'EMPTY_CURRENT_POST';

export const getCurrentPost = (id: number): ActionStandard<number> => ({
  type: GET_POST,
  payload: id,
});

export const setCurrentPost = (post: Post): ActionStandard<Post> => ({
  type: SET_CURRENT_POST,
  payload: post,
  error: null,
});

export const setCurrentPostError = (error: string): ActionStandard<Post | null> => ({
  type: SET_CURRENT_POST_ERROR,
  payload: null,
  error: error,
});

export const emptyCurrentPost = (): Action => ({
  type: EMPTY_CURRENT_POST,
});
