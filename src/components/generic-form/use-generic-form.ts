import { useState, useEffect, useCallback } from 'react';
import { UseGenericFormModel } from './types';
import { Post } from 'redux/types';

import { formDataModel } from './types';
import { latLngObject } from 'components/map/types';
import { COORDINATES } from '../../constants';

const useGenericForm = (
  onSubmit: (postData: Post) => void,
  initialData: Post,
  updating: boolean,
): UseGenericFormModel => {
  const initState = useCallback(
    () => ({
      title: initialData.title,
      content: initialData.content,
      lat: initialData.lat,
      long: initialData.long,
      image_url: initialData.image_url,
    }),
    [initialData],
  );

  const [postData, setPostData] = useState(initState());

  useEffect(() => {
    if (updating) {
      const init: formDataModel = initState();
      setPostData(init);
    }
  }, [updating, initialData, initState]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(postData);
  };

  const onFieldChange = (field: string, value: string) => {
    const newPostData = { ...postData, [field]: value };
    setPostData(newPostData);
  };

  const getMapCenter = () => ({
    lat: postData.lat ? parseFloat(postData.lat as string) : COORDINATES.DEFAULT[0],
    lng: postData.long ? parseFloat(postData.long as string) : COORDINATES.DEFAULT[1],
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
