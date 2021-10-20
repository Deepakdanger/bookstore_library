import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBookAction } from '../actions';

const BooksList = ({ books, removeBook }) => {
  console.log(books);
  const handleRemoveBook = (book) => removeBook(book);
  const printBook = books.map((book) => (<Book key={`book-${book.bookId}`} book={book} removeBook={() => handleRemoveBook(book)} />));
  return (
    <div className="booklist">
      <table className="booklist-table">
        <thead>
          <tr className="booklist-row">
            <th className="booklist-header">ID</th>
            <th className="booklist-title">Title Of Book</th>
            <th className="booklist-category">Category Of Book</th>
            <th className="booklist-remove">Remove</th>
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
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ books: state.books });

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => dispatch(removeBookAction(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
