import React, { useState } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBookAction } from '../actions';

const BooksForm = ({ createBook }) => {
  const [state, setState] = useState({ title: '', category: '' });

  const options = [
    { value: 'action', label: 'Action' },
    { value: 'biography', label: 'Biography' },
    { value: 'history', label: 'History' },
    { value: 'horror', label: 'Horror' },
    { value: 'kids', label: 'Kids' },
    { value: 'learning', label: 'Learning' },
    { value: 'sci-fi', label: 'Sci-Fi' },
  ];

  const handleNameChange = (e) => {
    setState((prevState) => ({ state: { ...prevState.state, title: e.target.value } }));
  };

  const handleCategoryChange = (e) => {
    setState((prevState) => ({ state: { ...prevState.state, category: e.value } }));
  };

  const bookiD = Math.random().toString();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(bookiD);
    createBook({
      bookiD,
      title: state.state.title,
      category: state.state.category,
    });
    setState({ title: '', categoty: '' });
  };

  return (
    <div className="booklist">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" id="title" onChange={(e) => handleNameChange(e)} />
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
