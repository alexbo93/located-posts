import React from 'react';
import { render } from '@testing-library/react';

import Footer from './footer';
import { createStore } from 'redux';
import rootReducer from '../../redux/store/root-reducer';

// import ConnectedComponent from '../../utils/test-utils';

// let store = createStore(rootReducer);
// describe('Footer Component', () => {
//   it('Should render the footer container and 3 links', () => {
//     const { getByTestId, container } = render(
//       <ConnectedComponent store={store}>
//         <Footer />
//       </ConnectedComponent>
//     );

//     const links = container.getElementsByTagName('a');
//     expect(getByTestId('footer-container')).toBeDefined();
//     expect(links.length).toBe(3);
//   });

//   it('Should point to Home, List and Picture of the day section with the links', () => {
//     const { container } = render(
//       <ConnectedComponent store={store}>
//         <Footer />
//       </ConnectedComponent>
//     );

//     const links = container.getElementsByTagName('a');
//     expect(links[0].href).toContain('/');
//     expect(links[1].href).toContain('/asteroids');
//     expect(links[2].href).toContain('/pod');
//   });
// });
