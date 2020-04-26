import styled from 'styled-components';
import { MainButton } from 'components/button';

export const GenericFormContainer = styled.form`
  width: 100%;
`;

export const FormField = styled.div`
  width: 50%;
  margin-bottom: 15px;

  input,
  textarea {
    width: 90%;
  }
`;

export const CustomLabel = styled.span`
  font-weight: 600;
  display: block;
  margin-bottom: 10px;
`;

export const GenericFormButton = styled(MainButton)`
  display: block;
`;

export const GenericFormTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
`;

export const MapContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 400px;
`;

export const MapElement = styled.div`
  width: 100%;
  height: 100%;
`;
