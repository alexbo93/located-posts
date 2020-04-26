import { Post } from '../../redux/types';

export type GenericFormModel = {
  onSubmit: (postData: Post) => void;
  title: string;
  buttonLabel: string;
  initialData?: Post;
};

export type UseGenericFormModel = {
  postData: Post;
  onFieldChange: (field: string, value: string) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};
