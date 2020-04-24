import { ActionStandard, Post } from "../types";

export const GET_POST: string = "GET_POST";
export const SET_CURRENT_POST: string = "SET_CURRENT_POST";

export const getCurrentPost = (id): ActionStandard<number> => ({
  type: GET_POST,
  payload: id
});

export const setCurrentPost = (post): ActionStandard<Post> => ({
  type: SET_CURRENT_POST,
  payload: post
});