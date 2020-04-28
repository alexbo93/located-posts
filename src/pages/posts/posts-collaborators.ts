import { ORDER_FILTERS } from '../../constants';
import { Post } from '../../redux/types';

export const sortFnMap = {
  [ORDER_FILTERS.TITLE_ASC]: (a: Post, b: Post) =>
    a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1,
  [ORDER_FILTERS.TITLE_DESC]: (a: Post, b: Post) =>
    a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1,
  [ORDER_FILTERS.NEWEST]: (a: Post, b: Post) =>
    new Date(a.created_at as Date) > new Date(b.created_at as Date) ? -1 : 1,
};
