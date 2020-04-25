import { useState } from 'react';
import { UseGenericFormModel } from './types';
import { Post } from 'redux/types';

const useGenericForm = (onSubmit: (postData: Post) => void): UseGenericFormModel => {
  const [postData, setPostData] = useState({
    title: '',
    lat: '',
    long: '',
    content: '',
    image_url: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(postData);
  };

  const onFieldChange = (field: string, value: string) => {
    const newPostData = { ...postData, [field]: value };
    setPostData(newPostData);
  };

  return {
    postData,
    onFieldChange,
    handleSubmit,
  };
};

export default useGenericForm;
