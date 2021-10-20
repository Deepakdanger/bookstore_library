import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => {
  console.log(book);
  const { bookId, title, category } = book;
  console.log(bookId, title);
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
      <td className="displaybook_remove">
        remove
      </td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    bookId: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }),

};

Book.defaultProps = {
  book: PropTypes.shape({
    bookId: '1',
    title: 'fhfh',
    category: 'si-fi',
  }),
};

export default Book;
