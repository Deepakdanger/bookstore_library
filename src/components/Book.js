import React from 'react';
import PropTypes from 'prop-types';

const Book = (books) => {
  const { bookId, title, category } = books;
  return (
    <tr className="displaybook">
      <td className="displaybook_id">
        {bookId}
      </td>
      <td className="displaybook_name">
        {title}
      </td>
      <td className="displaybook_category">
        {category}
      </td>
    </tr>
  );
};

Book.propTypes = {
  books: PropTypes.shape({
    bookId: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }),

};

Book.defaultProps = {
  books: PropTypes.shape({
    bookId: '1',
    title: 'fhfh',
    category: 'si-fi',
  }),
};

export default Book;
