import { Action } from "redux";
import { ActionStandard, Post } from "../types";

export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const GET_POSTS = 'GET_POSTS';

export const addPost = (post: Post): ActionStandard<Post> => ({
  type: ADD_POST,
  payload: post
});

export const removePost = (post: Post): ActionStandard<Post> => ({
  type: REMOVE_POST,
  payload: post
});

export const updatePost = (post: Post): ActionStandard<Post> => ({
  type: UPDATE_POST,
  payload: post
});

export const getPosts = (): Action => ({
  type: ADD_POST
});