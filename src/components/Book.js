import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => {
  const { bookId, title, category } = book;
  return (
    <div className="Lesson-Panel">
      <div className="number1">
        <p className="category1">
          {' '}
          {category}
        </p>
        <span className="title1">
          {' '}
          {title}
        </span>
        <p className="author1">
          {' '}
          Aurhor-
          {bookId}
        </p>
        <div className="last1">
          <span className="remove1 comment1">Comments</span>
          <button className="remove1  button1" type="button" onClick={removeBook}>Remove</button>
          <span className="remove1 edit1">Edit</span>
        </div>
      </div>
      <div className="book-row-middle">
        <div className="oval oval-64" />
        <div>
          <p className="oval-number">64%</p>
          <p className="oval-text">Completed</p>
        </div>
      </div>
      <div className="number3">
        why
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    bookId: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }),
  removeBook: PropTypes.func.isRequired,
};

Book.defaultProps = {
  book: PropTypes.shape({
    bookId: '1',
    title: 'fhfh',
    category: 'si-fi',
  }),
};

export default Book;
