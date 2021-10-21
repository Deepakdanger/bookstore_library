import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const CategoryFilter = ({ categorySelect }) => {
  const options = [
    { value: 'All', label: 'All' },
    { value: 'action', label: 'Action' },
    { value: 'biography', label: 'Biography' },
    { value: 'history', label: 'History' },
    { value: 'horror', label: 'Horror' },
    { value: 'kids', label: 'Kids' },
    { value: 'learning', label: 'Learning' },
    { value: 'sci-fi', label: 'Sci-Fi' },
  ];

  return (
    <div>
      <Select options={options} onChange={(e) => categorySelect(e)} required />
    </div>
  );
};

CategoryFilter.propTypes = {
  categorySelect: PropTypes.func.isRequired,
};

export default CategoryFilter;
