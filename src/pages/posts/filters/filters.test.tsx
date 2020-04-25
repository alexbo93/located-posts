import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Filters from './filters';
import { LUNAR_DISTANCE } from '../../../constants';

const mockedFn = jest.fn();
describe('Filters area component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('Should render the container, 2 select filters and checkbox', () => {
    const { getByTestId, container } = render(
      <Filters onFilterChange={mockedFn} />
    );

    const selects = container.getElementsByTagName('select');
    const inputs = container.getElementsByTagName('input');
    expect(getByTestId('filters-list__container')).toBeDefined();
    expect(selects.length).toBe(2);
    expect(inputs.length).toBe(1);
    expect(inputs[0].type).toBe('checkbox');
  });

  it('Should call on handle change method when changing distance filter', () => {
    const { container } = render(<Filters onFilterChange={mockedFn} />);

    const distanceSelect = container.getElementsByTagName('select')[0];
    fireEvent.change(distanceSelect, { target: { value: LUNAR_DISTANCE * 5 } });

    expect(mockedFn).toHaveBeenCalledTimes(1);
  });

  it('Should call on handle change method when changing velocity filter', () => {
    const { container } = render(<Filters onFilterChange={mockedFn} />);

    const velocitySelect = container.getElementsByTagName('select')[1];
    fireEvent.change(velocitySelect, { target: { value: 10 } });

    expect(mockedFn).toHaveBeenCalledTimes(1);
  });

  it('Should call on handle change method when changing velocity filter', () => {
    const { getByTestId } = render(<Filters onFilterChange={mockedFn} />);

    const hazardousCheckbox = getByTestId('filter-hazardous');
    fireEvent.click(hazardousCheckbox);

    expect(mockedFn).toHaveBeenCalledTimes(1);
  });
});
