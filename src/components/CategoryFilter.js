import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const categoryFilter = ({ categorySelect }) => {
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
      <Select options={options} value="All" onChange={(e) => categorySelect(e)} required />
    </div>
  );
};

categoryFilter.propTypes = {
  categorySelect: PropTypes.func.isRequired,
};

export default categoryFilter;
