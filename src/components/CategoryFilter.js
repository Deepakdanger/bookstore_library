import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const CategoryFilter = ({ categorySelect }) => {
  const options = [
    { value: 'All', label: 'All' },
    { value: 'Action', label: 'Action' },
    { value: 'Biography', label: 'Biography' },
    { value: 'History', label: 'History' },
    { value: 'Horror', label: 'Horror' },
    { value: 'Kids', label: 'Kids' },
    { value: 'Learning', label: 'Learning' },
    { value: 'Sci-Fi', label: 'Sci-Fi' },
  ];

  return (
    <div>
      <p> Select Category </p>
      <Select options={options} onChange={(e) => categorySelect(e)} required />
    </div>
  );
};

CategoryFilter.propTypes = {
  categorySelect: PropTypes.func.isRequired,
};

export default CategoryFilter;
