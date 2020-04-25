import { Posts, Post } from "../../redux/types";

export type postActionFn = (id: number) => void;

export type PostComponentModel = {
  onPostRemove: postActionFn;
  onPostUpdate: postActionFn;
};

export type PostsListModel = PostComponentModel & {
  posts: Posts;
};

export type PostsListItemModel = PostComponentModel & {
  post: Post;
};