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
      <div className="book-progress">
        <div className="circular">
          <div className="inner" />
          <div className="circle">
            <div className="bar left">
              <div className="progress" />
            </div>
            <div className="bar right">
              <div className="progress" />
            </div>
          </div>
        </div>
        <div>
          <p className="Percent-Complete">75%</p>
          <p className="Completed">Completed</p>
        </div>
      </div>
      <div className="number3">
        <p className="current3"> CURRENT CHAPTER</p>
        <p className="chapter3">Chapter 9</p>
        <button className="update3" type="button">UPDATE PROGRESS</button>
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
