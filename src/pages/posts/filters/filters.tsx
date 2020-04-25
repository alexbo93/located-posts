import React, { ChangeEvent } from 'react';

import { FiltersContainer, FilterItemRight, FilterItemLeft } from './filter.styled';

import { CustomInput, CustomSelect } from '../../../components/input';
import { PostsFiltersModel } from '../types';
import { ORDER_FILTERS } from '../../../constants';

const Filters: React.FC<PostsFiltersModel> = ({
  onSearchChange,
  onOrderChange,
}: PostsFiltersModel) => (
  <FiltersContainer data-testid='filters-list__container'>
    <FilterItemLeft>
      <CustomSelect
        as={'select'}
        id='filter-order'
        data-testid='filter-order'
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          onOrderChange(event.target.value)
        }
      >
        <option value=''>Order By</option>
        <option value={ORDER_FILTERS.TITLE_ASC}>Title (asc)</option>
        <option value={ORDER_FILTERS.TITLE_DESC}>Title (desc)</option>
        <option value={ORDER_FILTERS.NEWEST}>Newest</option>
      </CustomSelect>
    </FilterItemLeft>
    <FilterItemRight>
      <CustomInput
        id='filter-search'
        data-testid='filter-search'
        onChange={(event: ChangeEvent<HTMLInputElement>) => onSearchChange(event.target.value)}
        placeholder='Search by Name...'
      ></CustomInput>
    </FilterItemRight>
  </FiltersContainer>
);

export default Filters;
