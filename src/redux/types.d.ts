import { Action } from "redux";

export type ActionStandard<T> = Action & {
  payload: T
};

export type Post = {
  id?: number;
  title: string;
  content: string;
  lat?: string;
  long?: string;
  image_url?: string;
  created_at?: Date,
  updated_at?: Date
}

export type Posts = Post[];

export type State = {
  posts: Posts;
  currentPost: Post;
};