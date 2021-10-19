import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

function BooksList() {
  const BookList_all = books.map((book) => (<Book key={`book-${book.bookId}`} book={book} />));
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
          {BookList_all}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => ({ books: state.bookReducer.books });

export default connect(mapStateToProps, null)(BooksList);
