import { State } from '../types';

export const selectCurrentPost = (state: State) => state.currentPost;
export const selectCurrentPostData = (state: State) => selectCurrentPost(state).data;
export const selectCurrentPostError = (state: State) => selectCurrentPost(state).error;
