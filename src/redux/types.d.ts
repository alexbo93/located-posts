import { Action } from 'redux';

export type ActionStandard<T> = Action & {
  payload: T;
  error?: string | null;
};

export type ErrorStateModel<T> = {
  data: T;
  error: string | null;
};

export type Post = {
  id?: number;
  title: string;
  content: string;
  lat?: string;
  long?: string;
  image_url?: string;
  created_at?: Date;
  updated_at?: Date;
};

export type Posts = Post[];

export type State = {
  posts: Posts;
  currentPost: ErrorStateModel<Post>;
  messages: messagesStateModel;
};

export type messagesStateModel = {
  success: string | null;
  error: string | null;
};
