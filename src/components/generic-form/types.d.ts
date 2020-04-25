import { Post } from '../../redux/types';

export type GenericFormModel = {
  onSubmit: (postData: Post) => void;
  title: string;
};

export type UseGenericFormModel = {
  postData: Post;
  onFieldChange: (field: string, value: string) => void;
  handleSubmit: (postData: post) => void;
};
