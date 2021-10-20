import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = ({ books }) => {
  console.log(books);
  const printBook = books.map((book) => (<Book key={`book-${book.bookId}`} book={book} />));
  return (
    <div className="booklist">
      <table className="booklist-table">
        <thead>
          <tr className="booklist-row">
            <th className="booklist-header">ID</th>
            <th className="booklist-title">Title Of Book</th>
            <th className="booklist-category">Category Of Book</th>
          </tr>
        </thead>
        <tbody>
          {printBook}
        </tbody>
      </table>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({ books: state.books });

export default connect(mapStateToProps, null)(BooksList);
