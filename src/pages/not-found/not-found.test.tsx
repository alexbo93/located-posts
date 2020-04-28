import React from 'react';
import { Store } from 'redux';
import { render } from '@testing-library/react';

import NotFound from './not-found';

import configureStore from '../../redux/store';
import ConnectedComponent from '../../utils/test-utils';

jest.mock('../../utils/api-caller');

const getConnectedComponent = (store: Store) => (
  <ConnectedComponent store={store}>
    <NotFound />
  </ConnectedComponent>
);

const store = configureStore();
describe('Not Found page component', () => {
  it('Should display the title and the link to home', () => {
    const { container } = render(getConnectedComponent(store));

    expect(container.getElementsByTagName('h1').length).toBe(1);
    expect(container.getElementsByTagName('a')[0].href).toContain('/');
  });
});
