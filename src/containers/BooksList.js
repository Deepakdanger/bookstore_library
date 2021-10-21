import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBookAction, filterBookAction } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books, removeBook, selectBook, filter,
}) => {
  const handleRemoveBook = (book) => removeBook(book);
  const categorySelect = (e) => {
    selectBook(e.value);
  };

  const filteredBook = filter === 'All' ? books : books.filter((book) => book.category === filter);

  const printBook = filteredBook.map((book) => (<Book key={`book-${book.bookId}`} book={book} removeBook={() => handleRemoveBook(book)} />));

  return (
    <div className="booklist">
      <CategoryFilter categorySelect={categorySelect} />
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
  selectBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => dispatch(removeBookAction(book)),
  selectBook: (filter) => dispatch(filterBookAction(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
