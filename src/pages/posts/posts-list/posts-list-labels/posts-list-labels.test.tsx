import React from 'react';
import { render } from '@testing-library/react';

import PostsListLabels from './posts-list-labels';

describe('Posts list labels component', () => {
  it('Should display the container and 4 labels', () => {
    const { container, getByTestId } = render(<PostsListLabels />);

    const labels = container.getElementsByTagName('div');
    expect(getByTestId('posts-list__labels-container')).toBeDefined();
    expect(labels.length).toBe(5); // Container is also a div
    expect(labels[1].innerHTML).toEqual('Title');
    expect(labels[2].innerHTML).toEqual('Latitude');
    expect(labels[3].innerHTML).toEqual('Longitude');
    expect(labels[4].innerHTML).toEqual('Created at');
  });
});
