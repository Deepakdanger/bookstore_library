import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

const book = {
  bookId: Math.random(),
  title: 'far from here',
  category: 'Kids',
};

const BooksList = () => {
  const printBook = Book(book);
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

const mapStateToProps = (state) => ({ books: state.bookReducer.books });

export default connect(mapStateToProps, null)(BooksList);
