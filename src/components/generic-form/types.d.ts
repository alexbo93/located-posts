import { Post } from '../../redux/types';

export type GenericFormModel = {
  onSubmit: (postData: Post) => void;
  title: string;
  buttonLabel: string;
  initialData?: Post;
  updating?: boolean;
};

export type UseGenericFormModel = {
  postData: Post;
  onFieldChange: (field: string, value: string) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  getMapCenter: () => {
    lat: number;
    lng: number;
  };
};

export type formDataModel = {
  title: string;
  content: string;
  lat: string | undefined;
  long: string | undefined;
  image_url: string | undefined;
};
