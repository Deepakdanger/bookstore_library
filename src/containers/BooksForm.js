import React, { useState } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBookAction } from '../actions';

const BooksForm = ({ createBook }) => {
  const [state, setState] = useState({ title: '', category: '' });

  const options = [
    { value: 'Action', label: 'Action' },
    { value: 'Biography', label: 'Biography' },
    { value: 'History', label: 'History' },
    { value: 'Horror', label: 'Horror' },
    { value: 'Kids', label: 'Kids' },
    { value: 'Learning', label: 'Learning' },
    { value: 'Sci-Fi', label: 'Sci-Fi' },
  ];

  const handleNameChange = (e) => {
    setState({ ...state, title: e.target.value });
  };

  const handleCategoryChange = (e) => {
    setState({ ...state, category: e.value });
  };

  const bookiD = Math.random().toString();

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook({
      bookiD,
      title: state.title,
      category: state.category,
    });
    setState({ title: '', categoty: '' });
  };

  return (
    <div className="booklist">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" id="title" placeholder="title" value={state.title} onChange={(e) => handleNameChange(e)} />
        <Select options={options} onChange={(e) => handleCategoryChange(e)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => dispatch(createBookAction(book)),
});

export default connect(null, mapDispatchToProps)(BooksForm);
