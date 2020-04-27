export const HTTP_METHODS = {
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  GET: 'GET',
};

export const ORDER_FILTERS = {
  TITLE_ASC: 'title>',
  TITLE_DESC: 'title<',
  NEWEST: 'created_at',
};

export const COORDINATES = {
  DEFAULT: [52.4883425, 13.4231151],
};

export const MESSAGES = {
  POST_ADDED: 'Post Added successfully!',
  POST_REMOVED: 'Post Removed successfully!',
  POST_UPDATED: 'Post Updated successfully!',
};

export const ERRORS = {
  POSTS_RETRIEVED: 'There was an error obtaining post list. Try later',
  POST_RETRIEVED: 'There was an error obtaining the post. Try later',
  UPDATE: 'The post could not be updated. Try later',
  REMOVE: 'The post could not be removed. Try later',
  ADD: 'The post could not be added. Try later',
};
