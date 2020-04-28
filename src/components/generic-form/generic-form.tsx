import React from 'react';
import { GenericFormModel } from './types';

import useGenericForm from './use-generic-form';
import { CustomInput, CustomTextArea } from '../input';
import CustomSpinner from '../spinner';
import Map from '../map';

import {
  GenericFormContainer,
  CustomLabel,
  FormField,
  FormFieldFull,
  GenericFormButton,
  GenericFormTitle,
  MapContainer,
  MapElement,
  MapGuide,
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
    image_url: '',
  },
  updating = false,
}) => {
  const { postData, handleSubmit, onFieldChange, getMapCenter, onLocationChange } = useGenericForm(
    onSubmit,
    initialData as Post,
    updating,
  );

  return (
    <React.Fragment>
      <GenericFormTitle>{title}</GenericFormTitle>
      <GenericFormContainer onSubmit={handleSubmit}>
        <FormField>
          <CustomLabel>Post Title</CustomLabel>
          <CustomInput
            name='title'
            data-testid='form-title'
            value={postData.title}
            placeholder='Write post title...'
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onFieldChange(event.target.name, event.target.value)
            }
            required
          />
        </FormField>
        <FormFieldFull>
          <CustomLabel>Post Description</CustomLabel>
          <CustomTextArea
            name='content'
            data-testid='form-content'
            rows={5}
            value={postData.content}
            placeholder='Write post description...'
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
              onFieldChange(event.target.name, event.target.value)
            }
            required
          />
        </FormFieldFull>
        <CustomLabel>Locate your post!</CustomLabel>
        <Map
          googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyACj2TdifLnRFhJWamL4i3xDINBCwo-8fc'
          loadingElement={<CustomSpinner className='lds-dual-ring' />}
          containerElement={<MapContainer />}
          mapElement={<MapElement />}
          defaultCenter={getMapCenter()}
          onLocationChange={onLocationChange}
        />
        <MapGuide>Right click over the map to select the location of the post</MapGuide>
        <FormFieldFull>
          <CustomLabel>Post image</CustomLabel>
          <CustomInput
            name='image_url'
            data-testid='form-image'
            value={postData.image_url || ''}
            placeholder="Paste post's image url..."
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onFieldChange(event.target.name, event.target.value)
            }
          />
        </FormFieldFull>
        <GenericFormButton as='button' type='submit' data-testid='form-submit'>
          {buttonLabel}
        </GenericFormButton>
      </GenericFormContainer>
    </React.Fragment>
  );
};

export default GenericForm;
