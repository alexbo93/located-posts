import React from 'react';
import { GenericFormModel } from './types';

import useGenericForm from './use-generic-form';
import { CustomInput, CustomTextArea } from '../input';
import Map from '../map';

import {
  GenericFormContainer,
  CustomLabel,
  FormField,
  GenericFormButton,
  GenericFormTitle,
  MapContainer,
  MapElement,
} from './generic-form.styled';
import { COORDINATES } from '../../constants';
import { Post } from 'redux/types';

const GenericForm: React.FC<GenericFormModel> = ({
  onSubmit,
  title,
  buttonLabel,
  initialData = {
    title: '',
    content: '',
    lat: COORDINATES.DEFAULT[0],
    long: COORDINATES.DEFAULT[1],
  },
  updating = false,
}) => {
  const { postData, handleSubmit, onFieldChange, getMapCenter, onLocationChange } = useGenericForm(
    onSubmit,
    initialData as Post,
    updating,
  );
  console.log('LOADER!! FOR MAP AND FOR APP');
  return (
    <React.Fragment>
      <GenericFormTitle>{title}</GenericFormTitle>
      <GenericFormContainer onSubmit={handleSubmit}>
        <FormField>
          <CustomLabel>Post Title</CustomLabel>
          <CustomInput
            name='title'
            value={postData.title}
            placeholder='Write post title...'
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onFieldChange(event.target.name, event.target.value)
            }
            required
          />
        </FormField>
        <FormField>
          <CustomLabel>Post Description</CustomLabel>
          <CustomTextArea
            name='content'
            value={postData.content}
            placeholder='Write post description...'
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
              onFieldChange(event.target.name, event.target.value)
            }
            required
          />
        </FormField>
        <Map
          googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyACj2TdifLnRFhJWamL4i3xDINBCwo-8fc'
          loadingElement={<div style={{ height: '100%' }}>loading...</div>}
          containerElement={<MapContainer />}
          mapElement={<MapElement />}
          defaultCenter={getMapCenter()}
          onLocationChange={onLocationChange}
        />
        <GenericFormButton as='button' type='submit'>
          {buttonLabel}
        </GenericFormButton>
      </GenericFormContainer>
    </React.Fragment>
  );
};

export default GenericForm;
