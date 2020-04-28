import React from 'react';
import { render } from '@testing-library/react';

import Footer from './footer';

import ConnectedComponent from '../../utils/test-utils';
import configureStore from 'redux/store';
import { Store } from 'redux';

const getConnectedComponent = (store: Store) => (
  <ConnectedComponent store={store}>
    <Footer />
  </ConnectedComponent>
);
let store = configureStore();
describe('Footer Component', () => {
  it('Should render the footer container and 2 links', () => {
    const { getByTestId, container } = render(getConnectedComponent(store));

    const links = container.getElementsByTagName('a');
    expect(getByTestId('footer-container')).toBeDefined();
    expect(links.length).toBe(2);
  });

  it('Should point to Home and create new', () => {
    const { container } = render(getConnectedComponent(store));

    const links = container.getElementsByTagName('a');
    expect(links[0].href).toContain('/');
    expect(links[1].href).toContain('/post/new');
  });
});
