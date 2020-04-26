import { useState, useEffect } from 'react';
import { UseGenericFormModel } from './types';
import { Post } from 'redux/types';

import { formDataModel } from './types';
import { latLngObject } from 'components/map/types';

const useGenericForm = (
  onSubmit: (postData: Post) => void,
  initialData: Post,
  updating: boolean,
): UseGenericFormModel => {
  const [postData, setPostData] = useState({
    title: initialData.title,
    content: initialData.content,
    lat: initialData.lat,
    long: initialData.long,
  });

  useEffect(() => {
    if (updating) {
      const init: formDataModel = {
        title: initialData.title,
        content: initialData.content,
        lat: initialData.lat,
        long: initialData.long,
        image_url: initialData.image_url,
      };
      setPostData(init);
    }
  }, [updating, initialData]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(postData);
  };

  const onFieldChange = (field: string, value: string) => {
    const newPostData = { ...postData, [field]: value };
    setPostData(newPostData);
  };

  const getMapCenter = () => ({
    lat: parseFloat(postData.lat as string),
    lng: parseFloat(postData.long as string),
  });

  const onLocationChange = (latLng: latLngObject) => {
    const newPostData = {
      ...postData,
      lat: latLng.lat(),
      long: latLng.lng(),
    };
    setPostData(newPostData);
  };

  return {
    postData,
    onFieldChange,
    handleSubmit,
    getMapCenter,
    onLocationChange,
  };
};

export default useGenericForm;
