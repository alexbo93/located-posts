import { Action } from "redux";
import { ActionStandard, Post, Posts } from "../types";

export const ADD_POST = 'ADD_POST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const REMOVE_POST = 'REMOVE_POST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const UPDATE_POST = 'UPDATE_POST';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const GET_POSTS = 'GET_POSTS';
export const SET_POSTS = 'SET_POSTS';

export const addPost = (post: Post): ActionStandard<Post> => ({
  type: ADD_POST,
  payload: post
});

export const addPostSuccess = (post: Post): ActionStandard<Post> => ({
  type: ADD_POST,
  payload: post
});

export const removePost = (postId: number): ActionStandard<number> => ({
  type: REMOVE_POST,
  payload: postId
});

export const removePostSuccess = (post: Post): ActionStandard<Post> => ({
  type: REMOVE_POST_SUCCESS,
  payload: post
});

export const updatePost = (post: Post): ActionStandard<Post> => ({
  type: UPDATE_POST,
  payload: post
});

export const updatePostSuccess = (post: Post): ActionStandard<Post> => ({
  type: UPDATE_POST_SUCCESS,
  payload: post
});

export const getPosts = (): Action => ({
  type: ADD_POST
});

export const setPosts = (posts: Posts): ActionStandard<Posts> => ({
  type: SET_POSTS,
  payload: posts
});