import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => {
  const { bookId, title, category } = book;
  return (
    <div className="Lesson-Panel">
      <div className="number1">
        <p>
          {' '}
          {category}
        </p>
        <span>
          {' '}
          {title}
        </span>
        <span>
          {' '}
          Aurhor-
          {bookId}
        </span>
        <div>
          <span>Comments</span>
          <span><button type="button" onClick={removeBook}>Remove</button></span>
          <span>Edit</span>
        </div>
      </div>
      <div className="number2">
        who
      </div>
      <div className="number3">
        why
      </div>
    </div>
    // <tr className="displaybook">
    //   <td className="displaybook_id">
    //     {bookId}
    //   </td>
    //   <td className="displaybook_name">
    //     {title}
    //   </td>
    //   <td className="displaybook_category">
    //     {category}
    //   </td>
    //   <td className="displaybook_remove">
    //     <button type="button" onClick={removeBook}>Remove</button>
    //   </td>
    // </tr>
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
