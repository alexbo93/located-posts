import React from 'react';
import { render } from '@testing-library/react';

import Header from './header';

import ConnectedComponent from '../../utils/test-utils';
import configureStore from 'redux/store';
import { Store } from 'redux';

const getConnectedComponent = (store: Store) => (
  <ConnectedComponent store={store}>
    <Header />
  </ConnectedComponent>
);
let store = configureStore();
describe('Footer Component', () => {
  it('Should render the header container, the logo and 2 links with its icons', () => {
    const { container, getByTestId } = render(getConnectedComponent(store));

    const links = container.getElementsByTagName('a');
    const logos = container.getElementsByTagName('img');
    const icons = container.getElementsByTagName('i');
    expect(getByTestId('header-container')).toBeDefined();
    expect(logos.length).toBeDefined();
    expect(links.length).toBe(2);
    expect(icons.length).toBe(2);
  });
});
