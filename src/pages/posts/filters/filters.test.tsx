import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Filters from './filters';
import { ORDER_FILTERS } from 'constants/index';

const defaultProps = {
  onSearchChange: jest.fn(),
  onOrderChange: jest.fn(),
};

describe('Filter area component', () => {
  it('Should display the container, one input and one select', () => {
    const { container, getByTestId } = render(<Filters {...defaultProps} />);

    expect(getByTestId('filters-list__container')).toBeDefined();
    expect(container.getElementsByTagName('select').length).toBe(1);
    expect(container.getElementsByTagName('input').length).toBe(1);
  });

  it('Should call ordering method when changing ordering filter', () => {
    const { getByTestId } = render(<Filters {...defaultProps} />);

    const orderFilter = getByTestId('filter-order');
    fireEvent.change(orderFilter, { target: { value: ORDER_FILTERS.TITLE_ASC } });

    expect(defaultProps.onOrderChange).toBeCalled();
  });

  it('Should call searching method when changing search filter', () => {
    const { getByTestId } = render(<Filters {...defaultProps} />);

    const orderFilter = getByTestId('filter-search');
    fireEvent.change(orderFilter, { target: { value: 'fake' } });

    expect(defaultProps.onSearchChange).toBeCalled();
  });
});
