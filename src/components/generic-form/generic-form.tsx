import React from 'react';
import { GenericFormModel } from './types';

import useGenericForm from './use-generic-form';
import { CustomInput, CustomTextArea } from '../input';
import { MainButton } from 'components/button';

import {
  GenericFormContainer,
  CustomLabel,
  FormField,
  GenericFormButton,
  GenericFormTitle,
} from './generic-form.styled';

const GenericForm: React.FC<GenericFormModel> = ({ onSubmit, title }) => {
  const { postData, handleSubmit, onFieldChange } = useGenericForm(onSubmit);
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
        <CustomInput name='lat' value={postData.lat} placeholder='Set post latitude...' />
        <CustomInput name='title' value={postData.long} placeholder='Set post longitude...' />
        <GenericFormButton as='button' type='submit'>
          Create Post
        </GenericFormButton>
      </GenericFormContainer>
    </React.Fragment>
  );
};

export default GenericForm;
