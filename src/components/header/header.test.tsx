// import React from 'react';
// import { render } from '@testing-library/react';

// import Header from './header';
// import { createStore } from 'redux';
// import rootReducer from '../../store/root-reducer';

// import ConnectedComponent from '../../utils/test-utils';

// let store = createStore(rootReducer);
// describe('Header Component', () => {
//   it('Should render the header container, the logo and 3 links with its icons', () => {
//     const { getByTestId, container } = render(
//       <ConnectedComponent store={store}>
//         <Header />
//       </ConnectedComponent>
//     );

//     const links = container.getElementsByTagName('a');
//     const logos = container.getElementsByTagName('img');
//     const icons = container.getElementsByTagName('i');
//     expect(getByTestId('header-container')).toBeDefined();
//     expect(logos.length).toBeDefined();
//     expect(links.length).toBe(3);
//     expect(icons.length).toBe(3);
//   });
// });
